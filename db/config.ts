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
};

const Cantante = {
  columns: {
    cod_art: column.number({ primaryKey: true }),
    nom_art: column.text(),
    apel_art: column.text(),
    nombre_real_art: column.text(),
    edad_art: column.number(),
    oyentes_art: column.number(),
    nacionalidad_art: column.text(),
    anio_comienzo_art: column.number(),
    cod_manager: column.number(),
    cod_sello: column.number(),
  }
};


// Exportar la configuración de la base de datos
export default defineDb({
  tables: {
    User,
    Cantante,
  }
});

export { User, Cantante };