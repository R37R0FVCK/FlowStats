import { column, defineDb } from 'astro:db';

const User = {
  columns: {
    cod_usuario: column.number({ primaryKey: true, autoIncrement: true }),
    nombre_usuario: column.text(),
    nombre: column.text(),
    apellidos: column.text(),
    contrasena: column.text(),
    correo_electronico: column.text(),
    direccion_usu: column.text(),
    telefono_usu: column.text(),
    tipo_usu: column.boolean(),
    fecha_nacimiento: column.date(),
    fecha_registro: column.date(),
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