import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  try {
    const incomingFormData = await request.formData();
    // Build a new FormData to forward to web3forms so the request matches what web3forms expects
    const forwardFormData = new FormData();
    for (const [key, value] of incomingFormData.entries()) {
      forwardFormData.append(key, value as string);
    }

    // If the form sends firstName and lastName, but web3forms expects 'name', set it
    const firstName = incomingFormData.get('firstName')?.toString() ?? '';
    const lastName = incomingFormData.get('lastName')?.toString() ?? '';
    if (firstName || lastName) {
      const combined = `${firstName}${firstName && lastName ? ' ' : ''}${lastName}`.trim();
      // Overwrite or set the name field
      forwardFormData.set('name', combined);
    }

    // Add the server-side secret (never logged)
    forwardFormData.append('access_key', process.env.WEB3FORMS_SECRET ?? '');

    // For troubleshooting, do not log the secret — only log non-sensitive fields
    const loggedBody = {} as Record<string, any>;
    for (const [key, value] of forwardFormData.entries()) {
      if (key === 'access_key') continue;
      loggedBody[key] = value;
    }
    console.log('Forwarding signup form fields:', loggedBody);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: forwardFormData,
    });

    const json = await res.json();
    console.log('web3forms response status:', res.status, 'json:', { ...json, access_key: undefined });

    return new Response(JSON.stringify(json), {
      status: res.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Server submit error', err);
    return new Response(JSON.stringify({ success: false, message: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
