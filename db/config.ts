
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

const Capturas = defineTable({
  columns: {
    id_captura : column.number( {primaryKey: true} ),
    id_camara : column.number(),
    fecha_hora : column.date(),
    imagen : column.number(),
    procesada : column.boolean(),
  },
})

export default defineDb({
  tables: { Usuarios, Capturas},
})