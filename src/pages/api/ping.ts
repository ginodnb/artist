import type { APIRoute } from 'astro';

export const get: APIRoute = async () => {
  return new Response(JSON.stringify({ ok: true, msg: 'pong' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
