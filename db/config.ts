import { column, defineDb } from 'astro:db';


const User = {
  columns: {
    nombre: column.text({ primaryKey: true }),
    contraseña: column.text({ unique: true }),
    apellidos: column.text(),
    correo: column.text({ unique: true }),
    direccion: column.text(),
    fecha_nacimiento: column.text(),
    tipo_usuario: column.text(),
    telefono: column.text({ unique: true }),

  }
}
// https://astro.build/db/config
export default defineDb({
  tables: {

    User,
  }
});