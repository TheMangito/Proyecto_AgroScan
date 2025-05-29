
import { defineDb, defineTable, column } from 'astro:db';

const Usuarios = defineTable({
  columns: {
    id_usuario : column.number( {primaryKey: true} ),
    nombre : column.text(),
    email : column.text(),
    rol: column.text(),
    password : column.text()
  },
})

//Se necesita cambiar la base de datos para que funcione correctamente
// y se pueda hacer la inserción de imágenes en base64 String
// y no como un archivo binario, ya que Astro no permite la inserción de archivos binarios directamente en la base de datos.
//Iván, tu turno de hacer la modificación de la base de datos para que funcione correctamente
const Capturas = defineTable({
  columns: {
    id_captura: column.number({ primaryKey: true }),
    id_camara: column.number(),
    fecha_hora: column.date(),
    imagen: column.text(),
    procesada: column.boolean(),
  }
})

export default defineDb({
  tables: { Usuarios, Capturas},
})