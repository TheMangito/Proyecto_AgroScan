import { db, Usuarios } from 'astro:db';

export default async function () {
  await db
    .insert(Usuarios)
    .values([
      { id_usuario: 1, nombre: 'Kasim', email: 'kasim@mail.tld', rol: 'admin', contraseña: 'admin123' },
      { id_usuario: 2, nombre: 'Mina',  email: 'mina@mail.tld',  rol: 'user',  contraseña: 'admin123' },
    ]);
}
