import { column, defineDb } from 'astro:db';


const Usuario = {
  columns: {
    cod_usuario: column.number({ primaryKey: true, autoIncrement: true }),
    nombre_usuario: column.text(),
    nombre: column.text(),
    apellidos: column.text(),
    contraseña: column.text(),
    correo_electronico: column.text(),
    direccion_usu: column.text(),
    telefono_usu: column.text(),
    tipo_usu: column.boolean(),
    img_usu: column.text(),
    fecha_nacimiento: column.date(),
    fecha_registro: column.date(),
  }
};
const Manager = {
  columns: {
    cod_manager: column.number({ primaryKey: true, autoIncrement: true }),
    nom_manager: column.text(),
    apel_manager: column.text(),
    nacionalidad_manager: column.text(),
  }

};
const Sello_Discografico = {
  columns: {
    cod_sello: column.number({ primaryKey: true, autoIncrement: true }),
    nom_sello: column.text(),
    num_artistas: column.number(),
    propietario: column.text(),
    anio_fundacion: column.number(),//revisar si el campo esta bien en phpmyadmin
    pais: column.text()
  }
};
const Artista = {
  columns: {
    cod_art: column.number({ primaryKey: true }),
    nom_art: column.text(),
    apel_art: column.text(),
    nombre_real_art: column.text(),
    edad_art: column.number(),
    oyentes_art: column.number(),
    nacionalidad_art: column.text(),
    anio_comienzo_art: column.number(),
    img_art: column.text(),
    cod_manager: column.number(),
    cod_sello: column.number(),
  }
};
const Productor = {
  columns: {
    cod_productor: column.number({ primaryKey: true, autoIncrement: true }),
    nom_prod: column.text(),
    nombre_real_prod: column.text(),
    apel_prod: column.text(),
    edad_prod: column.number(),
    nacionalidad_prod: column.text(),
    anio_comienzo_prod: column.number(),
    img_prod: column.text(),
    cod_manager: column.number(),
    cod_sello: column.number(),


  }

};
const Album = {
  columns: {
    cod_album: column.number({ primaryKey: true, autoIncrement: true }),
    nom_album: column.text(),
    fecha_lanzamiento_album: column.text(),
    duracion: column.text(),//posible cambio
    num_canciones: column.number(),
    img_album: column.text(),
    cod_art: column.number(),
  }
};
const Cancion = {
  columns: {
    cod_cancion: column.number({ primaryKey: true, autoIncrement: true }),
    fecha_lanzamiento: column.text(),
    titulo: column.text(),
    genero_cancion: column.text(),
    num_reproducciones: column.number(),
    colaboraciones: column.text(),
    tipo_reproduccion: column.text(),
    tipo_discografia: column.text(),
    cod_album: column.number(),
  }
};
const Concierto = {

  columns: {
    cod_concierto: column.number({ primaryKey: true, autoIncrement: true }),
    fecha_con: column.date(),
    hora_con: column.date(),// posible cambio
    ciudad_con: column.text(),
    ubicacion_con: column.text(),
    cod_art: column.number(),
  }
};


const Produce = {
  columns: {
    cod_prod: column.number({ primaryKey: true, autoIncrement: true }),
    cod_productor: column.number(),
    cod_cancion: column.number(),
  }
};
const Compone = {
  columns: {
    cod_comp: column.number({ primaryKey: true, autoIncrement: true }),
    cod_art: column.number({ references: () => Artista.columns.cod_art }),
    cod_cancion: column.number({ references: () => Cancion.columns.cod_cancion }),
  }
};
const Asiste = {
  columns: {
    cod_as: column.number({ primaryKey: true, autoIncrement: true }),
    cod_concierto: column.number(),
    cod_usuario: column.number(),

  }
};
const Gusta = {
  columns: {
    cod_gusta: column.number({ primaryKey: true, autoIncrement: true }),
    cod_usuario: column.number(),
    cod_art: column.number(),

  }
};
const Escucha = {
  columns: {
    cod_escucha: column.number({ primaryKey: true, autoIncrement: true }),
    cod_usuario: column.number(),
    cod_cancion: column.number(),
  }
}
const Ve = {
  columns: {
    cod_ve: column.number({ primaryKey: true, autoIncrement: true }),
    cod_usuario: column.number(),
    cod_album: column.number(),
  }
};



// Exportar la configuración de la base de datos
export default defineDb({
  tables: {
    Usuario,
    Artista,
    Manager,
    Sello_Discografico,
    Productor,
    Album,
    Cancion,
    Concierto,
    Produce,
    Compone,
    Asiste,
    Gusta,
    Escucha,
    Ve

  }
});
