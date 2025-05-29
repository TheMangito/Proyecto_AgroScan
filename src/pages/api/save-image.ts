// src/pages/api/save-image.ts
import type { APIRoute } from 'astro';
import { db, Capturas } from 'astro:db';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { base64 } = await request.json();

    if (!base64) {
      return new Response(
        JSON.stringify({ success: false, message: 'Se requiere campo "base64".' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const insert = await db.insert(Capturas).values({
      id_camara: 1,
      fecha_hora: new Date(),
      imagen: base64,
      procesada: false
    });

    return new Response(
      JSON.stringify({ success: true, id: insert.lastInsertRowid }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, message: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};