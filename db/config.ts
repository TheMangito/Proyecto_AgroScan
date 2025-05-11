
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

export default defineDb({
  tables: { Usuarios },
})