import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    // Convert incoming FormData to a plain object
    const body = Object.fromEntries(formData);

    // Inject the secret server-side — keep this value out of the client
    body.access_key = process.env.WEB3FORMS_SECRET;

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const json = await res.json();
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
