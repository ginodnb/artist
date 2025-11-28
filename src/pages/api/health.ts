import type { APIRoute } from 'astro';
import { execSync } from 'child_process';

export const get: APIRoute = async () => {
  let commit = 'unknown';
  try {
    commit = execSync('git rev-parse --short HEAD').toString().trim();
  } catch (err) {
    // ignore
  }
  return new Response(JSON.stringify({ status: 'ok', commit, time: new Date().toISOString() }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
