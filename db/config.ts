import { column, defineDb } from 'astro:db';


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
    cod_manager: column.number({ references: () => Manager.columns.cod_manager }),
    cod_sello: column.number({ references: () => Sello_Discografico.columns.cod_sello }),
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
    cod_manager: column.number({ references: () => Manager.columns.cod_manager }),
    cod_sello: column.number({ references: () => Sello_Discografico.columns.cod_sello }),


  }

};
const Album = {
  columns: {
    cod_album: column.number({ primaryKey: true, autoIncrement: true }),
    nom_album: column.text(),
    fecha_lanzamiento_album: column.date(),
    duracion: column.number(),//posible cambio
    num_canciones: column.number(),
    img_album: column.text(),
    cod_art: column.number({ references: () => Artista.columns.cod_art }),
  }
};
const Cancion = {
  columns: {
    cod_cancion: column.number({ primaryKey: true, autoIncrement: true }),
    fecha_lanzamiento_cancion: column.date(),
    titulo: column.text(),
    genero_cancion: column.text(),
    num_reproducciones: column.number(),
    colaboraciones: column.text(),
    videoclip: column.text(),
    tipo_discografia: column.text(),
    cod_album: column.number({ references: () => Album.columns.cod_album }),
  }
};
const Concierto = {

  columns: {
    cod_concierto: column.number({ primaryKey: true, autoIncrement: true }),
    fecha_con: column.date(),
    hora_con: column.date(),// posible cambio
    ciudad_con: column.text(),
    ubicacion_con: column.text(),
    cod_art: column.number({ references: () => Artista.columns.cod_art }),
  }
};
const Usuario = {
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

const Produce = {
  columns: {
    cod_prod: column.number({ primaryKey: true, autoIncrement: true }),
    cod_productor: column.number({ references: () => Productor.columns.cod_productor }),
    cod_cancion: column.number({ references: () => Cancion.columns.cod_cancion }),
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
    cod_concierto: column.number({ references: () => Concierto.columns.cod_concierto }),
    cod_usuario: column.number({ references: () => Usuario.columns.cod_usuario }),

  }
};
const Gusta = {
  columns: {
    cod_gusta: column.number({ primaryKey: true, autoIncrement: true }),
    cod_usuario: column.number({ references: () => Usuario.columns.cod_usuario }),
    cod_art: column.number({ references: () => Artista.columns.cod_art }),

  }
};
const Escucha = {
  columns: {
    cod_escucha: column.number({ primaryKey: true, autoIncrement: true }),
    cod_usuario: column.number({ references: () => Usuario.columns.cod_usuario }),
    cod_cancion: column.number({ references: () => Cancion.columns.cod_cancion }),
  }
}
const Ve = {
  columns: {
    cod_ve: column.number({ primaryKey: true, autoIncrement: true }),
    cod_usuario: column.number({ references: () => Usuario.columns.cod_usuario }),
    cod_album: column.number({ references: () => Album.columns.cod_album }),
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

//export { Usuario, Artista };