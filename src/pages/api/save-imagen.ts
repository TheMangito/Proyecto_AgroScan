import type { APIRoute } from 'astro';
import { db, Capturas } from 'astro:db';

export const POST: APIRoute = async ({request}) => {
  try {
    // 1) Leemos el JSON que envía el front con la cadena Base64
    const { base64 } = await request.json();
    if (!base64) {
      return new Response(
        JSON.stringify({ success: false, message: 'Se requiere campo "base64".' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    // Realiza una consulta para obtener todos los productos
    const results = await db.insert(Capturas).values({
        id_captura: 1,
        id_camara: 1,
        fecha_hora: new Date(),
        imagen: base64,
        procesada: false
    });
    return new Response(JSON.stringify(results), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
