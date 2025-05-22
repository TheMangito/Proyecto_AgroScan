import type { APIRoute } from 'astro';

export const runtime   = 'edge';           // rápido y sin cold starts
export const revalidate = 0;               // nunca caches

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ now: Date.now() }), {
    headers: { 'Content-Type': 'application/json' }
  });
