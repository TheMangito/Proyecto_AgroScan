// src/pages/api/hourly.ts
import type { APIRoute } from 'astro';

// ① La función se ejecuta en Edge (puedes usar 'node' si necesitas APIs de Node)
export const runtime = 'edge';

// ② Cron-expresión: “minuto 0 de cada hora”
export const schedule = '0 * * * *';      // 0  */1  *  *  *  *  (para cada hora exacta)

// ③ Si usas caché de datos, desactívala para que se ejecute siempre
export const revalidate = 0;

export const GET: APIRoute = async () => {
  await doSomething();          // <-- tu lógica
  return new Response('OK');    // Vercel solo necesita un 2xx
};

async function doSomething() {
  // Aquí pones el código que quieres lanzar cada hora:
  // actualizar una BD, limpiar registros, llamar a un webhook, etc.
}
