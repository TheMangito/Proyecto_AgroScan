import { db, Usuarios } from 'astro:db';

export default async function() {
  await db.insert(Usuarios).values([
    {id_usuario: 1, nombre: "Admin", email: "admin@agroscan.ai", rol: "admin", password: "admin123"}
  ]);

} 