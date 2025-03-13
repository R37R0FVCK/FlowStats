import { db, Artista, Manager, Sello_Discografico, Cancion, Album, Compone, Produce, Productor, Usuario } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {

    // Insertar datos de la tabla manager
    const managers = [
        {
            cod_manager: 1,
            nom_manager: "Federico",
            apel_manager: "Lauria",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 2,
            nom_manager: "Lex",
            apel_manager: "Borrero",
            nacionalidad_manager: "Estadounidense"
        },
        {
            cod_manager: 3,
            nom_manager: "Mariana",
            apel_manager: "Lopez",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 4,
            nom_manager: "Felix",
            apel_manager: "Rodriguez Navarro",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 5,
            nom_manager: "Jaime",
            apel_manager: "Levine",
            nacionalidad_manager: "Estadounidense"
        },
        {
            cod_manager: 6,
            nom_manager: "Walter",
            apel_manager: "Kolm",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 7,
            nom_manager: "Jose ",
            apel_manager: "Levy",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 8,
            nom_manager: "Carlos",
            apel_manager: "Perez",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 9,
            nom_manager: "Tonino",
            apel_manager: "Mebarak",
            nacionalidad_manager: "Colombiana"
        },
        {
            cod_manager: 10,
            nom_manager: "Veronica ",
            apel_manager: "Giraldo",
            nacionalidad_manager: "Colombiana"
        },
        {
            cod_manager: 11,
            nom_manager: "Juan Jose",
            apel_manager: "Fernandez",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 12,
            nom_manager: "Guido",
            apel_manager: " Lanaccio",
            nacionalidad_manager: "Argentino"
        },
        {
            cod_manager: 13,
            nom_manager: "Matias ",
            apel_manager: "Vazquez",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 14,
            nom_manager: "Alejandro",
            apel_manager: "Spajic",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 15,
            nom_manager: "Ariel",
            apel_manager: "Gringberg ",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 16,
            nom_manager: "Paul",
            apel_manager: " Fourmy ",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 17,
            nom_manager: "Carlos ",
            apel_manager: "Mata",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 18,
            nom_manager: "Javier",
            apel_manager: "Fernandez",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 19,
            nom_manager: "Sergio",
            apel_manager: "Martos",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 20,
            nom_manager: "Fabio",
            apel_manager: "Acosta",
            nacionalidad_manager: "Colombiana"
        },
        {
            cod_manager: 21,
            nom_manager: "Luis",
            apel_manager: "Rodríguez",
            nacionalidad_manager: "Puertorriqueña"
        },
        {
            cod_manager: 22,
            nom_manager: "Juan Carlos",
            apel_manager: "Rodriguez",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 23,
            nom_manager: "Phil",
            apel_manager: "Rodriguez",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 24,
            nom_manager: "Lucas ",
            apel_manager: "Gimenez",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 25,
            nom_manager: "Valeria",
            apel_manager: "Murillo trujano",
            nacionalidad_manager: "Mexicana"
        },
        {
            cod_manager: 26,
            nom_manager: " Ben",
            apel_manager: " Tischker",
            nacionalidad_manager: "Francesa"
        },
        {
            cod_manager: 27,
            nom_manager: " Nicolás",
            apel_manager: "Smirnoff",
            nacionalidad_manager: " Argentina"
        },
        {
            cod_manager: 28,
            nom_manager: "Raúl ",
            apel_manager: "López",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 29,
            nom_manager: "Luis",
            apel_manager: "Jimenez ",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 30,
            nom_manager: "Don ",
            apel_manager: "Rouch",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 31,
            nom_manager: "David",
            apel_manager: "Sanchez",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 32,
            nom_manager: "Olga",
            apel_manager: "de Palma Ocaña",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 33,
            nom_manager: "Taiel ",
            apel_manager: "Heredia",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 34,
            nom_manager: "Federico",
            apel_manager: "De Vita",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 35,
            nom_manager: "Pablo",
            apel_manager: "Jimenez ",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 36,
            nom_manager: "Juan Carlos",
            apel_manager: "Armas",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 37,
            nom_manager: "Paul",
            apel_manager: "Tunney",
            nacionalidad_manager: "Inglesa"
        },
        {
            cod_manager: 38,
            nom_manager: "Juan Carlos",
            apel_manager: "Martin",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 39,
            nom_manager: "Pablo ",
            apel_manager: "Dueñas",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 40,
            nom_manager: "Nydia",
            apel_manager: " Laner",
            nacionalidad_manager: "Puertorriqueña"
        },
        {
            cod_manager: 41,
            nom_manager: "Francisco Javier ",
            apel_manager: "García Pérez",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 42,
            nom_manager: "Igor",
            apel_manager: "Pussente",
            nacionalidad_manager: "Brasileña"
        },
        {
            cod_manager: 43,
            nom_manager: "José Ángel ",
            apel_manager: "Paulus",
            nacionalidad_manager: "Dominicana"
        },
        {
            cod_manager: 44,
            nom_manager: "Wassim ",
            apel_manager: "Slaiby",
            nacionalidad_manager: "Libana"
        },
        {
            cod_manager: 45,
            nom_manager: "Tatiana ",
            apel_manager: "Fernandez",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 46,
            nom_manager: "Raúl ",
            apel_manager: "Ortiz",
            nacionalidad_manager: "Puertorriqueña"
        },
        {
            cod_manager: 47,
            nom_manager: "Federico",
            apel_manager: "Villareal",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 48,
            nom_manager: "Eduardo ",
            apel_manager: "Villanueva",
            nacionalidad_manager: "Puertorriqueña"
        },
        {
            cod_manager: 49,
            nom_manager: "Diego",
            apel_manager: "Poblete",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 50,
            nom_manager: "Lucas",
            apel_manager: "Keller",
            nacionalidad_manager: "Estadounidense"
        },
        {
            cod_manager: 51,
            nom_manager: "Juan Pablo",
            apel_manager: "De Luca",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 52,
            nom_manager: "Tony",
            apel_manager: "De Cio",
            nacionalidad_manager: "Estadounidense"
        },
        {
            cod_manager: 53,
            nom_manager: "Santi ",
            apel_manager: "Garcia",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 54,
            nom_manager: "Javier",
            apel_manager: "Gonzalez",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 55,
            nom_manager: "Nico",
            apel_manager: "Nahuel Gomez",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 56,
            nom_manager: "Lucas ",
            apel_manager: "Keller",
            nacionalidad_manager: "Estadounidense"
        },
        {
            cod_manager: 57,
            nom_manager: "Nic",
            apel_manager: "Warner",
            nacionalidad_manager: "Estadounidense"
        },
        {
            cod_manager: 58,
            nom_manager: "Ron ",
            apel_manager: "Laffitte",
            nacionalidad_manager: "Estadounidense"
        },
        {
            cod_manager: 59,
            nom_manager: "Agustin",
            apel_manager: "Boffi",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 60,
            nom_manager: "Josefina",
            apel_manager: "Marcos",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 61,
            nom_manager: "Lucas",
            apel_manager: "Gonzalez",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 62,
            nom_manager: "Leo",
            apel_manager: "Belizan",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 63,
            nom_manager: "Agustin ",
            apel_manager: "Escuder ",
            nacionalidad_manager: "Uruguaya"
        },
        {
            cod_manager: 64,
            nom_manager: "Francisco ",
            apel_manager: "Wechsler",
            nacionalidad_manager: "Argentina"
        },
        {
            cod_manager: 65,
            nom_manager: "Amelfis",
            apel_manager: "Diaz",
            nacionalidad_manager: "Estadounidense"
        },
        {
            cod_manager: 66,
            nom_manager: "Ariel ",
            apel_manager: "Kelly",
            nacionalidad_manager: "Estadounidense"
        },
        {
            cod_manager: 67,
            nom_manager: "Alba",
            apel_manager: "Blasi Esteve",
            nacionalidad_manager: "Española"
        },
        {
            cod_manager: 68,
            nom_manager: "Carlos Isaias",
            apel_manager: " Morales Williams",
            nacionalidad_manager: "Panameña"
        },
        {
            cod_manager: 69,
            nom_manager: "Joaquin ",
            apel_manager: "Wakks Pavia",
            nacionalidad_manager: "Mexicana"
        },
        {
            cod_manager: 70,
            nom_manager: "Franco ",
            apel_manager: "Aguirre",
            nacionalidad_manager: "Chilena"
        },
        {
            cod_manager: 71,
            nom_manager: "Leandro",
            apel_manager: " Arango",
            nacionalidad_manager: "Colombiana"
        },
        {
            cod_manager: 72,
            nom_manager: "Julia ",
            apel_manager: "May",
            nacionalidad_manager: "Estadounidense"
        }
    ]
    for (const manager of managers) {
        await db.insert(Manager).values(manager);
    }
    //insertar datos de la tabla sello discografico
    const sellos_discograficos = [
        {
            cod_sello: 1,
            nom_sello: "Mueva Records",
            num_artistas: 14,
            propietario: "Omar Varela ",
            anio_fundacion: 2010,
            pais: "Agentina"
        },
        {
            cod_sello: 2,
            nom_sello: "Dale Play Records",
            num_artistas: 16,
            propietario: "Federico Lauria",
            anio_fundacion: 2020,
            pais: "Argentina"
        },
        {
            cod_sello: 3,
            nom_sello: "Neon16",
            num_artistas: 8,
            propietario: "Tainy",
            anio_fundacion: 2021,
            pais: "Puerto Rico"
        },
        {
            cod_sello: 4,
            nom_sello: "The Wave Music Group",
            num_artistas: 10,
            propietario: "DJ Julian",
            anio_fundacion: 2022,
            pais: "Estados Unidos"
        },
        {
            cod_sello: 5,
            nom_sello: "Columbia Records",
            num_artistas: 1000,
            propietario: "Sony Music Entertainment",
            anio_fundacion: 1888,
            pais: "Estados Unidos"
        },
        {
            cod_sello: 6,
            nom_sello: "Interscope Records.",
            num_artistas: 300,
            propietario: "Universal Music Group",
            anio_fundacion: 1990,
            pais: "Estados Unidos"
        },
        {
            cod_sello: 7,
            nom_sello: "Sony Music Latin",
            num_artistas: 500,
            propietario: "Sony Music Entertainment",
            anio_fundacion: 1980,
            pais: "Estados Unidos"
        },
        {
            cod_sello: 8,
            nom_sello: "Warner Music Latina",
            num_artistas: 300,
            propietario: "Warner Music Group",
            anio_fundacion: 1987,
            pais: " Estados Unidos"
        },
        {
            cod_sello: 9,
            nom_sello: "Universal Music Spain",
            num_artistas: 100,
            propietario: "Vivendi",
            anio_fundacion: 1998,
            pais: "España"
        },
        {
            cod_sello: 10,
            nom_sello: "Warner Music Spain",
            num_artistas: 200,
            propietario: "Warner Music Group",
            anio_fundacion: 1981,
            pais: "España"
        },
        {
            cod_sello: 11,
            nom_sello: "Albaycin Records",
            num_artistas: 6,
            propietario: "Ayax Y Prok",
            anio_fundacion: 2018,
            pais: "España"
        },
        {
            cod_sello: 12,
            nom_sello: "Universal Music",
            num_artistas: 1500,
            propietario: "Vivendi",
            anio_fundacion: 1934,
            pais: "Francia"
        },
        {
            cod_sello: 13,
            nom_sello: "Universal Music Latin Entertainment",
            num_artistas: 3000,
            propietario: "Universal Music Group",
            anio_fundacion: 1997,
            pais: "Estados Unidos"
        },
        {
            cod_sello: 14,
            nom_sello: "Fifty One Music",
            num_artistas: 12,
            propietario: "Big One",
            anio_fundacion: 2020,
            pais: "Argentina"
        },
        {
            cod_sello: 15,
            nom_sello: "Universal Music Mexico",
            num_artistas: 2000,
            propietario: "Universal Music Group",
            anio_fundacion: 1990,
            pais: "Mexico"
        },
        {
            cod_sello: 16,
            nom_sello: "Product Records",
            num_artistas: 4,
            propietario: "Snow Tha Product",
            anio_fundacion: 2020,
            pais: "Estados Unidos"
        },
        {
            cod_sello: 17,
            nom_sello: "R-I-C",
            num_artistas: 5,
            propietario: "Lucho SSJ",
            anio_fundacion: 2022,
            pais: "Argentina"
        },
        {
            cod_sello: 18,
            nom_sello: " Sponsor Dio$",
            num_artistas: 1,
            propietario: "Ysy A",
            anio_fundacion: 2018,
            pais: "Argentina"
        },
        {
            cod_sello: 19,
            nom_sello: "The Music Republic",
            num_artistas: 30,
            propietario: "David Sanchez",
            anio_fundacion: 2015,
            pais: "España"
        },
        {
            cod_sello: 20,
            nom_sello: "Neuen",
            num_artistas: 10,
            propietario: " Taiel Heredia",
            anio_fundacion: 2017,
            pais: "Argentina"
        },
        {
            cod_sello: 21,
            nom_sello: "Real Key Music",
            num_artistas: 12,
            propietario: "Juan Carlos Armas",
            anio_fundacion: 2021,
            pais: "España"
        },
        {
            cod_sello: 22,
            nom_sello: "YOUNG FLEX",
            num_artistas: 7,
            propietario: "Asan",
            anio_fundacion: 2020,
            pais: "Argentina"
        },
        {
            cod_sello: 23,
            nom_sello: "Goat Records",
            num_artistas: 3,
            propietario: " Luigi Navarro",
            anio_fundacion: 2017,
            pais: "Argentina"
        },
        {
            cod_sello: 24,
            nom_sello: "El Quinto Escalon",
            num_artistas: 15,
            propietario: " Juan Pablo De Luca",
            anio_fundacion: 2020,
            pais: "Argentina"
        },
        {
            cod_sello: 25,
            nom_sello: "RCA Records",
            num_artistas: 1000,
            propietario: "Emile Berliner",
            anio_fundacion: 1901,
            pais: "Estados Unidos"
        },
        {
            cod_sello: 26,
            nom_sello: "Independientes",
            num_artistas: 1,
            propietario: "",
            anio_fundacion: 0,
            pais: ""
        }
    ]
    for (const sellos of sellos_discograficos) {
        db.insert(Sello_Discografico).values(sellos);
    }
    //insertar datos de la tabla artista 
    const artistas =
        [
            {
                cod_art: 1,
                nom_art: "Bhavi",
                nombre_real_art: "Indra ",
                apel_art: "Bhalavan",
                edad_art: 26,
                oyentes_art: 4339242,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2017,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/d00fdcc4-bfa5-4204-ee5b-19365ef00b00/public",
                cod_manager: 12,
                cod_sello: 3
            },
            {
                cod_art: 2,
                nom_art: "Nicki Nicole",
                nombre_real_art: "Nicole ",
                apel_art: "Denise Cucco",
                edad_art: 23,
                oyentes_art: 22107110,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2019,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/74721deb-6de5-496f-3684-bb7ad734a000/public",
                cod_manager: 13,
                cod_sello: 2
            },
            {
                cod_art: 3,
                nom_art: "Rosalia",
                nombre_real_art: "Rosalia ",
                apel_art: "Vila Tobella",
                edad_art: 31,
                oyentes_art: 32398478,
                nacionalidad_art: "Española",
                anio_comienzo_art: 2016,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/a9fa17c9-6c5d-4398-8afd-71bc932b3d00/public",
                cod_manager: 5,
                cod_sello: 5
            },
            {
                cod_art: 4,
                nom_art: "Khea",
                nombre_real_art: "Ivo Alfredo Thomas",
                apel_art: "serue",
                edad_art: 23,
                oyentes_art: 10297356,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2017,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/56597ad5-f98e-4fce-28f7-d0ac41d05500/public",
                cod_manager: 14,
                cod_sello: 6
            },
            {
                cod_art: 5,
                nom_art: "Young Miko",
                nombre_real_art: " María Victoria",
                apel_art: "Ramírez de Arellano Cardona",
                edad_art: 25,
                oyentes_art: 28340686,
                nacionalidad_art: "Puertorriqueña",
                anio_comienzo_art: 2018,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/0d789a06-42a8-40d8-7b77-1d4958817900/public",
                cod_manager: 3,
                cod_sello: 4
            },
            {
                cod_art: 6,
                nom_art: "Duki",
                nombre_real_art: "Mauro Ezequiel ",
                apel_art: "Lombardo Quiroga",
                edad_art: 27,
                oyentes_art: 24094168,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2013,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/9352deda-b309-4d50-1413-ef55f3903a00/public",
                cod_manager: 1,
                cod_sello: 2
            },
            {
                cod_art: 7,
                nom_art: "Emilia",
                nombre_real_art: "María Emilia ",
                apel_art: "Mernes Rueda",
                edad_art: 27,
                oyentes_art: 17815840,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2018,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/0a0adfa6-91a7-4138-9c02-503822576000/public",
                cod_manager: 6,
                cod_sello: 7
            },
            {
                cod_art: 8,
                nom_art: "Maria Becerra",
                nombre_real_art: "Maria",
                apel_art: "de los Angeles Becerra",
                edad_art: 23,
                oyentes_art: 25607187,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2019,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/097bac1e-a0dc-4113-32fe-82aaa1fbb300/public",
                cod_manager: 15,
                cod_sello: 8
            },
            {
                cod_art: 9,
                nom_art: "Quevedo",
                nombre_real_art: "Pedro",
                apel_art: "Domínguez Quevedo",
                edad_art: 22,
                oyentes_art: 37599589,
                nacionalidad_art: "Española",
                anio_comienzo_art: 2019,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/8a6312eb-af76-40be-de1a-a3264dfcbc00/public",
                cod_manager: 4,
                cod_sello: 8
            },
            {
                cod_art: 10,
                nom_art: "Lola Indigo",
                nombre_real_art: "Miriam",
                apel_art: "Doblas Muñoz",
                edad_art: 31,
                oyentes_art: 8612689,
                nacionalidad_art: "Española",
                anio_comienzo_art: 2018,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/e122e013-1f0f-4d2c-5745-2abbff4a2600/public",
                cod_manager: 4,
                cod_sello: 9
            },
            {
                cod_art: 11,
                nom_art: "Ptazeta",
                nombre_real_art: "Zuleima",
                apel_art: " Gonzalez  Gonzalez",
                edad_art: 25,
                oyentes_art: 3054812,
                nacionalidad_art: "Española",
                anio_comienzo_art: 2019,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/16e47cc3-bf38-4095-a135-8f011f5ea300/public",
                cod_manager: 16,
                cod_sello: 6
            },
            {
                cod_art: 12,
                nom_art: "Recycled J",
                nombre_real_art: "Jorge ",
                apel_art: " Escorial Moreno ",
                edad_art: 30,
                oyentes_art: 1390318,
                nacionalidad_art: "Española",
                anio_comienzo_art: 2009,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/a019a554-9e3a-4abc-8f9a-bd099a128b00/public",
                cod_manager: 17,
                cod_sello: 10
            },
            {
                cod_art: 13,
                nom_art: "Natos ",
                nombre_real_art: "Gonzalo",
                apel_art: "Cidre",
                edad_art: 31,
                oyentes_art: 1834710,
                nacionalidad_art: "Española",
                anio_comienzo_art: 2010,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/e861d00a-c454-48fc-6ea7-71f64f458700/public",
                cod_manager: 18,
                cod_sello: 10
            },
            {
                cod_art: 14,
                nom_art: "Waor",
                nombre_real_art: "Fernando ",
                apel_art: "Hisado",
                edad_art: 35,
                oyentes_art: 1834710,
                nacionalidad_art: "Española",
                anio_comienzo_art: 2010,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/9dd799ca-f47e-4f0e-7cbf-77ce7b16f900/public",
                cod_manager: 18,
                cod_sello: 10
            },
            {
                cod_art: 15,
                nom_art: "Ayax",
                nombre_real_art: "Ayax",
                apel_art: "Pedrosa",
                edad_art: 32,
                oyentes_art: 863366,
                nacionalidad_art: "Española",
                anio_comienzo_art: 2012,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/82d5ee97-a907-4afd-48b9-6e04204b9300/public",
                cod_manager: 19,
                cod_sello: 11
            },
            {
                cod_art: 16,
                nom_art: "Prok",
                nombre_real_art: "Adrian ",
                apel_art: "Pedrosa",
                edad_art: 32,
                oyentes_art: 863366,
                nacionalidad_art: "Española",
                anio_comienzo_art: 2012,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/5e4778e4-7402-4442-8397-947a154dc000/public",
                cod_manager: 19,
                cod_sello: 11
            },
            {
                cod_art: 17,
                nom_art: "Cazzu",
                nombre_real_art: " Julieta",
                apel_art: "Cazzuchelli",
                edad_art: 30,
                oyentes_art: 10347131,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2013,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/b905c50d-da2b-4b32-7714-3065e7d2c100/public",
                cod_manager: 20,
                cod_sello: 12
            },
            {
                cod_art: 18,
                nom_art: "Mariah Angeliq",
                nombre_real_art: "María Angelique",
                apel_art: "Perez",
                edad_art: 24,
                oyentes_art: 6171123,
                nacionalidad_art: "Estadounidense",
                anio_comienzo_art: 2017,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/6a9cb6f1-d7e0-4d01-0f67-5721562bdf00/public",
                cod_manager: 21,
                cod_sello: 13
            },
            {
                cod_art: 19,
                nom_art: "Karol G",
                nombre_real_art: "Carolina",
                apel_art: "Giraldo Navarro",
                edad_art: 32,
                oyentes_art: 56387095,
                nacionalidad_art: "Colombiana",
                anio_comienzo_art: 2007,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/febc4a8e-054b-4085-5f5e-74d2eddd0a00/public",
                cod_manager: 10,
                cod_sello: 6
            },
            {
                cod_art: 20,
                nom_art: "C.R.O",
                nombre_real_art: "Tomás",
                apel_art: "Campos",
                edad_art: 25,
                oyentes_art: 4131592,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2013,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/e4106c2f-97e6-4b21-20af-f236038c5b00/public",
                cod_manager: 22,
                cod_sello: 10
            },
            {
                cod_art: 21,
                nom_art: "Tiago PZK",
                nombre_real_art: "Tiago",
                apel_art: "Uriel Pacheco",
                edad_art: 22,
                oyentes_art: 20226516,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2017,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/a5988c49-e92f-409c-cb9b-a6cd617cd400/public",
                cod_manager: 23,
                cod_sello: 8
            },
            {
                cod_art: 22,
                nom_art: "Rusherking",
                nombre_real_art: "Thomas Nicolás",
                apel_art: "Tobar",
                edad_art: 23,
                oyentes_art: 14962618,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2017,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/ea92c755-90b0-47ec-6cfa-0f8dd46b9000/public",
                cod_manager: 24,
                cod_sello: 14
            },
            {
                cod_art: 23,
                nom_art: "Peso Pluma",
                nombre_real_art: "Hassan Emilio",
                apel_art: "Kabande Laija",
                edad_art: 24,
                oyentes_art: 51308170,
                nacionalidad_art: "Mexicana",
                anio_comienzo_art: 2020,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/bf8e4f0d-416c-4503-566a-4426825ebe00/public",
                cod_manager: 25,
                cod_sello: 15
            },
            {
                cod_art: 24,
                nom_art: "Becky G",
                nombre_real_art: "Rebecca Marie ",
                apel_art: "Gomez",
                edad_art: 26,
                oyentes_art: 31332060,
                nacionalidad_art: "Estadounidense",
                anio_comienzo_art: 2012,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/b0c016be-d428-4c4c-7c15-38ada7d5c800/public",
                cod_manager: 26,
                cod_sello: 7
            },
            {
                cod_art: 25,
                nom_art: "Snow Tha Product ",
                nombre_real_art: "Claudia Alexandra",
                apel_art: "Madriz Meza",
                edad_art: 36,
                oyentes_art: 2829343,
                nacionalidad_art: "Estadounidense",
                anio_comienzo_art: 2007,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/7a1f2818-19cd-4aca-a22b-cfd48af4d400/public",
                cod_manager: 25,
                cod_sello: 16
            },
            {
                cod_art: 26,
                nom_art: "Lit Killah",
                nombre_real_art: "Mauro",
                apel_art: "Román Monzón",
                edad_art: 24,
                oyentes_art: 16435652,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2017,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/a674bd54-00bd-44d5-9a65-a7a034ef8600/public",
                cod_manager: 27,
                cod_sello: 14
            },
            {
                cod_art: 27,
                nom_art: "Moonkey",
                nombre_real_art: "David",
                apel_art: "Lopez",
                edad_art: 27,
                oyentes_art: 271671,
                nacionalidad_art: "Española",
                anio_comienzo_art: 2010,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/9bdf151b-f50e-4920-631b-256a502c8900/public",
                cod_manager: 28,
                cod_sello: 10
            },
            {
                cod_art: 28,
                nom_art: "WE$T DUBAI",
                nombre_real_art: "David ",
                apel_art: "Pérez.",
                edad_art: 24,
                oyentes_art: 648146,
                nacionalidad_art: "Española",
                anio_comienzo_art: 2015,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/0cdf35dc-8b7c-4bf2-9ead-b82f58578a00/public",
                cod_manager: 29,
                cod_sello: 10
            },
            {
                cod_art: 29,
                nom_art: "Lucho SSJ",
                nombre_real_art: "Luciano Nahuel ",
                apel_art: "Vega",
                edad_art: 21,
                oyentes_art: 1240984,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2016,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/4193781c-ac1d-476c-b0ad-4659684a8800/public",
                cod_manager: 29,
                cod_sello: 17
            },
            {
                cod_art: 30,
                nom_art: "Neo Pistea",
                nombre_real_art: "Sebastián ",
                apel_art: "Chinellato",
                edad_art: 28,
                oyentes_art: 1715948,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2015,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/c2d6a8df-45bc-4608-a7dc-d30b8a0bbe00/public",
                cod_manager: 29,
                cod_sello: 17
            },
            {
                cod_art: 31,
                nom_art: "Ysy A",
                nombre_real_art: "Alejo Nahuel",
                apel_art: "Acosta",
                edad_art: 25,
                oyentes_art: 4820580,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2017,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/33f5811e-bda9-4045-764e-b89d0c33c300/public",
                cod_manager: 30,
                cod_sello: 18
            },
            {
                cod_art: 32,
                nom_art: "Midel",
                nombre_real_art: "Alexis ",
                apel_art: "Gonzalo Vallejos",
                edad_art: 27,
                oyentes_art: 749491,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2017,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/578bd40b-d630-4d1d-601c-21ef53386000/public",
                cod_manager: 13,
                cod_sello: 19
            },
            {
                cod_art: 33,
                nom_art: "Shakira",
                nombre_real_art: "Shakira ",
                apel_art: "Mebarak",
                edad_art: 46,
                oyentes_art: 64575875,
                nacionalidad_art: "Colombiana",
                anio_comienzo_art: 1991,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/147e592a-6b31-4812-74d3-186d9c6eb900/public",
                cod_manager: 9,
                cod_sello: 7
            },
            {
                cod_art: 34,
                nom_art: "Rauw Alejandro ",
                nombre_real_art: "Raúl Alejandro",
                apel_art: "Ocasio Ruiz",
                edad_art: 30,
                oyentes_art: 44564594,
                nacionalidad_art: "puertorriqueña",
                anio_comienzo_art: 2014,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/f5032231-1b18-4016-a28e-0945977e9700/public",
                cod_manager: 31,
                cod_sello: 7
            },
            {
                cod_art: 35,
                nom_art: "Aitana",
                nombre_real_art: "Aitana",
                apel_art: " Ocaña Morales",
                edad_art: 24,
                oyentes_art: 13132401,
                nacionalidad_art: "Española",
                anio_comienzo_art: 2018,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/10f9781e-9bce-46a7-3c2f-36875b9e8100/public",
                cod_manager: 32,
                cod_sello: 9
            },
            {
                cod_art: 36,
                nom_art: "Trueno",
                nombre_real_art: "Mateo ",
                apel_art: "Palacios Corazzina",
                edad_art: 21,
                oyentes_art: 9939572,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2014,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/4c17f8b9-25ee-4026-cfc4-d2dc0c117d00/public",
                cod_manager: 33,
                cod_sello: 20
            },
            {
                cod_art: 37,
                nom_art: "Aleesha",
                nombre_real_art: "Aleesha",
                apel_art: "Rose",
                edad_art: 23,
                oyentes_art: 272067,
                nacionalidad_art: "Española",
                anio_comienzo_art: 2019,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/1f6d2bdb-91ef-46aa-153e-fdbc6905d900/public",
                cod_manager: 34,
                cod_sello: 20
            },
            {
                cod_art: 38,
                nom_art: "Seven Kayne  ",
                nombre_real_art: "Joaquín",
                apel_art: " Cordovero",
                edad_art: 24,
                oyentes_art: 1919005,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2017,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/5a7a6f27-8345-41f6-565c-52c3a2c95a00/public",
                cod_manager: 33,
                cod_sello: 1
            },
            {
                cod_art: 39,
                nom_art: "Milo J",
                nombre_real_art: "Camilo Joaquín",
                apel_art: "Villaruel",
                edad_art: 16,
                oyentes_art: 11988172,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2022,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/5d7b0842-06c9-4a0d-c36a-12c922140300/public",
                cod_manager: 33,
                cod_sello: 20
            },
            {
                cod_art: 40,
                nom_art: "Asan",
                nombre_real_art: "Tomas",
                apel_art: "Santos Juan",
                edad_art: 30,
                oyentes_art: 2126497,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2019,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/c66aba31-7df6-4ef1-c74a-ad74bb59bb00/public",
                cod_manager: 38,
                cod_sello: 22
            },
            {
                cod_art: 41,
                nom_art: "FMK",
                nombre_real_art: "Enzo ",
                apel_art: "Sauthier",
                edad_art: 24,
                oyentes_art: 16965995,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2019,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/4858779e-0cb7-4c79-d5b8-869b749d0800/public",
                cod_manager: 39,
                cod_sello: 7
            },
            {
                cod_art: 42,
                nom_art: "Jhayco",
                nombre_real_art: "Jesús Manuel ",
                apel_art: "Nieves Cortés",
                edad_art: 30,
                oyentes_art: 34654037,
                nacionalidad_art: "Puertorriqueña",
                anio_comienzo_art: 2008,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/4332d7c1-57b2-4e3a-111a-1b866c3e3300/public",
                cod_manager: 40,
                cod_sello: 13
            },
            {
                cod_art: 43,
                nom_art: "RVFV",
                nombre_real_art: "Rafael",
                apel_art: " Ruiz Amador",
                edad_art: 22,
                oyentes_art: 9330716,
                nacionalidad_art: "Española",
                anio_comienzo_art: 2022,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/95fae9a7-ce68-4142-8cad-16314d555700/public",
                cod_manager: 41,
                cod_sello: 9
            },
            {
                cod_art: 44,
                nom_art: "Ludmilla",
                nombre_real_art: "Ludmila",
                apel_art: " Oliveira da Silva",
                edad_art: 28,
                oyentes_art: 13761485,
                nacionalidad_art: "Brasileña",
                anio_comienzo_art: 2014,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/8df6f29d-8159-461f-5097-f8f0fd95fa00/public",
                cod_manager: 42,
                cod_sello: 8
            },
            {
                cod_art: 45,
                nom_art: "Tokischa",
                nombre_real_art: "Tokischa",
                apel_art: "Altagracia Peralta Juárez",
                edad_art: 27,
                oyentes_art: 15657404,
                nacionalidad_art: "Dominicana",
                anio_comienzo_art: 2018,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/5965275d-df0e-49e6-14b7-a5714d2b7c00/public",
                cod_manager: 43,
                cod_sello: 7
            },
            {
                cod_art: 46,
                nom_art: "The Weekend",
                nombre_real_art: "Abel Makkonen ",
                apel_art: "Tesfaye",
                edad_art: 33,
                oyentes_art: 104776612,
                nacionalidad_art: "Canadiense",
                anio_comienzo_art: 2009,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/f4287c02-66dd-4e5d-8e22-0d5bfa6b5000/public",
                cod_manager: 44,
                cod_sello: 12
            },
            {
                cod_art: 47,
                nom_art: "La Joaqui ",
                nombre_real_art: "Joaquinha",
                apel_art: "Lerena de la Riva",
                edad_art: 29,
                oyentes_art: 5783135,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2013,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/6f21d72c-cffe-4b08-d107-b1fefed76000/public",
                cod_manager: 45,
                cod_sello: 23
            },
            {
                cod_art: 48,
                nom_art: "Chencho Corleone",
                nombre_real_art: "Orlando Javier ",
                apel_art: "Valle Vega",
                edad_art: 43,
                oyentes_art: 28896998,
                nacionalidad_art: "Puertorriqueña",
                anio_comienzo_art: 1999,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/0d5f2b03-721a-4aa0-25c8-aa5e8ee71b00/public",
                cod_manager: 46,
                cod_sello: 7
            },
            {
                cod_art: 49,
                nom_art: "NATHY PELUSO",
                nombre_real_art: "Natalia ",
                apel_art: "Peluso",
                edad_art: 29,
                oyentes_art: 5552519,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2017,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/358b0299-7d94-4d0a-c5d9-05f41229ef00/public",
                cod_manager: 59,
                cod_sello: 7
            },
            {
                cod_art: 50,
                nom_art: "Tini",
                nombre_real_art: "Martina",
                apel_art: "Stoessel",
                edad_art: 27,
                oyentes_art: 19355665,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2016,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/4cec8f48-5026-4576-bd99-fd29fe35e100/public",
                cod_manager: 60,
                cod_sello: 7
            },
            {
                cod_art: 51,
                nom_art: "Pablo Chill-E",
                nombre_real_art: "Pablo Ignacio",
                apel_art: "Acevedo Leiva",
                edad_art: 24,
                oyentes_art: 9709510,
                nacionalidad_art: "Chilena",
                anio_comienzo_art: 2018,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/db3f8aba-9e3d-4761-bb3b-3bf993d8fb00/public",
                cod_manager: 2,
                cod_sello: 26
            },
            {
                cod_art: 52,
                nom_art: "Luisa",
                nombre_real_art: "Luisa",
                apel_art: "Zilbergleijt",
                edad_art: 23,
                oyentes_art: 156965,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2022,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/aa4f9f6d-1413-4b41-16bc-f60c6cd7ae00/public",
                cod_manager: 1,
                cod_sello: 22
            },
            {
                cod_art: 53,
                nom_art: "Aqua VS",
                nombre_real_art: "Matias",
                apel_art: "Balbi",
                edad_art: 24,
                oyentes_art: 985280,
                nacionalidad_art: "Chilena",
                anio_comienzo_art: 2019,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/ef739db8-bda9-4bf8-9491-90d2da72be00/public",
                cod_manager: 2,
                cod_sello: 2
            },
            {
                cod_art: 54,
                nom_art: "Tobi",
                nombre_real_art: "Tobias",
                apel_art: "Dolezor",
                edad_art: 24,
                oyentes_art: 283349,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2017,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/70eea4d6-f2de-48d3-dd99-782805b74c00/public",
                cod_manager: 61,
                cod_sello: 8
            },
            {
                cod_art: 55,
                nom_art: "Fuego",
                nombre_real_art: "Miguel Angel",
                apel_art: "Duran",
                edad_art: 42,
                oyentes_art: 4583842,
                nacionalidad_art: "Estadounidense",
                anio_comienzo_art: 2009,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/144ee9e6-b8ca-47e6-eb17-cc1aa901a000/public",
                cod_manager: 5,
                cod_sello: 26
            },
            {
                cod_art: 56,
                nom_art: "Brray",
                nombre_real_art: "Bryan ",
                apel_art: "García Quiñones",
                edad_art: 32,
                oyentes_art: 15746475,
                nacionalidad_art: "Puertorriqueña",
                anio_comienzo_art: 2016,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/c9d052a6-f85d-4d22-3d75-0fdb0c1d7800/public",
                cod_manager: 40,
                cod_sello: 8
            },
            {
                cod_art: 57,
                nom_art: "Rei",
                nombre_real_art: "Jualian",
                apel_art: "Reininger",
                edad_art: 26,
                oyentes_art: 3597270,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2018,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/ae9c35de-7c7d-4607-1945-ec7f13b11b00/public",
                cod_manager: 62,
                cod_sello: 26
            },
            {
                cod_art: 58,
                nom_art: "Fariana",
                nombre_real_art: "Farina ",
                apel_art: " Pao Paucar Franco",
                edad_art: 37,
                oyentes_art: 2321541,
                nacionalidad_art: "Colombiana",
                anio_comienzo_art: 2012,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/83a0e32e-8eed-4409-a92c-af1850770200/public",
                cod_manager: 58,
                cod_sello: 26
            },
            {
                cod_art: 59,
                nom_art: "Obie Whanshot",
                nombre_real_art: "Victor",
                apel_art: "Goimil",
                edad_art: 34,
                oyentes_art: 1320264,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2014,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/dbfe2de5-887b-4d39-4d99-efe30a518f00/public",
                cod_manager: 12,
                cod_sello: 26
            },
            {
                cod_art: 60,
                nom_art: "Lara91k",
                nombre_real_art: "Lara",
                apel_art: " Artesi",
                edad_art: 31,
                oyentes_art: 670356,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2019,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/2302cc43-21f1-4f05-3197-40473bc54d00/public",
                cod_manager: 1,
                cod_sello: 26
            },
            {
                cod_art: 61,
                nom_art: "Mesita",
                nombre_real_art: "Santiago David",
                apel_art: "Messano",
                edad_art: 25,
                oyentes_art: 9378407,
                nacionalidad_art: "Uruguaya",
                anio_comienzo_art: 2018,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/067147e7-98ce-492f-445d-f7a0a7830e00/public",
                cod_manager: 63,
                cod_sello: 26
            },
            {
                cod_art: 62,
                nom_art: "44 Kid",
                nombre_real_art: "Bruno",
                apel_art: "Garrido",
                edad_art: 24,
                oyentes_art: 130791,
                nacionalidad_art: "Uruguaya",
                anio_comienzo_art: 2020,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/b6688d10-89fe-4e8a-9b7e-1969d1e54e00/public",
                cod_manager: 63,
                cod_sello: 8
            },
            {
                cod_art: 63,
                nom_art: "Franux BB",
                nombre_real_art: "Francisco",
                apel_art: " Alvarez",
                edad_art: 23,
                oyentes_art: 290994,
                nacionalidad_art: "Uruguaya",
                anio_comienzo_art: 2020,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/8c5164c0-7dbb-4cfe-d6e7-a2cf0d929700/public",
                cod_manager: 63,
                cod_sello: 26
            },
            {
                cod_art: 64,
                nom_art: "Pekeño 77",
                nombre_real_art: "Facundo",
                apel_art: "Cedres",
                edad_art: 25,
                oyentes_art: 485923,
                nacionalidad_art: "Uruguaya",
                anio_comienzo_art: 2019,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/646070ec-a5b3-4da5-37d6-3f3fd5dc9c00/public",
                cod_manager: 63,
                cod_sello: 26
            },
            {
                cod_art: 65,
                nom_art: "CA7RIEL",
                nombre_real_art: "Catriel Guerreiro ",
                apel_art: "Fernández Peñaloza",
                edad_art: 31,
                oyentes_art: 1167578,
                nacionalidad_art: "Argentina",
                anio_comienzo_art: 2015,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/f133c721-631c-4ab4-bcce-6e0160b50e00/public",
                cod_manager: 64,
                cod_sello: 26
            },
            {
                cod_art: 66,
                nom_art: "Romeo Santos",
                nombre_real_art: "Anthony",
                apel_art: "Santos",
                edad_art: 42,
                oyentes_art: 24078732,
                nacionalidad_art: "Estadounidense",
                anio_comienzo_art: 2012,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/1fd0f2d2-f0f8-417a-d9af-acfbf0246400/public",
                cod_manager: 65,
                cod_sello: 7
            },
            {
                cod_art: 67,
                nom_art: "Justin Quiles",
                nombre_real_art: "Justin Rafael",
                apel_art: "Quiles Rivera",
                edad_art: 34,
                oyentes_art: 19822637,
                nacionalidad_art: "Estadounidense",
                anio_comienzo_art: 2011,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/cea4fbd1-a2b6-4533-fefa-5605c4e8ed00/public",
                cod_manager: 66,
                cod_sello: 8
            },
            {
                cod_art: 68,
                nom_art: "Angel Dior",
                nombre_real_art: "Angel",
                apel_art: "Rosario",
                edad_art: 21,
                oyentes_art: 2246446,
                nacionalidad_art: "Dominicana",
                anio_comienzo_art: 2021,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/d1850e3a-f006-4848-31c4-6703292a2100/public",
                cod_manager: 43,
                cod_sello: 26
            },
            {
                cod_art: 69,
                nom_art: "Maldy",
                nombre_real_art: "Edwin",
                apel_art: " Vázquez Vega",
                edad_art: 42,
                oyentes_art: 3991097,
                nacionalidad_art: "puertorriqueña",
                anio_comienzo_art: 2015,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/864a0c86-fe5c-4b1a-c631-117ad27b2700/public",
                cod_manager: 2,
                cod_sello: 8
            },
            {
                cod_art: 70,
                nom_art: "Bad Gyal",
                nombre_real_art: "Alba",
                apel_art: "Farelo i Sole",
                edad_art: 27,
                oyentes_art: 12392964,
                nacionalidad_art: "Española",
                anio_comienzo_art: 2017,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/f9971ab3-23a2-408d-8d55-56a061146300/public",
                cod_manager: 67,
                cod_sello: 6
            },
            {
                cod_art: 71,
                nom_art: "Sean Paul",
                nombre_real_art: "Sean Paul Ryan ",
                apel_art: "Francis Henriques ",
                edad_art: 51,
                oyentes_art: 33583667,
                nacionalidad_art: "Jamaiquina",
                anio_comienzo_art: 1999,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/a49badfb-c68a-48a4-e97f-96c603b83600/public",
                cod_manager: 5,
                cod_sello: 12
            },
            {
                cod_art: 72,
                nom_art: "Sech",
                nombre_real_art: "Carlos Isaias ",
                apel_art: "Morales Williams",
                edad_art: 30,
                oyentes_art: 21791266,
                nacionalidad_art: "Panameña",
                anio_comienzo_art: 2014,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/670ed550-52da-43c4-5c37-3f4125f0cc00/public",
                cod_manager: 68,
                cod_sello: 26
            },
            {
                cod_art: 73,
                nom_art: "Carla Morrison",
                nombre_real_art: "Carla Patricia ",
                apel_art: "Morrison Flores ",
                edad_art: 37,
                oyentes_art: 9653332,
                nacionalidad_art: "Mexicana",
                anio_comienzo_art: 2010,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/f0fec7fa-5be0-4c56-fc86-434681a82100/public",
                cod_manager: 69,
                cod_sello: 8
            },
            {
                cod_art: 74,
                nom_art: "Cris Mj",
                nombre_real_art: "Christopher Andres ",
                apel_art: "Alvarez Garcia ",
                edad_art: 22,
                oyentes_art: 46312387,
                nacionalidad_art: "Chilena",
                anio_comienzo_art: 2019,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/77fdf5c3-6a3d-40f2-d617-4be6d94ee900/public",
                cod_manager: 70,
                cod_sello: 6
            },
            {
                cod_art: 75,
                nom_art: "Ryan Castro",
                nombre_real_art: "Bryan David ",
                apel_art: "Castro Sosa",
                edad_art: 30,
                oyentes_art: 21139139,
                nacionalidad_art: "Colombiana",
                anio_comienzo_art: 2017,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/6cf46bd1-e849-465a-0299-be163c89e300/public",
                cod_manager: 71,
                cod_sello: 26
            },
            {
                cod_art: 76,
                nom_art: "Kali Uchis",
                nombre_real_art: "Karly Marina",
                apel_art: " Loaiza ",
                edad_art: 29,
                oyentes_art: 31313816,
                nacionalidad_art: "Estadounidense",
                anio_comienzo_art: 2014,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/1a7a7898-2b86-49f1-5c81-96351cb4bb00/public",
                cod_manager: 72,
                cod_sello: 6
            },
            {
                cod_art: 77,
                nom_art: "Dei V",
                nombre_real_art: "David Gerardo",
                apel_art: " Gonzalez Juarbe ",
                edad_art: 28,
                oyentes_art: 17268802,
                nacionalidad_art: "puertorriqueña",
                anio_comienzo_art: 2020,
                img_art: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/1da528b3-72e4-4d9b-9973-b8c034111200/public",
                cod_manager: 40,
                cod_sello: 7
            }
        ]

    for (const artistainsertar of artistas) {
        await db.insert(Artista).values(artistainsertar);
    }

    //insertar datos de la tabla cancion
    const canciones = [
        {
            cod_cancion: 1,
            fecha_lanzamiento: "2023-04-06",
            titulo: "Brinca",
            genero_cancion: "Trap",
            num_reproducciones: 42611621,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 1
        },
        {
            cod_cancion: 2,
            fecha_lanzamiento: "2023-07-21",
            titulo: "Wiggy",
            genero_cancion: "Trap",
            num_reproducciones: 63364445,
            colaboraciones: "No ",
            tipo_reproduccion: "Video",
            tipo_discografia: "Sencillo",
            cod_album: 2
        },
        {
            cod_cancion: 3,
            fecha_lanzamiento: "2023-06-01",
            titulo: "Los Del Espacio",
            genero_cancion: "Reggaeton",
            num_reproducciones: 231490296,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Sencillo",
            cod_album: 2
        },
        {
            cod_cancion: 4,
            fecha_lanzamiento: "2023-06-22",
            titulo: "BABY HELLO",
            genero_cancion: "Electropop",
            num_reproducciones: 137630288,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 3
        },
        {
            cod_cancion: 5,
            fecha_lanzamiento: "2021-12-14",
            titulo: "De Enero a Diciembre",
            genero_cancion: "Reggaeton",
            num_reproducciones: 53388319,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Sencillo",
            cod_album: 2
        },
        {
            cod_cancion: 6,
            fecha_lanzamiento: "2022-12-08",
            titulo: "Perreo Furioso",
            genero_cancion: "Reggaeton",
            num_reproducciones: 14131128,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 4
        },
        {
            cod_cancion: 7,
            fecha_lanzamiento: "2021-04-26",
            titulo: "Malbec",
            genero_cancion: "Trap",
            num_reproducciones: 178680476,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 5
        },
        {
            cod_cancion: 8,
            fecha_lanzamiento: "2023-05-31",
            titulo: "PESO PLUMA || BZRP Music Sessions #55",
            genero_cancion: "Corrido Tumbado",
            num_reproducciones: 307656323,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Sencillo",
            cod_album: 2
        },
        {
            cod_cancion: 9,
            fecha_lanzamiento: "2023-06-21",
            titulo: "RoCKSTAR 2.0",
            genero_cancion: "Trap",
            num_reproducciones: 46028498,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 6
        },
        {
            cod_cancion: 10,
            fecha_lanzamiento: "2023-05-17",
            titulo: "DISPARA ***",
            genero_cancion: "Trap",
            num_reproducciones: 92282221,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 7
        },
        {
            cod_cancion: 11,
            fecha_lanzamiento: "2023-08-30",
            titulo: "DEL ESTUDIO AL ESTADIO ",
            genero_cancion: "Trap",
            num_reproducciones: 2287857,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 8
        },
        {
            cod_cancion: 12,
            fecha_lanzamiento: "2019-06-25",
            titulo: " Sol y Luna ",
            genero_cancion: "Trap",
            num_reproducciones: 32983081,
            colaboraciones: "No ",
            tipo_reproduccion: "Video Lyrics",
            tipo_discografia: "Sencillo",
            cod_album: 2
        },
        {
            cod_cancion: 13,
            fecha_lanzamiento: "2022-09-08",
            titulo: "Pantera",
            genero_cancion: "Trap",
            num_reproducciones: 40896913,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Sencillo",
            cod_album: 2
        },
        {
            cod_cancion: 14,
            fecha_lanzamiento: "2022-03-16",
            titulo: "CAZZU | DJ TAO Turreo Sessions #9",
            genero_cancion: "Trap",
            num_reproducciones: 28921605,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Sencillo",
            cod_album: 2
        },
        {
            cod_cancion: 15,
            fecha_lanzamiento: "2019-11-07",
            titulo: "Diva",
            genero_cancion: "Pop Urbano",
            num_reproducciones: 22049332,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 9
        },
        {
            cod_cancion: 16,
            fecha_lanzamiento: "2023-05-19",
            titulo: "Te Cura",
            genero_cancion: "Pop Urbano",
            num_reproducciones: 103504490,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Sencillo",
            cod_album: 2
        },
        {
            cod_cancion: 17,
            fecha_lanzamiento: "2022-09-08",
            titulo: "Automatico",
            genero_cancion: "Reggaeton",
            num_reproducciones: 166334204,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 4
        },
        {
            cod_cancion: 18,
            fecha_lanzamiento: "2023-06-22",
            titulo: "antes de perderte (OG VERSION)",
            genero_cancion: "Trap",
            num_reproducciones: 25241516,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 6
        },
        {
            cod_cancion: 19,
            fecha_lanzamiento: "2023-03-29",
            titulo: "hARAkiRi",
            genero_cancion: "Trap",
            num_reproducciones: 41483451,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 6
        },
        {
            cod_cancion: 20,
            fecha_lanzamiento: "2021-08-19",
            titulo: "Soy Uno Mas",
            genero_cancion: "Pop Urbano",
            num_reproducciones: 9453371,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 10
        },
        {
            cod_cancion: 21,
            fecha_lanzamiento: "2023-06-22",
            titulo: "Corazon Vacio ",
            genero_cancion: "Pop Urbano ",
            num_reproducciones: 125397119,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Sencillo",
            cod_album: 2
        },
        {
            cod_cancion: 22,
            fecha_lanzamiento: "2022-02-13",
            titulo: "Esto Recien Empieza",
            genero_cancion: "Reggaeton",
            num_reproducciones: 65903297,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Sencillo",
            cod_album: 2
        },
        {
            cod_cancion: 23,
            fecha_lanzamiento: "2021-11-03",
            titulo: "737",
            genero_cancion: "Pop Urbano",
            num_reproducciones: 3604803,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 11
        },
        {
            cod_cancion: 24,
            fecha_lanzamiento: "2020-05-14",
            titulo: "Mamacita",
            genero_cancion: "Trap",
            num_reproducciones: 6691584,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Mixtape",
            cod_album: 12
        },
        {
            cod_cancion: 25,
            fecha_lanzamiento: "2022-01-26",
            titulo: "Ke Sientes",
            genero_cancion: "Pop Urbano",
            num_reproducciones: 2615060,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Sencillo",
            cod_album: 2
        },
        {
            cod_cancion: 26,
            fecha_lanzamiento: "2021-04-12",
            titulo: "A la Tumba",
            genero_cancion: "Rap",
            num_reproducciones: 17881626,
            colaboraciones: "Si",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 13
        },
        {
            cod_cancion: 27,
            fecha_lanzamiento: "2022-09-12",
            titulo: "Tomo demasiado ",
            genero_cancion: "Rap",
            num_reproducciones: 2237264,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 14
        },
        {
            cod_cancion: 28,
            fecha_lanzamiento: "2022-09-12",
            titulo: "Noches sin dormir",
            genero_cancion: "Rap",
            num_reproducciones: 2555599,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 14
        },
        {
            cod_cancion: 29,
            fecha_lanzamiento: "2020-09-30",
            titulo: "KHEA || BZRP Music Sessions #34",
            genero_cancion: "Trap",
            num_reproducciones: 201928446,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Sencillo",
            cod_album: 2
        },
        {
            cod_cancion: 30,
            fecha_lanzamiento: "2023-03-16",
            titulo: "Casanova",
            genero_cancion: "R&B",
            num_reproducciones: 4145469,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 15
        },
        {
            cod_cancion: 31,
            fecha_lanzamiento: "2023-10-19",
            titulo: "Ocaso",
            genero_cancion: "Trap",
            num_reproducciones: 4034026,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Sencillo",
            cod_album: 2
        },
        {
            cod_cancion: 32,
            fecha_lanzamiento: "2023-05-05",
            titulo: "No _se_ve.mp3",
            genero_cancion: "Pop Urbano",
            num_reproducciones: 141614799,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 16
        },
        {
            cod_cancion: 33,
            fecha_lanzamiento: "2023-09-07",
            titulo: "GTA.mp3",
            genero_cancion: "Pop Urbano ",
            num_reproducciones: 40135427,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 16
        },
        {
            cod_cancion: 34,
            fecha_lanzamiento: "2023-03-30",
            titulo: "Jagger.mp3",
            genero_cancion: "Pop Urbano",
            num_reproducciones: 67274782,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 16
        },
        {
            cod_cancion: 35,
            fecha_lanzamiento: "2023-10-04",
            titulo: "MILO J || BZRP Music Sessions #57",
            genero_cancion: "Trap",
            num_reproducciones: 69720045,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 17
        },
        {
            cod_cancion: 36,
            fecha_lanzamiento: "2023-10-04",
            titulo: "Toy en el mic",
            genero_cancion: "Trap",
            num_reproducciones: 32883424,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 17
        },
        {
            cod_cancion: 37,
            fecha_lanzamiento: "2023-10-04",
            titulo: "No soy Eterno",
            genero_cancion: "Trap",
            num_reproducciones: 30572103,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 17
        },
        {
            cod_cancion: 38,
            fecha_lanzamiento: "2023-10-04",
            titulo: "Fruto",
            genero_cancion: "Trap",
            num_reproducciones: 59020576,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 17
        },
        {
            cod_cancion: 39,
            fecha_lanzamiento: "2023-10-04",
            titulo: "Penas de Antaño",
            genero_cancion: "Trap",
            num_reproducciones: 21053798,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 17
        },
        {
            cod_cancion: 40,
            fecha_lanzamiento: "2022-03-23",
            titulo: "Cuatro Veinte",
            genero_cancion: "Pop Urbano",
            num_reproducciones: 101555555,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 18
        },
        {
            cod_cancion: 41,
            fecha_lanzamiento: "2023-03-22",
            titulo: "ECLIPSE",
            genero_cancion: "Rock alternativo",
            num_reproducciones: 7700902,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 19
        },
        {
            cod_cancion: 42,
            fecha_lanzamiento: "2023-05-23",
            titulo: "BATALLA",
            genero_cancion: "Trap Rock",
            num_reproducciones: 2250895,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 19
        },
        {
            cod_cancion: 43,
            fecha_lanzamiento: "2023-05-23",
            titulo: "SIN CORAZON",
            genero_cancion: "Bachata",
            num_reproducciones: 8294977,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 19
        },
        {
            cod_cancion: 44,
            fecha_lanzamiento: "2023-05-23",
            titulo: "CON UN BESO",
            genero_cancion: "reggaeton",
            num_reproducciones: 3840885,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 19
        },
        {
            cod_cancion: 45,
            fecha_lanzamiento: "2023-05-23",
            titulo: "EFECTO",
            genero_cancion: "Trap",
            num_reproducciones: 5111468,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 19
        },
        {
            cod_cancion: 46,
            fecha_lanzamiento: "2023-05-23",
            titulo: "COMO YO TE QUIERO ",
            genero_cancion: "Bachata",
            num_reproducciones: 5935540,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 19
        },
        {
            cod_cancion: 47,
            fecha_lanzamiento: "2023-04-27",
            titulo: "PARA AMARTE A TI ",
            genero_cancion: "Pop Urbano ",
            num_reproducciones: 29935540,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 19
        },
        {
            cod_cancion: 48,
            fecha_lanzamiento: "2023-05-23",
            titulo: "INTERLUV RCP ",
            genero_cancion: "Reggaeton",
            num_reproducciones: 2760669,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 19
        },
        {
            cod_cancion: 49,
            fecha_lanzamiento: "2023-05-23",
            titulo: "VOLVERAS",
            genero_cancion: "Pop",
            num_reproducciones: 2988769,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 19
        },
        {
            cod_cancion: 50,
            fecha_lanzamiento: "2023-05-23",
            titulo: "NUNCA VOY SOLO",
            genero_cancion: " Amapiano",
            num_reproducciones: 11208634,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 19
        },
        {
            cod_cancion: 51,
            fecha_lanzamiento: "2023-05-23",
            titulo: "FEELING ",
            genero_cancion: "Reggaeton",
            num_reproducciones: 2381525,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 19
        },
        {
            cod_cancion: 52,
            fecha_lanzamiento: "2023-05-23",
            titulo: "DE LA TIERRA A MARTE",
            genero_cancion: "Pop Urbano ",
            num_reproducciones: 2319174,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 19
        },
        {
            cod_cancion: 53,
            fecha_lanzamiento: "2023-04-18",
            titulo: "Glock",
            genero_cancion: "Trap",
            num_reproducciones: 11421450,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 1
        },
        {
            cod_cancion: 54,
            fecha_lanzamiento: "2022-11-03",
            titulo: "SAOKO",
            genero_cancion: "Flamenco-Pop",
            num_reproducciones: 174582089,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 55,
            fecha_lanzamiento: "2022-03-17",
            titulo: "CANDY",
            genero_cancion: "Fusion flamenco-Reggaeton",
            num_reproducciones: 107095047,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 56,
            fecha_lanzamiento: "2021-11-10",
            titulo: "LA FAMA",
            genero_cancion: "Bachata",
            num_reproducciones: 407537973,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 57,
            fecha_lanzamiento: "2022-03-17",
            titulo: "BULERIAS",
            genero_cancion: "Flamenco-Pop",
            num_reproducciones: 31974779,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 58,
            fecha_lanzamiento: "2022-02-23",
            titulo: "CHIKEN TERIYAKI",
            genero_cancion: "Fusion ElectroPop ",
            num_reproducciones: 93939975,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 59,
            fecha_lanzamiento: "2022-03-17",
            titulo: "HENTAI",
            genero_cancion: "Balada",
            num_reproducciones: 55389773,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 60,
            fecha_lanzamiento: "2022-03-17",
            titulo: "BIZCOCHITO",
            genero_cancion: "Fusion Electro-Flamenco",
            num_reproducciones: 202804902,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 61,
            fecha_lanzamiento: "2022-03-17",
            titulo: "G3 N15",
            genero_cancion: "Balada",
            num_reproducciones: 31762913,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 62,
            fecha_lanzamiento: "2022-03-17",
            titulo: "MOTOMAMI",
            genero_cancion: " Fusion Reggaeton-Flamenco",
            num_reproducciones: 60177147,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 63,
            fecha_lanzamiento: "2022-03-17",
            titulo: "DIABLO ",
            genero_cancion: " Fusion Reggaeton-Flamenco",
            num_reproducciones: 44625820,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 64,
            fecha_lanzamiento: "2022-03-17",
            titulo: " CUUUUuuuuuute",
            genero_cancion: " Fusion Reggaeton-Flamenco-Electro",
            num_reproducciones: 28780478,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 65,
            fecha_lanzamiento: "2022-03-17",
            titulo: "Abcdefg",
            genero_cancion: "Fusion",
            num_reproducciones: 22296413,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 66,
            fecha_lanzamiento: "2022-03-17",
            titulo: "LA COMBI VERSACE",
            genero_cancion: "Fusion Electro-Flamenco-Dembow",
            num_reproducciones: 97570087,
            colaboraciones: "Si",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 67,
            fecha_lanzamiento: "2022-03-17",
            titulo: "COMO UN G",
            genero_cancion: "Fusion Electro-Pop",
            num_reproducciones: 42776386,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 68,
            fecha_lanzamiento: "2022-03-17",
            titulo: "Thank Yu :)",
            genero_cancion: "Pop",
            num_reproducciones: 3416826,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 69,
            fecha_lanzamiento: "2022-07-27",
            titulo: "DESPECHA",
            genero_cancion: "Fusion Electro-Reggaeton-Pop",
            num_reproducciones: 867824567,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 70,
            fecha_lanzamiento: "2022-09-08",
            titulo: "CANDY - Remix",
            genero_cancion: "Fusion flamenco-Reggaeton",
            num_reproducciones: 48971689,
            colaboraciones: "Si",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 71,
            fecha_lanzamiento: "2020-03-25",
            titulo: "AISLAMIENTO",
            genero_cancion: " Flusion Flamenco-Pop",
            num_reproducciones: 8082663,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 72,
            fecha_lanzamiento: "2022-09-01",
            titulo: " LA KILIE",
            genero_cancion: "Fusion Reggaeton-Pop",
            num_reproducciones: 8851490,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 73,
            fecha_lanzamiento: "2022-03-17",
            titulo: "LAX",
            genero_cancion: "Fusion Reggaeton-Pop-R&B",
            num_reproducciones: 8482625,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 74,
            fecha_lanzamiento: "2022-09-08",
            titulo: "CHIRI",
            genero_cancion: "Fusion Reggaeton-Pop-Flamenco",
            num_reproducciones: 16480248,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 75,
            fecha_lanzamiento: "2022-03-17",
            titulo: "SAKURA",
            genero_cancion: "Fusion Pop-Reggaeton-Flamenco-Jazz",
            num_reproducciones: 22238877,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 76,
            fecha_lanzamiento: "2022-05-10",
            titulo: "DELIRIO DE GRANDEZA",
            genero_cancion: "Fusion Pop-Reggaeton-Bolero",
            num_reproducciones: 30930573,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 20
        },
        {
            cod_cancion: 77,
            fecha_lanzamiento: "2023-11-02",
            titulo: "Facts.mp3",
            genero_cancion: "Pop Urbano",
            num_reproducciones: 17113609,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 16
        },
        {
            cod_cancion: 78,
            fecha_lanzamiento: "2024-01-11",
            titulo: "JET_Set.mp3",
            genero_cancion: "Electro-pop",
            num_reproducciones: 20315332,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 16
        },
        {
            cod_cancion: 79,
            fecha_lanzamiento: "2023-11-02",
            titulo: "IConic.mp3",
            genero_cancion: "Pop Latino",
            num_reproducciones: 32604720,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 16
        },
        {
            cod_cancion: 80,
            fecha_lanzamiento: "2023-11-02",
            titulo: "La_Original.mp3",
            genero_cancion: "Reggaeton",
            num_reproducciones: 171484701,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 16
        },
        {
            cod_cancion: 81,
            fecha_lanzamiento: "2023-11-02",
            titulo: "Exclusive.mp3",
            genero_cancion: "Reggaeton",
            num_reproducciones: 99845689,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 16
        },
        {
            cod_cancion: 82,
            fecha_lanzamiento: "2023-11-02",
            titulo: "24_Hs.mp3",
            genero_cancion: "Pop Latino",
            num_reproducciones: 7864309,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 16
        },
        {
            cod_cancion: 83,
            fecha_lanzamiento: "2023-11-02",
            titulo: "Muñecos.mp3",
            genero_cancion: "Electro-Pop",
            num_reproducciones: 6800863,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 16
        },
        {
            cod_cancion: 84,
            fecha_lanzamiento: "2023-11-02",
            titulo: "Ojitos_Verdes.mp3",
            genero_cancion: "Pop Urbano",
            num_reproducciones: 9495864,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 16
        },
        {
            cod_cancion: 85,
            fecha_lanzamiento: "2023-11-02",
            titulo: "A_1000_Km.mp3",
            genero_cancion: "Pop",
            num_reproducciones: 6144326,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 16
        },
        {
            cod_cancion: 86,
            fecha_lanzamiento: "2023-06-15",
            titulo: "Guerrero.mp3",
            genero_cancion: "Balada",
            num_reproducciones: 10007806,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 16
        },
        {
            cod_cancion: 87,
            fecha_lanzamiento: "2020-05-14",
            titulo: "Trapicheo",
            genero_cancion: "Trap",
            num_reproducciones: 8309517,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Mixtape",
            cod_album: 12
        },
        {
            cod_cancion: 88,
            fecha_lanzamiento: "2020-05-27",
            titulo: "Creo Que ",
            genero_cancion: "Sad Trap",
            num_reproducciones: 23851780,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Mixtape",
            cod_album: 12
        },
        {
            cod_cancion: 89,
            fecha_lanzamiento: "2020-05-14",
            titulo: "Algo Aparte",
            genero_cancion: "Trap",
            num_reproducciones: 13409561,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Mixtape",
            cod_album: 12
        },
        {
            cod_cancion: 90,
            fecha_lanzamiento: "2020-05-14",
            titulo: "Blunt",
            genero_cancion: "Trap",
            num_reproducciones: 4644502,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Mixtape",
            cod_album: 12
        },
        {
            cod_cancion: 91,
            fecha_lanzamiento: "2020-05-14",
            titulo: "Valgo",
            genero_cancion: "Trap",
            num_reproducciones: 5337113,
            colaboraciones: "Si",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Mixtape",
            cod_album: 12
        },
        {
            cod_cancion: 92,
            fecha_lanzamiento: "2020-05-14",
            titulo: "Miti y Miti",
            genero_cancion: "Trap",
            num_reproducciones: 9641842,
            colaboraciones: "Si",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Mixtape",
            cod_album: 12
        },
        {
            cod_cancion: 93,
            fecha_lanzamiento: "2020-05-14",
            titulo: "Nuevo",
            genero_cancion: "Trap",
            num_reproducciones: 6941536,
            colaboraciones: "Si",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Mixtape",
            cod_album: 12
        },
        {
            cod_cancion: 94,
            fecha_lanzamiento: "2020-05-14",
            titulo: "Is it Por Mi",
            genero_cancion: "Trap",
            num_reproducciones: 2729727,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Mixtape",
            cod_album: 12
        },
        {
            cod_cancion: 95,
            fecha_lanzamiento: "2020-05-14",
            titulo: "Gelato 44",
            genero_cancion: "Trap",
            num_reproducciones: 8630766,
            colaboraciones: "Si",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Mixtape",
            cod_album: 12
        },
        {
            cod_cancion: 96,
            fecha_lanzamiento: "2024-03-13",
            titulo: "Estrellas en la noche",
            genero_cancion: "Trap",
            num_reproducciones: 3978216,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 21
        },
        {
            cod_cancion: 97,
            fecha_lanzamiento: "2024-03-13",
            titulo: "Fuera de la orbita",
            genero_cancion: "Trap",
            num_reproducciones: 5411012,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 21
        },
        {
            cod_cancion: 98,
            fecha_lanzamiento: "2024-03-13",
            titulo: "100oMIL",
            genero_cancion: "Trap",
            num_reproducciones: 6637860,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 21
        },
        {
            cod_cancion: 99,
            fecha_lanzamiento: "2024-02-28",
            titulo: "NAVI",
            genero_cancion: "Trap",
            num_reproducciones: 3487200,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 21
        },
        {
            cod_cancion: 100,
            fecha_lanzamiento: "2024-03-13",
            titulo: "TUTALOKO",
            genero_cancion: "Trap Melodico",
            num_reproducciones: 2811547,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 21
        },
        {
            cod_cancion: 101,
            fecha_lanzamiento: "2024-03-13",
            titulo: "Oxicidona",
            genero_cancion: "Trap",
            num_reproducciones: 2605186,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 21
        },
        {
            cod_cancion: 102,
            fecha_lanzamiento: "2024-03-13",
            titulo: "Tamos Okey",
            genero_cancion: "Trap",
            num_reproducciones: 2789705,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 21
        },
        {
            cod_cancion: 103,
            fecha_lanzamiento: "2024-03-13",
            titulo: "F.L.I.A",
            genero_cancion: "Trap",
            num_reproducciones: 1816788,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 21
        },
        {
            cod_cancion: 104,
            fecha_lanzamiento: "2024-03-13",
            titulo: "Pidemelo",
            genero_cancion: "Trap Melodico",
            num_reproducciones: 2034944,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 21
        },
        {
            cod_cancion: 105,
            fecha_lanzamiento: "2024-03-13",
            titulo: "Vibez",
            genero_cancion: "Trap",
            num_reproducciones: 2949437,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 21
        },
        {
            cod_cancion: 106,
            fecha_lanzamiento: "2024-03-21",
            titulo: "EL DON",
            genero_cancion: "Trap",
            num_reproducciones: 5128207,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 21
        },
        {
            cod_cancion: 107,
            fecha_lanzamiento: "2022-04-14",
            titulo: "Standard",
            genero_cancion: "Trap",
            num_reproducciones: 11468107,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 22
        },
        {
            cod_cancion: 108,
            fecha_lanzamiento: "2022-07-21",
            titulo: "Stripper Diaries",
            genero_cancion: "Interludio",
            num_reproducciones: 2576514,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 22
        },
        {
            cod_cancion: 109,
            fecha_lanzamiento: "2022-07-21",
            titulo: "Bi",
            genero_cancion: "Trap Latino",
            num_reproducciones: 17321115,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 22
        },
        {
            cod_cancion: 110,
            fecha_lanzamiento: "2022-07-21",
            titulo: "Trending",
            genero_cancion: "Trap",
            num_reproducciones: 8596448,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 22
        },
        {
            cod_cancion: 111,
            fecha_lanzamiento: "2022-07-21",
            titulo: "Smoke Break",
            genero_cancion: "Interludio",
            num_reproducciones: 15947,
            colaboraciones: "No",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 22
        },
        {
            cod_cancion: 112,
            fecha_lanzamiento: "2022-07-08",
            titulo: "Riri",
            genero_cancion: "Trap Urbano",
            num_reproducciones: 153632180,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 22
        },
        {
            cod_cancion: 113,
            fecha_lanzamiento: "2022-07-21",
            titulo: "Acento",
            genero_cancion: "Trap Latino",
            num_reproducciones: 3632180,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 22
        },
        {
            cod_cancion: 114,
            fecha_lanzamiento: "2022-07-21",
            titulo: "Pull Up",
            genero_cancion: "Trap",
            num_reproducciones: 7638032,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 22
        },
        {
            cod_cancion: 115,
            fecha_lanzamiento: "2022-07-21",
            titulo: "Putero",
            genero_cancion: "Trap Urbano",
            num_reproducciones: 21598211,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 22
        },
        {
            cod_cancion: 116,
            fecha_lanzamiento: "2021-04-21",
            titulo: "Rapido",
            genero_cancion: "Trap",
            num_reproducciones: 10762974,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 5
        },
        {
            cod_cancion: 117,
            fecha_lanzamiento: "2021-04-21",
            titulo: "Sudor y Trabajo",
            genero_cancion: "Trap",
            num_reproducciones: 17927850,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 5
        },
        {
            cod_cancion: 118,
            fecha_lanzamiento: "2021-04-21",
            titulo: "Pintao",
            genero_cancion: "Trap Latino",
            num_reproducciones: 125867469,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 5
        },
        {
            cod_cancion: 119,
            fecha_lanzamiento: "2021-03-14",
            titulo: "Chico Estrella",
            genero_cancion: "Trap",
            num_reproducciones: 57415257,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 5
        },
        {
            cod_cancion: 120,
            fecha_lanzamiento: "2021-04-21",
            titulo: "Volando Bajito",
            genero_cancion: "Trap",
            num_reproducciones: 27150711,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 5
        },
        {
            cod_cancion: 121,
            fecha_lanzamiento: "2021-04-21",
            titulo: "Cuanto",
            genero_cancion: "Trap",
            num_reproducciones: 12576142,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 5
        },
        {
            cod_cancion: 122,
            fecha_lanzamiento: "2021-04-21",
            titulo: " I Dont Know",
            genero_cancion: "Trap",
            num_reproducciones: 20982256,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 5
        },
        {
            cod_cancion: 123,
            fecha_lanzamiento: "2021-04-21",
            titulo: "Sol",
            genero_cancion: "Fusion Rock-Trap",
            num_reproducciones: 18449342,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 5
        },
        {
            cod_cancion: 124,
            fecha_lanzamiento: "2021-04-21",
            titulo: "Luna",
            genero_cancion: "Trap",
            num_reproducciones: 15553334,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 5
        },
        {
            cod_cancion: 125,
            fecha_lanzamiento: "2021-04-21",
            titulo: "Mi Diablo",
            genero_cancion: "Trap",
            num_reproducciones: 14280930,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 5
        },
        {
            cod_cancion: 126,
            fecha_lanzamiento: "2021-04-21",
            titulo: "Fifty Fifty",
            genero_cancion: "Trap Latino",
            num_reproducciones: 12011311,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 5
        },
        {
            cod_cancion: 127,
            fecha_lanzamiento: "2021-04-21",
            titulo: "Valentino",
            genero_cancion: "Trap",
            num_reproducciones: 7797335,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 5
        },
        {
            cod_cancion: 128,
            fecha_lanzamiento: "2021-04-21",
            titulo: "Cascada",
            genero_cancion: "Trap Latino",
            num_reproducciones: 24823395,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 5
        },
        {
            cod_cancion: 129,
            fecha_lanzamiento: "2021-04-21",
            titulo: "Ticket",
            genero_cancion: "Trap",
            num_reproducciones: 17548842,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 5
        },
        {
            cod_cancion: 130,
            fecha_lanzamiento: "2021-04-21",
            titulo: "Muriendome",
            genero_cancion: "Trap Urbano",
            num_reproducciones: 29891383,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 5
        },
        {
            cod_cancion: 131,
            fecha_lanzamiento: "2021-04-21",
            titulo: "Ella Es Mi Bitch",
            genero_cancion: "Trap",
            num_reproducciones: 14207756,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 5
        },
        {
            cod_cancion: 132,
            fecha_lanzamiento: "2021-04-21",
            titulo: "Muero De Fiesta Este Finde",
            genero_cancion: "Trap",
            num_reproducciones: 10207756,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 5
        },
        {
            cod_cancion: 133,
            fecha_lanzamiento: "2023-02-23",
            titulo: "Mientras Me Curo Del Cora",
            genero_cancion: "Pop Latino",
            num_reproducciones: 420891238,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 23
        },
        {
            cod_cancion: 134,
            fecha_lanzamiento: "2023-02-02",
            titulo: "X Si Volvemos",
            genero_cancion: "Reggaeton",
            num_reproducciones: 485455474,
            colaboraciones: "Si",
            tipo_reproduccion: "Sonido",
            tipo_discografia: "Album",
            cod_album: 23
        },
        {
            cod_cancion: 135,
            fecha_lanzamiento: "2023-02-23",
            titulo: " Pero Tu",
            genero_cancion: "Reggaeton",
            num_reproducciones: 208834336,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 23
        },
        {
            cod_cancion: 136,
            fecha_lanzamiento: "2023-02-23",
            titulo: "Besties",
            genero_cancion: "Reggaeton",
            num_reproducciones: 89516319,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 23
        },
        {
            cod_cancion: 137,
            fecha_lanzamiento: "2023-02-23",
            titulo: "Gucci Los Paños",
            genero_cancion: "Reggaeton",
            num_reproducciones: 120286534,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 23
        },
        {
            cod_cancion: 138,
            fecha_lanzamiento: "2023-02-23",
            titulo: "TQG",
            genero_cancion: "Fusion Pop-Reggaeton",
            num_reproducciones: 1016888245,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 23
        },
        {
            cod_cancion: 139,
            fecha_lanzamiento: "2023-02-23",
            titulo: "Tus Gafitas",
            genero_cancion: "Fusion Pop-Reggaeton",
            num_reproducciones: 118126850,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 23
        },
        {
            cod_cancion: 140,
            fecha_lanzamiento: "2023-02-23",
            titulo: "Ojos Ferrari",
            genero_cancion: "Fusion Reggaeton-Dembow",
            num_reproducciones: 81165952,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 23
        },
        {
            cod_cancion: 141,
            fecha_lanzamiento: "2023-02-23",
            titulo: "Mercurio",
            genero_cancion: "Fusion Pop-Reggaeton",
            num_reproducciones: 50237006,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 23
        },
        {
            cod_cancion: 142,
            fecha_lanzamiento: "2022-08-25",
            titulo: "Gatubela",
            genero_cancion: "Reggaeton",
            num_reproducciones: 425032375,
            colaboraciones: "Si",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 23
        },
        {
            cod_cancion: 143,
            fecha_lanzamiento: "2023-02-23",
            titulo: "Karmika",
            genero_cancion: "DanceHall",
            num_reproducciones: 113232286,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 23
        },
        {
            cod_cancion: 144,
            fecha_lanzamiento: "2022-04-21",
            titulo: "Provenza",
            genero_cancion: "Fusion Pop-Reggaeton",
            num_reproducciones: 1178457429,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 23
        },
        {
            cod_cancion: 145,
            fecha_lanzamiento: "2023-02-23",
            titulo: "Carolina",
            genero_cancion: "Reggaeton",
            num_reproducciones: 88233844,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 23
        },
        {
            cod_cancion: 146,
            fecha_lanzamiento: "2023-02-23",
            titulo: "Dañamos La amistad",
            genero_cancion: "Reggaeton",
            num_reproducciones: 50644303,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 23
        },
        {
            cod_cancion: 147,
            fecha_lanzamiento: "2023-02-23",
            titulo: "Amargura",
            genero_cancion: "Reggaeton",
            num_reproducciones: 615914705,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 23
        },
        {
            cod_cancion: 148,
            fecha_lanzamiento: "2022-11-12",
            titulo: "Cairo",
            genero_cancion: "Reggaeton",
            num_reproducciones: 439517865,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 23
        },
        {
            cod_cancion: 149,
            fecha_lanzamiento: "2023-02-23",
            titulo: "Mañana Sera Bonito",
            genero_cancion: "Fussion Reggaeton-Afrobeats",
            num_reproducciones: 131331805,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 23
        },
        {
            cod_cancion: 150,
            fecha_lanzamiento: "2023-08-10",
            titulo: "BichotaG",
            genero_cancion: "Fusion Reggaeton-Trap",
            num_reproducciones: 30328188,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 24
        },
        {
            cod_cancion: 151,
            fecha_lanzamiento: "2023-08-10",
            titulo: "Oki Doki",
            genero_cancion: "Reggaeton",
            num_reproducciones: 216070937,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 24
        },
        {
            cod_cancion: 152,
            fecha_lanzamiento: "2023-08-10",
            titulo: "Mi Ex Tenia Razon",
            genero_cancion: "Pop Latino",
            num_reproducciones: 430151325,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 24
        },
        {
            cod_cancion: 153,
            fecha_lanzamiento: "2023-07-13",
            titulo: "S91",
            genero_cancion: "Fusion Reggaeton-Trap",
            num_reproducciones: 237743641,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 24
        },
        {
            cod_cancion: 154,
            fecha_lanzamiento: "2023-08-10",
            titulo: "QLONA",
            genero_cancion: "Reggaeton",
            num_reproducciones: 834893147,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 24
        },
        {
            cod_cancion: 155,
            fecha_lanzamiento: "2023-08-10",
            titulo: "Una noche en medellin Remix",
            genero_cancion: "Reggaeton",
            num_reproducciones: 187175159,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 24
        },
        {
            cod_cancion: 156,
            fecha_lanzamiento: "2023-08-10",
            titulo: "Me Tengo Que Ir",
            genero_cancion: "Reggaeton",
            num_reproducciones: 36178641,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 24
        },
        {
            cod_cancion: 157,
            fecha_lanzamiento: "2023-08-10",
            titulo: "Gatita Gangster",
            genero_cancion: "Reggaeton",
            num_reproducciones: 130318286,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 24
        },
        {
            cod_cancion: 158,
            fecha_lanzamiento: "2023-08-10",
            titulo: "Dispo",
            genero_cancion: "Fusion Reggaeton-Trap",
            num_reproducciones: 111891101,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 24
        },
        {
            cod_cancion: 159,
            fecha_lanzamiento: "2023-08-10",
            titulo: "Provenza Remix",
            genero_cancion: "Electro-pop",
            num_reproducciones: 22006115,
            colaboraciones: "No",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 24
        },
        {
            cod_cancion: 160,
            fecha_lanzamiento: "2019-11-07",
            titulo: "7 Lunas",
            genero_cancion: "Trap Latino",
            num_reproducciones: 11533305,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 9
        },
        {
            cod_cancion: 161,
            fecha_lanzamiento: "2019-11-07",
            titulo: "Como Dimelo",
            genero_cancion: "Trap",
            num_reproducciones: 26264987,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 9
        },
        {
            cod_cancion: 162,
            fecha_lanzamiento: "2019-11-07",
            titulo: "Nos Encontramos",
            genero_cancion: "Pop",
            num_reproducciones: 12763971,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 9
        },
        {
            cod_cancion: 163,
            fecha_lanzamiento: "2019-11-07",
            titulo: "Tras Vos",
            genero_cancion: "Fusion Pop-Trap",
            num_reproducciones: 21232737,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 9
        },
        {
            cod_cancion: 164,
            fecha_lanzamiento: "2019-11-07",
            titulo: "Shorty",
            genero_cancion: "Trap",
            num_reproducciones: 26412835,
            colaboraciones: "Si",
            tipo_reproduccion: "Visualizer",
            tipo_discografia: "Album",
            cod_album: 9
        },
        {
            cod_cancion: 165,
            fecha_lanzamiento: "2019-11-07",
            titulo: "Recuerdos",
            genero_cancion: "Fusion Trap-Pop",
            num_reproducciones: 14141929,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 9
        },
        {
            cod_cancion: 166,
            fecha_lanzamiento: "2019-11-07",
            titulo: "Me Gusta",
            genero_cancion: "Fusion Trap-Pop",
            num_reproducciones: 36400767,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 9
        },
        {
            cod_cancion: 167,
            fecha_lanzamiento: "2019-11-07",
            titulo: "Plegarias",
            genero_cancion: "Sad Trap",
            num_reproducciones: 74316665,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 9
        },
        {
            cod_cancion: 168,
            fecha_lanzamiento: "2019-11-07",
            titulo: "Wapo Traketero",
            genero_cancion: "Trap",
            num_reproducciones: 96729332,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 9
        },
        {
            cod_cancion: 169,
            fecha_lanzamiento: "2019-11-07",
            titulo: "Años Luz",
            genero_cancion: "Fusion Trap-R&B",
            num_reproducciones: 70054767,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 9
        },
        {
            cod_cancion: 170,
            fecha_lanzamiento: "2019-11-07",
            titulo: "Fucking Diablo",
            genero_cancion: "Trap Latino",
            num_reproducciones: 38717381,
            colaboraciones: "No",
            tipo_reproduccion: "Video",
            tipo_discografia: "Album",
            cod_album: 9
        }
    ]

    for (const cancion of canciones) {
        await db.insert(Cancion).values(cancion);


    }
    //insertar datos de la tabla album
    const albumes = [
        {
            cod_album: 1,
            nom_album: "Nena Trampa (Deluxe Edition)",
            fecha_lanzamiento_album: "2023-04-12",
            duracion: "00:45:02",
            num_canciones: 15,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/3c552a7b-63e4-4f2c-a882-0f44d55d3d00/public",
            cod_art: 17
        },
        {
            cod_album: 2,
            nom_album: "",
            fecha_lanzamiento_album: "0000-00-00",
            duracion: "00:00:00",
            num_canciones: 0,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/91787528-c8f0-4aed-0aa3-519ec8a3e300/public",
            cod_art: 0
        },
        {
            cod_album: 3,
            nom_album: "Playa Saturno",
            fecha_lanzamiento_album: "2023-04-06",
            duracion: "00:46:01",
            num_canciones: 14,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/7477288e-329c-426b-9d1a-cee654583e00/public",
            cod_art: 34
        },
        {
            cod_album: 4,
            nom_album: "La Nena De Argentina",
            fecha_lanzamiento_album: "2022-12-07",
            duracion: "00:34:29",
            num_canciones: 12,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/0f091ba0-ab22-441f-59f9-fa3ece6edf00/public",
            cod_art: 8
        },
        {
            cod_album: 5,
            nom_album: "Desde el fin del mundo",
            fecha_lanzamiento_album: "2021-04-21",
            duracion: "00:57:09",
            num_canciones: 18,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/3d708408-fa84-4b80-8628-3680aea23400/public",
            cod_art: 6
        },
        {
            cod_album: 6,
            nom_album: "Antes de Ameri",
            fecha_lanzamiento_album: "2023-06-21",
            duracion: "00:40:55",
            num_canciones: 16,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/ec94031c-c2e2-40f0-ac4b-6260b2d10600/public",
            cod_art: 6
        },
        {
            cod_album: 7,
            nom_album: "Alma",
            fecha_lanzamiento_album: "2023-05-17",
            duracion: "00:24:43",
            num_canciones: 10,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/0c68431f-9427-4fb3-4917-fd32de05bc00/public",
            cod_art: 2
        },
        {
            cod_album: 8,
            nom_album: "buscando la luz (deluxe )",
            fecha_lanzamiento_album: "2023-08-29",
            duracion: "00:20:03",
            num_canciones: 7,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/ba38dbf4-17c4-4fa2-3c1e-c73e8624e300/public",
            cod_art: 38
        },
        {
            cod_album: 9,
            nom_album: "Recuerdos",
            fecha_lanzamiento_album: "2019-11-07",
            duracion: "00:36:57",
            num_canciones: 12,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/8cf396b5-0471-46c4-d3f8-1c02ac62bb00/public",
            cod_art: 2
        },
        {
            cod_album: 10,
            nom_album: "MAWZ",
            fecha_lanzamiento_album: "2021-08-18",
            duracion: "00:45:28",
            num_canciones: 14,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/215fe1c9-2de5-4cf2-dcd8-a46004f5bd00/public",
            cod_art: 26
        },
        {
            cod_album: 11,
            nom_album: "7  Secretos",
            fecha_lanzamiento_album: "2021-12-15",
            duracion: "00:20:13",
            num_canciones: 7,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/b02fac9d-9f91-4dc1-84f1-3b685bf5b800/public",
            cod_art: 38
        },
        {
            cod_album: 12,
            nom_album: "Trapicheo ",
            fecha_lanzamiento_album: "2020-05-14",
            duracion: "00:29:57",
            num_canciones: 10,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/93b04128-ada1-4ed7-dc58-30392b9c1200/public",
            cod_art: 4
        },
        {
            cod_album: 13,
            nom_album: "Hijos de la Ruina Vol. 3",
            fecha_lanzamiento_album: "2021-04-12",
            duracion: "00:29:43",
            num_canciones: 7,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/a79b2c64-67d7-49e3-d5af-a83693a46b00/public",
            cod_art: 13
        },
        {
            cod_album: 14,
            nom_album: "Luna llena",
            fecha_lanzamiento_album: "2022-09-12",
            duracion: "00:43:57",
            num_canciones: 13,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/0712f2c8-9fbd-4165-3d47-8f6a24886d00/public",
            cod_art: 13
        },
        {
            cod_album: 15,
            nom_album: "Casanova",
            fecha_lanzamiento_album: "2023-06-01",
            duracion: "00:34:50",
            num_canciones: 12,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/15a652b0-9277-48e0-af00-80ba8f50b800/public",
            cod_art: 12
        },
        {
            cod_album: 16,
            nom_album: ".mp3",
            fecha_lanzamiento_album: "2023-11-02",
            duracion: "00:35:50",
            num_canciones: 13,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/299588ef-6e86-4702-ac5e-832a4de75f00/public",
            cod_art: 7
        },
        {
            cod_album: 17,
            nom_album: "En dormir sin Madrid",
            fecha_lanzamiento_album: "2023-10-03",
            duracion: "00:13:31",
            num_canciones: 5,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/aa93e64f-8e02-4a5f-4d67-655d29017400/public",
            cod_art: 39
        },
        {
            cod_album: 18,
            nom_album: "Tu crees en mi?",
            fecha_lanzamiento_album: "2022-05-30",
            duracion: "00:22:37",
            num_canciones: 8,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/cae042a9-1a9e-4c10-5586-9f5258403f00/public",
            cod_art: 7
        },
        {
            cod_album: 19,
            nom_album: "SEROTONINA",
            fecha_lanzamiento_album: "2023-05-23",
            duracion: "00:32:58",
            num_canciones: 13,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/d980b863-d44e-4a12-e9ea-1ee1361bbe00/public",
            cod_art: 4
        },
        {
            cod_album: 20,
            nom_album: "MOTOMAMI+",
            fecha_lanzamiento_album: "2022-09-08",
            duracion: "01:01:00",
            num_canciones: 24,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/38364566-4f32-4cb7-925d-d1bef71e5e00/public",
            cod_art: 3
        },
        {
            cod_album: 21,
            nom_album: "Trapicheo: EL DON",
            fecha_lanzamiento_album: "2024-03-12",
            duracion: "00:28:15",
            num_canciones: 10,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/32852f7a-8977-4c03-801c-800a6ecc0300/public",
            cod_art: 4
        },
        {
            cod_album: 22,
            nom_album: "Trap Kitty",
            fecha_lanzamiento_album: "2022-07-21",
            duracion: "00:19:03",
            num_canciones: 9,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/4fe9f8a0-c840-4189-dbee-8adb392d4b00/public",
            cod_art: 5
        },
        {
            cod_album: 23,
            nom_album: "Mañana Sera Bonito",
            fecha_lanzamiento_album: "2023-02-23",
            duracion: "00:52:52",
            num_canciones: 17,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/cfccb626-9211-4901-876e-813ffcf2c600/public",
            cod_art: 19
        },
        {
            cod_album: 24,
            nom_album: "Mañana Sera Bonito (Bichota Season)",
            fecha_lanzamiento_album: "2023-08-09",
            duracion: "00:26:58",
            num_canciones: 9,
            img_album: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/e573cb10-7994-4ba5-2d2b-c524cb2c8700/public",
            cod_art: 19
        }
    ]

    for (const album of albumes) {
        await db.insert(Album).values(album);
    }

    //insertar datos de la tabla compone
    const compone = [
        {
            cod_comp: 1,
            cod_art: 5,
            cod_cancion: 1
        },
        {
            cod_comp: 2,
            cod_art: 17,
            cod_cancion: 1
        },
        {
            cod_comp: 3,
            cod_art: 5,
            cod_cancion: 2
        },
        {
            cod_comp: 4,
            cod_art: 6,
            cod_cancion: 3
        },
        {
            cod_comp: 5,
            cod_art: 7,
            cod_cancion: 3
        },
        {
            cod_comp: 6,
            cod_art: 8,
            cod_cancion: 3
        },
        {
            cod_comp: 7,
            cod_art: 22,
            cod_cancion: 3
        },
        {
            cod_comp: 8,
            cod_art: 26,
            cod_cancion: 3
        },
        {
            cod_comp: 9,
            cod_art: 41,
            cod_cancion: 3
        },
        {
            cod_comp: 10,
            cod_art: 21,
            cod_cancion: 3
        },
        {
            cod_comp: 11,
            cod_art: 34,
            cod_cancion: 4
        },
        {
            cod_comp: 12,
            cod_art: 7,
            cod_cancion: 5
        },
        {
            cod_comp: 13,
            cod_art: 22,
            cod_cancion: 5
        },
        {
            cod_comp: 14,
            cod_art: 8,
            cod_cancion: 6
        },
        {
            cod_comp: 15,
            cod_art: 6,
            cod_cancion: 7
        },
        {
            cod_comp: 16,
            cod_art: 23,
            cod_cancion: 8
        },
        {
            cod_comp: 17,
            cod_art: 6,
            cod_cancion: 9
        },
        {
            cod_comp: 18,
            cod_art: 42,
            cod_cancion: 9
        },
        {
            cod_comp: 19,
            cod_art: 2,
            cod_cancion: 10
        },
        {
            cod_comp: 20,
            cod_art: 39,
            cod_cancion: 10
        },
        {
            cod_comp: 21,
            cod_art: 6,
            cod_cancion: 11
        },
        {
            cod_comp: 22,
            cod_art: 38,
            cod_cancion: 11
        },
        {
            cod_comp: 23,
            cod_art: 6,
            cod_cancion: 12
        },
        {
            cod_comp: 24,
            cod_art: 6,
            cod_cancion: 13
        },
        {
            cod_comp: 25,
            cod_art: 43,
            cod_cancion: 13
        },
        {
            cod_comp: 26,
            cod_art: 17,
            cod_cancion: 14
        },
        {
            cod_comp: 27,
            cod_art: 2,
            cod_cancion: 15
        },
        {
            cod_comp: 28,
            cod_art: 8,
            cod_cancion: 16
        },
        {
            cod_comp: 29,
            cod_art: 8,
            cod_cancion: 17
        },
        {
            cod_comp: 30,
            cod_art: 6,
            cod_cancion: 18
        },
        {
            cod_comp: 31,
            cod_art: 6,
            cod_cancion: 19
        },
        {
            cod_comp: 32,
            cod_art: 20,
            cod_cancion: 19
        },
        {
            cod_comp: 33,
            cod_art: 26,
            cod_cancion: 20
        },
        {
            cod_comp: 34,
            cod_art: 8,
            cod_cancion: 21
        },
        {
            cod_comp: 35,
            cod_art: 6,
            cod_cancion: 22
        },
        {
            cod_comp: 36,
            cod_art: 7,
            cod_cancion: 22
        },
        {
            cod_comp: 37,
            cod_art: 38,
            cod_cancion: 23
        },
        {
            cod_comp: 38,
            cod_art: 4,
            cod_cancion: 24
        },
        {
            cod_comp: 39,
            cod_art: 38,
            cod_cancion: 25
        },
        {
            cod_comp: 40,
            cod_art: 37,
            cod_cancion: 25
        },
        {
            cod_comp: 41,
            cod_art: 12,
            cod_cancion: 26
        },
        {
            cod_comp: 42,
            cod_art: 13,
            cod_cancion: 26
        },
        {
            cod_comp: 43,
            cod_art: 14,
            cod_cancion: 26
        },
        {
            cod_comp: 44,
            cod_art: 13,
            cod_cancion: 27
        },
        {
            cod_comp: 45,
            cod_art: 14,
            cod_cancion: 27
        },
        {
            cod_comp: 46,
            cod_art: 13,
            cod_cancion: 28
        },
        {
            cod_comp: 47,
            cod_art: 14,
            cod_cancion: 28
        },
        {
            cod_comp: 48,
            cod_art: 4,
            cod_cancion: 29
        },
        {
            cod_comp: 49,
            cod_art: 12,
            cod_cancion: 30
        },
        {
            cod_comp: 50,
            cod_art: 1,
            cod_cancion: 31
        },
        {
            cod_comp: 51,
            cod_art: 4,
            cod_cancion: 31
        },
        {
            cod_comp: 52,
            cod_art: 20,
            cod_cancion: 31
        },
        {
            cod_comp: 53,
            cod_art: 30,
            cod_cancion: 31
        },
        {
            cod_comp: 54,
            cod_art: 7,
            cod_cancion: 32
        },
        {
            cod_comp: 55,
            cod_art: 44,
            cod_cancion: 32
        },
        {
            cod_comp: 56,
            cod_art: 7,
            cod_cancion: 33
        },
        {
            cod_comp: 57,
            cod_art: 7,
            cod_cancion: 34
        },
        {
            cod_comp: 58,
            cod_art: 39,
            cod_cancion: 35
        },
        {
            cod_comp: 59,
            cod_art: 39,
            cod_cancion: 36
        },
        {
            cod_comp: 60,
            cod_art: 39,
            cod_cancion: 37
        },
        {
            cod_comp: 61,
            cod_art: 39,
            cod_cancion: 38
        },
        {
            cod_comp: 62,
            cod_art: 39,
            cod_cancion: 39
        },
        {
            cod_comp: 63,
            cod_art: 7,
            cod_cancion: 40
        },
        {
            cod_comp: 64,
            cod_art: 4,
            cod_cancion: 41
        },
        {
            cod_comp: 65,
            cod_art: 4,
            cod_cancion: 42
        },
        {
            cod_comp: 66,
            cod_art: 4,
            cod_cancion: 43
        },
        {
            cod_comp: 67,
            cod_art: 4,
            cod_cancion: 44
        },
        {
            cod_comp: 68,
            cod_art: 4,
            cod_cancion: 45
        },
        {
            cod_comp: 69,
            cod_art: 4,
            cod_cancion: 46
        },
        {
            cod_comp: 70,
            cod_art: 4,
            cod_cancion: 47
        },
        {
            cod_comp: 71,
            cod_art: 21,
            cod_cancion: 47
        },
        {
            cod_comp: 72,
            cod_art: 4,
            cod_cancion: 48
        },
        {
            cod_comp: 73,
            cod_art: 4,
            cod_cancion: 49
        },
        {
            cod_comp: 74,
            cod_art: 4,
            cod_cancion: 50
        },
        {
            cod_comp: 75,
            cod_art: 39,
            cod_cancion: 50
        },
        {
            cod_comp: 76,
            cod_art: 4,
            cod_cancion: 51
        },
        {
            cod_comp: 77,
            cod_art: 4,
            cod_cancion: 52
        },
        {
            cod_comp: 78,
            cod_art: 17,
            cod_cancion: 53
        },
        {
            cod_comp: 79,
            cod_art: 47,
            cod_cancion: 53
        },
        {
            cod_comp: 80,
            cod_art: 3,
            cod_cancion: 54
        },
        {
            cod_comp: 81,
            cod_art: 3,
            cod_cancion: 55
        },
        {
            cod_comp: 82,
            cod_art: 3,
            cod_cancion: 56
        },
        {
            cod_comp: 83,
            cod_art: 3,
            cod_cancion: 57
        },
        {
            cod_comp: 84,
            cod_art: 3,
            cod_cancion: 58
        },
        {
            cod_comp: 85,
            cod_art: 3,
            cod_cancion: 59
        },
        {
            cod_comp: 86,
            cod_art: 3,
            cod_cancion: 60
        },
        {
            cod_comp: 87,
            cod_art: 3,
            cod_cancion: 61
        },
        {
            cod_comp: 88,
            cod_art: 3,
            cod_cancion: 62
        },
        {
            cod_comp: 89,
            cod_art: 3,
            cod_cancion: 63
        },
        {
            cod_comp: 90,
            cod_art: 3,
            cod_cancion: 64
        },
        {
            cod_comp: 91,
            cod_art: 3,
            cod_cancion: 65
        },
        {
            cod_comp: 92,
            cod_art: 3,
            cod_cancion: 66
        },
        {
            cod_comp: 93,
            cod_art: 45,
            cod_cancion: 66
        },
        {
            cod_comp: 94,
            cod_art: 3,
            cod_cancion: 67
        },
        {
            cod_comp: 95,
            cod_art: 3,
            cod_cancion: 68
        },
        {
            cod_comp: 96,
            cod_art: 3,
            cod_cancion: 69
        },
        {
            cod_comp: 97,
            cod_art: 3,
            cod_cancion: 70
        },
        {
            cod_comp: 98,
            cod_art: 48,
            cod_cancion: 70
        },
        {
            cod_comp: 99,
            cod_art: 3,
            cod_cancion: 71
        },
        {
            cod_comp: 100,
            cod_art: 3,
            cod_cancion: 72
        },
        {
            cod_comp: 101,
            cod_art: 3,
            cod_cancion: 73
        },
        {
            cod_comp: 102,
            cod_art: 3,
            cod_cancion: 74
        },
        {
            cod_comp: 103,
            cod_art: 3,
            cod_cancion: 75
        },
        {
            cod_comp: 104,
            cod_art: 3,
            cod_cancion: 76
        },
        {
            cod_comp: 105,
            cod_art: 46,
            cod_cancion: 56
        },
        {
            cod_comp: 106,
            cod_art: 7,
            cod_cancion: 77
        },
        {
            cod_comp: 107,
            cod_art: 7,
            cod_cancion: 78
        },
        {
            cod_comp: 108,
            cod_art: 49,
            cod_cancion: 78
        },
        {
            cod_comp: 109,
            cod_art: 7,
            cod_cancion: 79
        },
        {
            cod_comp: 110,
            cod_art: 7,
            cod_cancion: 80
        },
        {
            cod_comp: 111,
            cod_art: 50,
            cod_cancion: 80
        },
        {
            cod_comp: 112,
            cod_art: 7,
            cod_cancion: 81
        },
        {
            cod_comp: 113,
            cod_art: 7,
            cod_cancion: 82
        },
        {
            cod_comp: 114,
            cod_art: 7,
            cod_cancion: 83
        },
        {
            cod_comp: 115,
            cod_art: 7,
            cod_cancion: 84
        },
        {
            cod_comp: 116,
            cod_art: 7,
            cod_cancion: 85
        },
        {
            cod_comp: 117,
            cod_art: 7,
            cod_cancion: 86
        },
        {
            cod_comp: 118,
            cod_art: 4,
            cod_cancion: 87
        },
        {
            cod_comp: 119,
            cod_art: 4,
            cod_cancion: 88
        },
        {
            cod_comp: 120,
            cod_art: 40,
            cod_cancion: 88
        },
        {
            cod_comp: 121,
            cod_art: 4,
            cod_cancion: 89
        },
        {
            cod_comp: 122,
            cod_art: 4,
            cod_cancion: 90
        },
        {
            cod_comp: 123,
            cod_art: 4,
            cod_cancion: 91
        },
        {
            cod_comp: 124,
            cod_art: 32,
            cod_cancion: 91
        },
        {
            cod_comp: 125,
            cod_art: 4,
            cod_cancion: 92
        },
        {
            cod_comp: 126,
            cod_art: 51,
            cod_cancion: 92
        },
        {
            cod_comp: 127,
            cod_art: 4,
            cod_cancion: 93
        },
        {
            cod_comp: 128,
            cod_art: 38,
            cod_cancion: 93
        },
        {
            cod_comp: 129,
            cod_art: 4,
            cod_cancion: 94
        },
        {
            cod_comp: 130,
            cod_art: 4,
            cod_cancion: 95
        },
        {
            cod_comp: 131,
            cod_art: 6,
            cod_cancion: 95
        },
        {
            cod_comp: 132,
            cod_art: 4,
            cod_cancion: 96
        },
        {
            cod_comp: 133,
            cod_art: 4,
            cod_cancion: 97
        },
        {
            cod_comp: 134,
            cod_art: 31,
            cod_cancion: 97
        },
        {
            cod_comp: 135,
            cod_art: 4,
            cod_cancion: 98
        },
        {
            cod_comp: 136,
            cod_art: 30,
            cod_cancion: 98
        },
        {
            cod_comp: 137,
            cod_art: 20,
            cod_cancion: 98
        },
        {
            cod_comp: 138,
            cod_art: 4,
            cod_cancion: 99
        },
        {
            cod_comp: 139,
            cod_art: 4,
            cod_cancion: 100
        },
        {
            cod_comp: 140,
            cod_art: 52,
            cod_cancion: 100
        },
        {
            cod_comp: 141,
            cod_art: 53,
            cod_cancion: 100
        },
        {
            cod_comp: 142,
            cod_art: 4,
            cod_cancion: 101
        },
        {
            cod_comp: 143,
            cod_art: 53,
            cod_cancion: 101
        },
        {
            cod_comp: 144,
            cod_art: 4,
            cod_cancion: 102
        },
        {
            cod_comp: 145,
            cod_art: 32,
            cod_cancion: 102
        },
        {
            cod_comp: 146,
            cod_art: 38,
            cod_cancion: 102
        },
        {
            cod_comp: 147,
            cod_art: 4,
            cod_cancion: 103
        },
        {
            cod_comp: 148,
            cod_art: 54,
            cod_cancion: 103
        },
        {
            cod_comp: 149,
            cod_art: 4,
            cod_cancion: 104
        },
        {
            cod_comp: 150,
            cod_art: 12,
            cod_cancion: 104
        },
        {
            cod_comp: 151,
            cod_art: 55,
            cod_cancion: 104
        },
        {
            cod_comp: 152,
            cod_art: 4,
            cod_cancion: 105
        },
        {
            cod_comp: 153,
            cod_art: 1,
            cod_cancion: 106
        },
        {
            cod_comp: 154,
            cod_art: 26,
            cod_cancion: 106
        },
        {
            cod_comp: 155,
            cod_art: 40,
            cod_cancion: 106
        },
        {
            cod_comp: 156,
            cod_art: 4,
            cod_cancion: 106
        },
        {
            cod_comp: 157,
            cod_art: 5,
            cod_cancion: 107
        },
        {
            cod_comp: 158,
            cod_art: 5,
            cod_cancion: 108
        },
        {
            cod_comp: 159,
            cod_art: 5,
            cod_cancion: 109
        },
        {
            cod_comp: 160,
            cod_art: 56,
            cod_cancion: 109
        },
        {
            cod_comp: 161,
            cod_art: 5,
            cod_cancion: 110
        },
        {
            cod_comp: 162,
            cod_art: 5,
            cod_cancion: 111
        },
        {
            cod_comp: 163,
            cod_art: 5,
            cod_cancion: 112
        },
        {
            cod_comp: 164,
            cod_art: 5,
            cod_cancion: 113
        },
        {
            cod_comp: 165,
            cod_art: 5,
            cod_cancion: 114
        },
        {
            cod_comp: 166,
            cod_art: 5,
            cod_cancion: 115
        },
        {
            cod_comp: 167,
            cod_art: 6,
            cod_cancion: 116
        },
        {
            cod_comp: 168,
            cod_art: 6,
            cod_cancion: 117
        },
        {
            cod_comp: 169,
            cod_art: 6,
            cod_cancion: 118
        },
        {
            cod_comp: 170,
            cod_art: 31,
            cod_cancion: 118
        },
        {
            cod_comp: 171,
            cod_art: 57,
            cod_cancion: 118
        },
        {
            cod_comp: 172,
            cod_art: 6,
            cod_cancion: 119
        },
        {
            cod_comp: 173,
            cod_art: 6,
            cod_cancion: 120
        },
        {
            cod_comp: 174,
            cod_art: 6,
            cod_cancion: 121
        },
        {
            cod_comp: 175,
            cod_art: 29,
            cod_cancion: 121
        },
        {
            cod_comp: 176,
            cod_art: 58,
            cod_cancion: 121
        },
        {
            cod_comp: 177,
            cod_art: 6,
            cod_cancion: 122
        },
        {
            cod_comp: 178,
            cod_art: 6,
            cod_cancion: 123
        },
        {
            cod_comp: 179,
            cod_art: 60,
            cod_cancion: 123
        },
        {
            cod_comp: 180,
            cod_art: 6,
            cod_cancion: 124
        },
        {
            cod_comp: 181,
            cod_art: 40,
            cod_cancion: 124
        },
        {
            cod_comp: 182,
            cod_art: 6,
            cod_cancion: 125
        },
        {
            cod_comp: 183,
            cod_art: 6,
            cod_cancion: 126
        },
        {
            cod_comp: 184,
            cod_art: 51,
            cod_cancion: 126
        },
        {
            cod_comp: 185,
            cod_art: 59,
            cod_cancion: 126
        },
        {
            cod_comp: 186,
            cod_art: 30,
            cod_cancion: 126
        },
        {
            cod_comp: 187,
            cod_art: 6,
            cod_cancion: 127
        },
        {
            cod_comp: 188,
            cod_art: 54,
            cod_cancion: 127
        },
        {
            cod_comp: 189,
            cod_art: 6,
            cod_cancion: 128
        },
        {
            cod_comp: 190,
            cod_art: 6,
            cod_cancion: 129
        },
        {
            cod_comp: 191,
            cod_art: 4,
            cod_cancion: 130
        },
        {
            cod_comp: 192,
            cod_art: 6,
            cod_cancion: 130
        },
        {
            cod_comp: 193,
            cod_art: 6,
            cod_cancion: 131
        },
        {
            cod_comp: 194,
            cod_art: 61,
            cod_cancion: 131
        },
        {
            cod_comp: 195,
            cod_art: 62,
            cod_cancion: 131
        },
        {
            cod_comp: 196,
            cod_art: 63,
            cod_cancion: 131
        },
        {
            cod_comp: 197,
            cod_art: 64,
            cod_cancion: 131
        },
        {
            cod_comp: 198,
            cod_art: 6,
            cod_cancion: 132
        },
        {
            cod_comp: 199,
            cod_art: 65,
            cod_cancion: 132
        },
        {
            cod_comp: 200,
            cod_art: 19,
            cod_cancion: 133
        },
        {
            cod_comp: 201,
            cod_art: 19,
            cod_cancion: 134
        },
        {
            cod_comp: 202,
            cod_art: 69,
            cod_cancion: 134
        },
        {
            cod_comp: 203,
            cod_art: 19,
            cod_cancion: 135
        },
        {
            cod_comp: 204,
            cod_art: 9,
            cod_cancion: 135
        },
        {
            cod_comp: 205,
            cod_art: 19,
            cod_cancion: 136
        },
        {
            cod_comp: 206,
            cod_art: 19,
            cod_cancion: 137
        },
        {
            cod_comp: 207,
            cod_art: 19,
            cod_cancion: 138
        },
        {
            cod_comp: 208,
            cod_art: 33,
            cod_cancion: 138
        },
        {
            cod_comp: 209,
            cod_art: 19,
            cod_cancion: 139
        },
        {
            cod_comp: 210,
            cod_art: 19,
            cod_cancion: 140
        },
        {
            cod_comp: 211,
            cod_art: 67,
            cod_cancion: 140
        },
        {
            cod_comp: 212,
            cod_art: 68,
            cod_cancion: 140
        },
        {
            cod_comp: 213,
            cod_art: 19,
            cod_cancion: 141
        },
        {
            cod_comp: 214,
            cod_art: 19,
            cod_cancion: 142
        },
        {
            cod_comp: 215,
            cod_art: 69,
            cod_cancion: 142
        },
        {
            cod_comp: 216,
            cod_art: 19,
            cod_cancion: 143
        },
        {
            cod_comp: 217,
            cod_art: 70,
            cod_cancion: 143
        },
        {
            cod_comp: 218,
            cod_art: 71,
            cod_cancion: 143
        },
        {
            cod_comp: 219,
            cod_art: 19,
            cod_cancion: 144
        },
        {
            cod_comp: 220,
            cod_art: 19,
            cod_cancion: 145
        },
        {
            cod_comp: 221,
            cod_art: 19,
            cod_cancion: 146
        },
        {
            cod_comp: 222,
            cod_art: 72,
            cod_cancion: 146
        },
        {
            cod_comp: 223,
            cod_art: 19,
            cod_cancion: 147
        },
        {
            cod_comp: 224,
            cod_art: 19,
            cod_cancion: 148
        },
        {
            cod_comp: 225,
            cod_art: 19,
            cod_cancion: 149
        },
        {
            cod_comp: 226,
            cod_art: 73,
            cod_cancion: 149
        },
        {
            cod_comp: 227,
            cod_art: 19,
            cod_cancion: 150
        },
        {
            cod_comp: 228,
            cod_art: 19,
            cod_cancion: 151
        },
        {
            cod_comp: 229,
            cod_art: 19,
            cod_cancion: 152
        },
        {
            cod_comp: 230,
            cod_art: 19,
            cod_cancion: 153
        },
        {
            cod_comp: 231,
            cod_art: 19,
            cod_cancion: 154
        },
        {
            cod_comp: 232,
            cod_art: 23,
            cod_cancion: 154
        },
        {
            cod_comp: 233,
            cod_art: 19,
            cod_cancion: 155
        },
        {
            cod_comp: 234,
            cod_art: 74,
            cod_cancion: 155
        },
        {
            cod_comp: 235,
            cod_art: 75,
            cod_cancion: 155
        },
        {
            cod_comp: 236,
            cod_art: 19,
            cod_cancion: 156
        },
        {
            cod_comp: 237,
            cod_art: 76,
            cod_cancion: 156
        },
        {
            cod_comp: 238,
            cod_art: 19,
            cod_cancion: 157
        },
        {
            cod_comp: 239,
            cod_art: 77,
            cod_cancion: 157
        },
        {
            cod_comp: 240,
            cod_art: 19,
            cod_cancion: 158
        },
        {
            cod_comp: 241,
            cod_art: 5,
            cod_cancion: 158
        },
        {
            cod_comp: 242,
            cod_art: 19,
            cod_cancion: 159
        },
        {
            cod_comp: 243,
            cod_art: 2,
            cod_cancion: 160
        },
        {
            cod_comp: 244,
            cod_art: 2,
            cod_cancion: 161
        },
        {
            cod_comp: 245,
            cod_art: 17,
            cod_cancion: 161
        },
        {
            cod_comp: 246,
            cod_art: 2,
            cod_cancion: 162
        },
        {
            cod_comp: 247,
            cod_art: 2,
            cod_cancion: 163
        },
        {
            cod_comp: 248,
            cod_art: 2,
            cod_cancion: 164
        },
        {
            cod_comp: 249,
            cod_art: 6,
            cod_cancion: 164
        },
        {
            cod_comp: 250,
            cod_art: 2,
            cod_cancion: 165
        },
        {
            cod_comp: 251,
            cod_art: 2,
            cod_cancion: 166
        },
        {
            cod_comp: 252,
            cod_art: 2,
            cod_cancion: 167
        },
        {
            cod_comp: 253,
            cod_art: 2,
            cod_cancion: 168
        },
        {
            cod_comp: 254,
            cod_art: 2,
            cod_cancion: 169
        },
        {
            cod_comp: 255,
            cod_art: 2,
            cod_cancion: 170
        }
    ]
    for (const comp of compone) {
        db.insert(Compone).values(comp)
    }

    //insertar datos de la tabla produce 

    const produce = [
        {
            cod_prod: 1,
            cod_productor: 7,
            cod_cancion: 1
        },
        {
            cod_prod: 2,
            cod_productor: 8,
            cod_cancion: 2
        },
        {
            cod_prod: 3,
            cod_productor: 4,
            cod_cancion: 3
        },
        {
            cod_prod: 4,
            cod_productor: 1,
            cod_cancion: 4
        },
        {
            cod_prod: 5,
            cod_productor: 4,
            cod_cancion: 5
        },
        {
            cod_prod: 6,
            cod_productor: 7,
            cod_cancion: 6
        },
        {
            cod_prod: 7,
            cod_productor: 1,
            cod_cancion: 7
        },
        {
            cod_prod: 8,
            cod_productor: 1,
            cod_cancion: 8
        },
        {
            cod_prod: 9,
            cod_productor: 3,
            cod_cancion: 9
        },
        {
            cod_prod: 10,
            cod_productor: 22,
            cod_cancion: 9
        },
        {
            cod_prod: 11,
            cod_productor: 9,
            cod_cancion: 10
        },
        {
            cod_prod: 12,
            cod_productor: 21,
            cod_cancion: 11
        },
        {
            cod_prod: 13,
            cod_productor: 22,
            cod_cancion: 12
        },
        {
            cod_prod: 14,
            cod_productor: 12,
            cod_cancion: 13
        },
        {
            cod_prod: 15,
            cod_productor: 13,
            cod_cancion: 14
        },
        {
            cod_prod: 16,
            cod_productor: 7,
            cod_cancion: 15
        },
        {
            cod_prod: 17,
            cod_productor: 14,
            cod_cancion: 16
        },
        {
            cod_prod: 18,
            cod_productor: 7,
            cod_cancion: 17
        },
        {
            cod_prod: 19,
            cod_productor: 4,
            cod_cancion: 18
        },
        {
            cod_prod: 20,
            cod_productor: 3,
            cod_cancion: 19
        },
        {
            cod_prod: 21,
            cod_productor: 22,
            cod_cancion: 19
        },
        {
            cod_prod: 22,
            cod_productor: 10,
            cod_cancion: 20
        },
        {
            cod_prod: 23,
            cod_productor: 15,
            cod_cancion: 21
        },
        {
            cod_prod: 24,
            cod_productor: 4,
            cod_cancion: 22
        },
        {
            cod_prod: 25,
            cod_productor: 15,
            cod_cancion: 23
        },
        {
            cod_prod: 26,
            cod_productor: 21,
            cod_cancion: 23
        },
        {
            cod_prod: 27,
            cod_productor: 16,
            cod_cancion: 24
        },
        {
            cod_prod: 28,
            cod_productor: 17,
            cod_cancion: 25
        },
        {
            cod_prod: 29,
            cod_productor: 18,
            cod_cancion: 26
        },
        {
            cod_prod: 30,
            cod_productor: 18,
            cod_cancion: 27
        },
        {
            cod_prod: 31,
            cod_productor: 18,
            cod_cancion: 28
        },
        {
            cod_prod: 32,
            cod_productor: 1,
            cod_cancion: 29
        },
        {
            cod_prod: 33,
            cod_productor: 19,
            cod_cancion: 30
        },
        {
            cod_prod: 34,
            cod_productor: 20,
            cod_cancion: 31
        },
        {
            cod_prod: 35,
            cod_productor: 2,
            cod_cancion: 32
        },
        {
            cod_prod: 36,
            cod_productor: 2,
            cod_cancion: 33
        },
        {
            cod_prod: 37,
            cod_productor: 2,
            cod_cancion: 34
        },
        {
            cod_prod: 38,
            cod_productor: 1,
            cod_cancion: 35
        },
        {
            cod_prod: 39,
            cod_productor: 1,
            cod_cancion: 36
        },
        {
            cod_prod: 40,
            cod_productor: 1,
            cod_cancion: 37
        },
        {
            cod_prod: 41,
            cod_productor: 1,
            cod_cancion: 38
        },
        {
            cod_prod: 42,
            cod_productor: 1,
            cod_cancion: 39
        },
        {
            cod_prod: 43,
            cod_productor: 4,
            cod_cancion: 40
        },
        {
            cod_prod: 44,
            cod_productor: 23,
            cod_cancion: 41
        },
        {
            cod_prod: 45,
            cod_productor: 23,
            cod_cancion: 42
        },
        {
            cod_prod: 46,
            cod_productor: 23,
            cod_cancion: 43
        },
        {
            cod_prod: 47,
            cod_productor: 23,
            cod_cancion: 44
        },
        {
            cod_prod: 48,
            cod_productor: 23,
            cod_cancion: 45
        },
        {
            cod_prod: 49,
            cod_productor: 23,
            cod_cancion: 46
        },
        {
            cod_prod: 50,
            cod_productor: 23,
            cod_cancion: 47
        },
        {
            cod_prod: 51,
            cod_productor: 23,
            cod_cancion: 48
        },
        {
            cod_prod: 52,
            cod_productor: 23,
            cod_cancion: 49
        },
        {
            cod_prod: 53,
            cod_productor: 23,
            cod_cancion: 50
        },
        {
            cod_prod: 54,
            cod_productor: 23,
            cod_cancion: 51
        },
        {
            cod_prod: 55,
            cod_productor: 23,
            cod_cancion: 52
        },
        {
            cod_prod: 56,
            cod_productor: 7,
            cod_cancion: 53
        },
        {
            cod_prod: 57,
            cod_productor: 24,
            cod_cancion: 53
        },
        {
            cod_prod: 58,
            cod_productor: 25,
            cod_cancion: 54
        },
        {
            cod_prod: 59,
            cod_productor: 26,
            cod_cancion: 54
        },
        {
            cod_prod: 60,
            cod_productor: 25,
            cod_cancion: 55
        },
        {
            cod_prod: 61,
            cod_productor: 26,
            cod_cancion: 55
        },
        {
            cod_prod: 62,
            cod_productor: 27,
            cod_cancion: 55
        },
        {
            cod_prod: 63,
            cod_productor: 25,
            cod_cancion: 56
        },
        {
            cod_prod: 64,
            cod_productor: 26,
            cod_cancion: 56
        },
        {
            cod_prod: 65,
            cod_productor: 27,
            cod_cancion: 56
        },
        {
            cod_prod: 66,
            cod_productor: 25,
            cod_cancion: 57
        },
        {
            cod_prod: 67,
            cod_productor: 25,
            cod_cancion: 58
        },
        {
            cod_prod: 68,
            cod_productor: 26,
            cod_cancion: 58
        },
        {
            cod_prod: 69,
            cod_productor: 25,
            cod_cancion: 59
        },
        {
            cod_prod: 70,
            cod_productor: 26,
            cod_cancion: 59
        },
        {
            cod_prod: 71,
            cod_productor: 28,
            cod_cancion: 59
        },
        {
            cod_prod: 72,
            cod_productor: 26,
            cod_cancion: 60
        },
        {
            cod_prod: 73,
            cod_productor: 25,
            cod_cancion: 61
        },
        {
            cod_prod: 74,
            cod_productor: 26,
            cod_cancion: 62
        },
        {
            cod_prod: 75,
            cod_productor: 28,
            cod_cancion: 62
        },
        {
            cod_prod: 76,
            cod_productor: 25,
            cod_cancion: 63
        },
        {
            cod_prod: 77,
            cod_productor: 25,
            cod_cancion: 64
        },
        {
            cod_prod: 78,
            cod_productor: 25,
            cod_cancion: 65
        },
        {
            cod_prod: 79,
            cod_productor: 25,
            cod_cancion: 66
        },
        {
            cod_prod: 80,
            cod_productor: 26,
            cod_cancion: 66
        },
        {
            cod_prod: 81,
            cod_productor: 27,
            cod_cancion: 66
        },
        {
            cod_prod: 82,
            cod_productor: 28,
            cod_cancion: 66
        },
        {
            cod_prod: 83,
            cod_productor: 25,
            cod_cancion: 67
        },
        {
            cod_prod: 84,
            cod_productor: 25,
            cod_cancion: 68
        },
        {
            cod_prod: 85,
            cod_productor: 25,
            cod_cancion: 69
        },
        {
            cod_prod: 86,
            cod_productor: 25,
            cod_cancion: 70
        },
        {
            cod_prod: 87,
            cod_productor: 26,
            cod_cancion: 70
        },
        {
            cod_prod: 88,
            cod_productor: 27,
            cod_cancion: 70
        },
        {
            cod_prod: 89,
            cod_productor: 25,
            cod_cancion: 71
        },
        {
            cod_prod: 90,
            cod_productor: 26,
            cod_cancion: 72
        },
        {
            cod_prod: 91,
            cod_productor: 26,
            cod_cancion: 73
        },
        {
            cod_prod: 92,
            cod_productor: 25,
            cod_cancion: 74
        },
        {
            cod_prod: 93,
            cod_productor: 25,
            cod_cancion: 75
        },
        {
            cod_prod: 94,
            cod_productor: 26,
            cod_cancion: 76
        },
        {
            cod_prod: 95,
            cod_productor: 2,
            cod_cancion: 77
        },
        {
            cod_prod: 96,
            cod_productor: 2,
            cod_cancion: 78
        },
        {
            cod_prod: 97,
            cod_productor: 4,
            cod_cancion: 78
        },
        {
            cod_prod: 98,
            cod_productor: 2,
            cod_cancion: 79
        },
        {
            cod_prod: 99,
            cod_productor: 2,
            cod_cancion: 80
        },
        {
            cod_prod: 100,
            cod_productor: 4,
            cod_cancion: 81
        },
        {
            cod_prod: 101,
            cod_productor: 2,
            cod_cancion: 82
        },
        {
            cod_prod: 102,
            cod_productor: 2,
            cod_cancion: 83
        },
        {
            cod_prod: 103,
            cod_productor: 4,
            cod_cancion: 84
        },
        {
            cod_prod: 104,
            cod_productor: 4,
            cod_cancion: 85
        },
        {
            cod_prod: 105,
            cod_productor: 2,
            cod_cancion: 86
        },
        {
            cod_prod: 106,
            cod_productor: 22,
            cod_cancion: 87
        },
        {
            cod_prod: 107,
            cod_productor: 22,
            cod_cancion: 88
        },
        {
            cod_prod: 108,
            cod_productor: 22,
            cod_cancion: 89
        },
        {
            cod_prod: 109,
            cod_productor: 21,
            cod_cancion: 90
        },
        {
            cod_prod: 110,
            cod_productor: 22,
            cod_cancion: 91
        },
        {
            cod_prod: 111,
            cod_productor: 22,
            cod_cancion: 92
        },
        {
            cod_prod: 112,
            cod_productor: 21,
            cod_cancion: 92
        },
        {
            cod_prod: 113,
            cod_productor: 22,
            cod_cancion: 93
        },
        {
            cod_prod: 114,
            cod_productor: 21,
            cod_cancion: 94
        },
        {
            cod_prod: 115,
            cod_productor: 22,
            cod_cancion: 95
        },
        {
            cod_prod: 116,
            cod_productor: 22,
            cod_cancion: 96
        },
        {
            cod_prod: 117,
            cod_productor: 29,
            cod_cancion: 96
        },
        {
            cod_prod: 118,
            cod_productor: 22,
            cod_cancion: 97
        },
        {
            cod_prod: 119,
            cod_productor: 29,
            cod_cancion: 97
        },
        {
            cod_prod: 120,
            cod_productor: 22,
            cod_cancion: 98
        },
        {
            cod_prod: 121,
            cod_productor: 29,
            cod_cancion: 98
        },
        {
            cod_prod: 122,
            cod_productor: 22,
            cod_cancion: 99
        },
        {
            cod_prod: 123,
            cod_productor: 29,
            cod_cancion: 99
        },
        {
            cod_prod: 124,
            cod_productor: 22,
            cod_cancion: 100
        },
        {
            cod_prod: 125,
            cod_productor: 29,
            cod_cancion: 100
        },
        {
            cod_prod: 126,
            cod_productor: 29,
            cod_cancion: 101
        },
        {
            cod_prod: 127,
            cod_productor: 22,
            cod_cancion: 102
        },
        {
            cod_prod: 128,
            cod_productor: 29,
            cod_cancion: 102
        },
        {
            cod_prod: 129,
            cod_productor: 22,
            cod_cancion: 103
        },
        {
            cod_prod: 130,
            cod_productor: 29,
            cod_cancion: 103
        },
        {
            cod_prod: 131,
            cod_productor: 22,
            cod_cancion: 104
        },
        {
            cod_prod: 132,
            cod_productor: 29,
            cod_cancion: 104
        },
        {
            cod_prod: 133,
            cod_productor: 22,
            cod_cancion: 105
        },
        {
            cod_prod: 134,
            cod_productor: 29,
            cod_cancion: 105
        },
        {
            cod_prod: 135,
            cod_productor: 22,
            cod_cancion: 106
        },
        {
            cod_prod: 136,
            cod_productor: 8,
            cod_cancion: 107
        },
        {
            cod_prod: 137,
            cod_productor: 8,
            cod_cancion: 108
        },
        {
            cod_prod: 138,
            cod_productor: 8,
            cod_cancion: 109
        },
        {
            cod_prod: 139,
            cod_productor: 8,
            cod_cancion: 110
        },
        {
            cod_prod: 140,
            cod_productor: 8,
            cod_cancion: 111
        },
        {
            cod_prod: 141,
            cod_productor: 8,
            cod_cancion: 112
        },
        {
            cod_prod: 142,
            cod_productor: 8,
            cod_cancion: 113
        },
        {
            cod_prod: 143,
            cod_productor: 30,
            cod_cancion: 114
        },
        {
            cod_prod: 144,
            cod_productor: 8,
            cod_cancion: 115
        },
        {
            cod_prod: 145,
            cod_productor: 3,
            cod_cancion: 116
        },
        {
            cod_prod: 146,
            cod_productor: 22,
            cod_cancion: 116
        },
        {
            cod_prod: 147,
            cod_productor: 3,
            cod_cancion: 117
        },
        {
            cod_prod: 148,
            cod_productor: 22,
            cod_cancion: 117
        },
        {
            cod_prod: 149,
            cod_productor: 33,
            cod_cancion: 118
        },
        {
            cod_prod: 150,
            cod_productor: 3,
            cod_cancion: 118
        },
        {
            cod_prod: 151,
            cod_productor: 22,
            cod_cancion: 118
        },
        {
            cod_prod: 152,
            cod_productor: 3,
            cod_cancion: 119
        },
        {
            cod_prod: 153,
            cod_productor: 22,
            cod_cancion: 119
        },
        {
            cod_prod: 154,
            cod_productor: 3,
            cod_cancion: 120
        },
        {
            cod_prod: 155,
            cod_productor: 22,
            cod_cancion: 120
        },
        {
            cod_prod: 156,
            cod_productor: 32,
            cod_cancion: 120
        },
        {
            cod_prod: 157,
            cod_productor: 3,
            cod_cancion: 121
        },
        {
            cod_prod: 158,
            cod_productor: 22,
            cod_cancion: 121
        },
        {
            cod_prod: 159,
            cod_productor: 31,
            cod_cancion: 121
        },
        {
            cod_prod: 160,
            cod_productor: 2,
            cod_cancion: 122
        },
        {
            cod_prod: 161,
            cod_productor: 3,
            cod_cancion: 122
        },
        {
            cod_prod: 162,
            cod_productor: 22,
            cod_cancion: 122
        },
        {
            cod_prod: 163,
            cod_productor: 0,
            cod_cancion: 123
        },
        {
            cod_prod: 164,
            cod_productor: 3,
            cod_cancion: 123
        },
        {
            cod_prod: 165,
            cod_productor: 22,
            cod_cancion: 123
        },
        {
            cod_prod: 166,
            cod_productor: 32,
            cod_cancion: 123
        },
        {
            cod_prod: 167,
            cod_productor: 33,
            cod_cancion: 123
        },
        {
            cod_prod: 168,
            cod_productor: 3,
            cod_cancion: 124
        },
        {
            cod_prod: 169,
            cod_productor: 22,
            cod_cancion: 124
        },
        {
            cod_prod: 170,
            cod_productor: 3,
            cod_cancion: 125
        },
        {
            cod_prod: 171,
            cod_productor: 22,
            cod_cancion: 125
        },
        {
            cod_prod: 172,
            cod_productor: 22,
            cod_cancion: 126
        },
        {
            cod_prod: 173,
            cod_productor: 3,
            cod_cancion: 126
        },
        {
            cod_prod: 174,
            cod_productor: 3,
            cod_cancion: 127
        },
        {
            cod_prod: 175,
            cod_productor: 22,
            cod_cancion: 127
        },
        {
            cod_prod: 176,
            cod_productor: 3,
            cod_cancion: 128
        },
        {
            cod_prod: 177,
            cod_productor: 22,
            cod_cancion: 128
        },
        {
            cod_prod: 178,
            cod_productor: 3,
            cod_cancion: 129
        },
        {
            cod_prod: 179,
            cod_productor: 22,
            cod_cancion: 129
        },
        {
            cod_prod: 180,
            cod_productor: 3,
            cod_cancion: 130
        },
        {
            cod_prod: 181,
            cod_productor: 22,
            cod_cancion: 130
        },
        {
            cod_prod: 182,
            cod_productor: 33,
            cod_cancion: 130
        },
        {
            cod_prod: 183,
            cod_productor: 3,
            cod_cancion: 131
        },
        {
            cod_prod: 184,
            cod_productor: 22,
            cod_cancion: 131
        },
        {
            cod_prod: 185,
            cod_productor: 3,
            cod_cancion: 132
        },
        {
            cod_prod: 186,
            cod_productor: 25,
            cod_cancion: 133
        },
        {
            cod_prod: 187,
            cod_productor: 34,
            cod_cancion: 133
        },
        {
            cod_prod: 188,
            cod_productor: 34,
            cod_cancion: 134
        },
        {
            cod_prod: 189,
            cod_productor: 34,
            cod_cancion: 135
        },
        {
            cod_prod: 190,
            cod_productor: 34,
            cod_cancion: 136
        },
        {
            cod_prod: 191,
            cod_productor: 35,
            cod_cancion: 137
        },
        {
            cod_prod: 192,
            cod_productor: 34,
            cod_cancion: 138
        },
        {
            cod_prod: 193,
            cod_productor: 34,
            cod_cancion: 139
        },
        {
            cod_prod: 194,
            cod_productor: 34,
            cod_cancion: 140
        },
        {
            cod_prod: 195,
            cod_productor: 34,
            cod_cancion: 141
        },
        {
            cod_prod: 196,
            cod_productor: 25,
            cod_cancion: 142
        },
        {
            cod_prod: 197,
            cod_productor: 34,
            cod_cancion: 143
        },
        {
            cod_prod: 198,
            cod_productor: 34,
            cod_cancion: 144
        },
        {
            cod_prod: 199,
            cod_productor: 34,
            cod_cancion: 145
        },
        {
            cod_prod: 200,
            cod_productor: 34,
            cod_cancion: 146
        },
        {
            cod_prod: 201,
            cod_productor: 34,
            cod_cancion: 147
        },
        {
            cod_prod: 202,
            cod_productor: 34,
            cod_cancion: 148
        },
        {
            cod_prod: 203,
            cod_productor: 27,
            cod_cancion: 149
        },
        {
            cod_prod: 204,
            cod_productor: 34,
            cod_cancion: 150
        },
        {
            cod_prod: 205,
            cod_productor: 34,
            cod_cancion: 151
        },
        {
            cod_prod: 206,
            cod_productor: 35,
            cod_cancion: 152
        },
        {
            cod_prod: 207,
            cod_productor: 34,
            cod_cancion: 153
        },
        {
            cod_prod: 208,
            cod_productor: 34,
            cod_cancion: 154
        },
        {
            cod_prod: 209,
            cod_productor: 34,
            cod_cancion: 155
        },
        {
            cod_prod: 210,
            cod_productor: 34,
            cod_cancion: 156
        },
        {
            cod_prod: 211,
            cod_productor: 34,
            cod_cancion: 157
        },
        {
            cod_prod: 212,
            cod_productor: 34,
            cod_cancion: 158
        },
        {
            cod_prod: 213,
            cod_productor: 34,
            cod_cancion: 159
        },
        {
            cod_prod: 214,
            cod_productor: 36,
            cod_cancion: 159
        },
        {
            cod_prod: 215,
            cod_productor: 7,
            cod_cancion: 160
        },
        {
            cod_prod: 216,
            cod_productor: 7,
            cod_cancion: 161
        },
        {
            cod_prod: 217,
            cod_productor: 7,
            cod_cancion: 162
        },
        {
            cod_prod: 218,
            cod_productor: 7,
            cod_cancion: 163
        },
        {
            cod_prod: 219,
            cod_productor: 7,
            cod_cancion: 164
        },
        {
            cod_prod: 220,
            cod_productor: 7,
            cod_cancion: 165
        },
        {
            cod_prod: 221,
            cod_productor: 7,
            cod_cancion: 166
        },
        {
            cod_prod: 222,
            cod_productor: 7,
            cod_cancion: 167
        },
        {
            cod_prod: 223,
            cod_productor: 7,
            cod_cancion: 168
        },
        {
            cod_prod: 224,
            cod_productor: 7,
            cod_cancion: 169
        },
        {
            cod_prod: 225,
            cod_productor: 7,
            cod_cancion: 170
        }
    ]
    for (const prod of produce) {
        db.insert(Produce).values(prod)
    }
    // Tabla productor
    const productor = [
        {
            cod_productor: 1,
            nom_prod: "BZRP",
            nombre_real_prod: "Gonzalo",
            apel_prod: "Conde",
            edad_prod: 25,
            oyentes_prod: 40444579,
            nacionalidad_prod: "Argentina",
            anio_comienzo_prod: 2017,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/d13a14b5-8c1f-462b-1c8e-e6cc25af2b00/public",
            cod_manager: 1,
            cod_sello: 1
        },
        {
            cod_productor: 2,
            nom_prod: "Zecca",
            nombre_real_prod: "Lucas",
            apel_prod: " Zecca",
            edad_prod: 22,
            oyentes_prod: 7129616,
            nacionalidad_prod: "Argentina",
            anio_comienzo_prod: 2019,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/27412cba-5c6a-4442-c9e3-e9c0581bad00/public",
            cod_manager: 35,
            cod_sello: 8
        },
        {
            cod_productor: 3,
            nom_prod: "Yesan ",
            nombre_real_prod: "Juan",
            apel_prod: "Cruz Álvarez",
            edad_prod: 21,
            oyentes_prod: 398615,
            nacionalidad_prod: "Argentina",
            anio_comienzo_prod: 2019,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/78655058-95eb-45d9-4a89-16b560559600/public",
            cod_manager: 36,
            cod_sello: 10
        },
        {
            cod_productor: 4,
            nom_prod: "Big One ",
            nombre_real_prod: "Daniel Ismael ",
            apel_prod: "Real",
            edad_prod: 30,
            oyentes_prod: 14601162,
            nacionalidad_prod: "Argentina",
            anio_comienzo_prod: 2019,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/238156da-a657-48d9-4e35-33dd8aaf5100/public",
            cod_manager: 35,
            cod_sello: 14
        },
        {
            cod_productor: 5,
            nom_prod: "Selecta",
            nombre_real_prod: "Pablo ",
            apel_prod: "Jiménez",
            edad_prod: 28,
            oyentes_prod: 808270,
            nacionalidad_prod: "Española ",
            anio_comienzo_prod: 2016,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/bffefae7-3419-40b3-f04f-c740976db400/public",
            cod_manager: 37,
            cod_sello: 7
        },
        {
            cod_productor: 6,
            nom_prod: "Juacko",
            nombre_real_prod: "Juan Carlos",
            apel_prod: " Armas",
            edad_prod: 26,
            oyentes_prod: 902363,
            nacionalidad_prod: "Española",
            anio_comienzo_prod: 2014,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/6cfd2c58-7119-4e72-ed9c-187b11a35400/public",
            cod_manager: 16,
            cod_sello: 21
        },
        {
            cod_productor: 7,
            nom_prod: "Nico Cotton",
            nombre_real_prod: "Nicolás ",
            apel_prod: "Cotton",
            edad_prod: 33,
            oyentes_prod: 114300,
            nacionalidad_prod: "Argentina",
            anio_comienzo_prod: 2006,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/0a050d3e-ebb2-4b05-7c48-688d1c07c800/public",
            cod_manager: 47,
            cod_sello: 8
        },
        {
            cod_productor: 8,
            nom_prod: "Caleb Calloway",
            nombre_real_prod: " Mauro ",
            apel_prod: "Calloway",
            edad_prod: 29,
            oyentes_prod: 2877893,
            nacionalidad_prod: "Puertorriqueña",
            anio_comienzo_prod: 2012,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/2a2158a3-fcce-4a21-3df3-c4e8fd5e1700/public",
            cod_manager: 48,
            cod_sello: 7
        },
        {
            cod_productor: 9,
            nom_prod: "Tatool",
            nombre_real_prod: "Santiago ",
            apel_prod: "Ruiz",
            edad_prod: 30,
            oyentes_prod: 3478372,
            nacionalidad_prod: "Argentina",
            anio_comienzo_prod: 2016,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/87be30f9-7bf3-4636-3a05-6a163e272e00/public",
            cod_manager: 48,
            cod_sello: 13
        },
        {
            cod_productor: 10,
            nom_prod: "ONIRIA",
            nombre_real_prod: "Tomas ",
            apel_prod: "Diaz",
            edad_prod: 31,
            oyentes_prod: 3210122,
            nacionalidad_prod: "Argentina",
            anio_comienzo_prod: 2016,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/876559da-55e9-4730-4d18-bc1c1b302a00/public",
            cod_manager: 48,
            cod_sello: 13
        },
        {
            cod_productor: 11,
            nom_prod: "Taiu",
            nombre_real_prod: "Taiel ",
            apel_prod: "Heredia",
            edad_prod: 28,
            oyentes_prod: 10201264,
            nacionalidad_prod: "Argentina",
            anio_comienzo_prod: 2015,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/59d13b57-0c3c-44ae-361d-ba055850e800/public",
            cod_manager: 49,
            cod_sello: 13
        },
        {
            cod_productor: 12,
            nom_prod: "Pablo",
            nombre_real_prod: "Pablo ",
            apel_prod: "Mas Lopez",
            edad_prod: 26,
            oyentes_prod: 1627515,
            nacionalidad_prod: "Argentina",
            anio_comienzo_prod: 2017,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/ebdd7ef0-58cd-4c9c-f8a4-f3d4d43a0f00/public",
            cod_manager: 49,
            cod_sello: 7
        },
        {
            cod_productor: 13,
            nom_prod: "DJ TAO",
            nombre_real_prod: "Joaquin Antonio",
            apel_prod: "Diaz",
            edad_prod: 29,
            oyentes_prod: 4822765,
            nacionalidad_prod: "Argentina",
            anio_comienzo_prod: 2017,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/b1f3c6d0-706e-4868-d364-4ad2e86f1a00/public",
            cod_manager: 49,
            cod_sello: 7
        },
        {
            cod_productor: 14,
            nom_prod: "DallasK",
            nombre_real_prod: "Dallas James ",
            apel_prod: "Koehlke",
            edad_prod: 32,
            oyentes_prod: 877813,
            nacionalidad_prod: "Estadounidense",
            anio_comienzo_prod: 2010,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/bd5ecfc9-0a30-4276-0598-488181eff800/public",
            cod_manager: 50,
            cod_sello: 12
        },
        {
            cod_productor: 15,
            nom_prod: "XROSS",
            nombre_real_prod: "Xavier",
            apel_prod: "Rosero Moreira",
            edad_prod: 28,
            oyentes_prod: 12550,
            nacionalidad_prod: "Ecuatoriana",
            anio_comienzo_prod: 2017,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/7c5af5a2-0b3f-4e75-7fad-4a789b2a4e00/public",
            cod_manager: 51,
            cod_sello: 24
        },
        {
            cod_productor: 16,
            nom_prod: "Smash David",
            nombre_real_prod: "Samuel David",
            apel_prod: "Jimenez",
            edad_prod: 34,
            oyentes_prod: 34089,
            nacionalidad_prod: "Estadounidense",
            anio_comienzo_prod: 2009,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/c89beb1c-f8fe-4e1f-7e30-adcabc6ddc00/public",
            cod_manager: 52,
            cod_sello: 25
        },
        {
            cod_productor: 17,
            nom_prod: "Young Wolf",
            nombre_real_prod: "David",
            apel_prod: "Sanchez",
            edad_prod: 25,
            oyentes_prod: 38715,
            nacionalidad_prod: "Española",
            anio_comienzo_prod: 2015,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/d43c5b0b-8943-43ee-326e-49d78c9d1b00/public",
            cod_manager: 53,
            cod_sello: 25
        },
        {
            cod_productor: 18,
            nom_prod: "Pablo Gareta",
            nombre_real_prod: "Pablo",
            apel_prod: "Gareta Jimenez",
            edad_prod: 30,
            oyentes_prod: 13407,
            nacionalidad_prod: "Española",
            anio_comienzo_prod: 2015,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/eb1cd90a-7460-4870-d2ad-540b5b469500/public",
            cod_manager: 53,
            cod_sello: 7
        },
        {
            cod_productor: 19,
            nom_prod: "Rouss",
            nombre_real_prod: "Pablo",
            apel_prod: "Rousselon",
            edad_prod: 28,
            oyentes_prod: 141294,
            nacionalidad_prod: "Española",
            anio_comienzo_prod: 2015,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/f31144ca-fe76-4baf-a3f1-9d6f917ca900/public",
            cod_manager: 54,
            cod_sello: 9
        },
        {
            cod_productor: 20,
            nom_prod: "Halpe",
            nombre_real_prod: "Juan Pablo",
            apel_prod: "Fernandez",
            edad_prod: 25,
            oyentes_prod: 742387,
            nacionalidad_prod: "Argentina",
            anio_comienzo_prod: 2016,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/2d913601-881a-4cc6-5689-0c2db2e64200/public",
            cod_manager: 19,
            cod_sello: 2
        },
        {
            cod_productor: 21,
            nom_prod: "Seven Kayne  ",
            nombre_real_prod: "Joaquín",
            apel_prod: " Cordovero",
            edad_prod: 24,
            oyentes_prod: 1919005,
            nacionalidad_prod: "Argentina",
            anio_comienzo_prod: 2017,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/5a7a6f27-8345-41f6-565c-52c3a2c95a00/public",
            cod_manager: 33,
            cod_sello: 1
        },
        {
            cod_productor: 22,
            nom_prod: "Asan",
            nombre_real_prod: "Tomas",
            apel_prod: "Santos Juan",
            edad_prod: 30,
            oyentes_prod: 2126497,
            nacionalidad_prod: "Argentina",
            anio_comienzo_prod: 2019,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/c66aba31-7df6-4ef1-c74a-ad74bb59bb00/public",
            cod_manager: 38,
            cod_sello: 22
        },
        {
            cod_productor: 23,
            nom_prod: "Nobeat",
            nombre_real_prod: "Christian",
            apel_prod: "Restrepo",
            edad_prod: 25,
            oyentes_prod: 330218,
            nacionalidad_prod: "Colombiana",
            anio_comienzo_prod: 2020,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/94f59d95-05eb-4306-d6ae-3087481d1e00/public\r\n",
            cod_manager: 5,
            cod_sello: 6
        },
        {
            cod_productor: 24,
            nom_prod: "Alan Gomez",
            nombre_real_prod: "Alan",
            apel_prod: " Nahuel Gómez",
            edad_prod: 23,
            oyentes_prod: 3820502,
            nacionalidad_prod: "Argentina",
            anio_comienzo_prod: 2020,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/c54c90c4-c1f7-49d1-dba9-363267556d00/public",
            cod_manager: 55,
            cod_sello: 26
        },
        {
            cod_productor: 25,
            nom_prod: "Noah",
            nombre_real_prod: "Noah",
            apel_prod: "Goldstein",
            edad_prod: 38,
            oyentes_prod: 20520,
            nacionalidad_prod: "Estadounidense",
            anio_comienzo_prod: 2010,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/b794942d-70b1-4460-8c62-be15ca8cfc00/public\r\n",
            cod_manager: 56,
            cod_sello: 26
        },
        {
            cod_productor: 26,
            nom_prod: "Michael",
            nombre_real_prod: "Michael",
            apel_prod: "Uzowuru",
            edad_prod: 32,
            oyentes_prod: 16573,
            nacionalidad_prod: "Estadounidense",
            anio_comienzo_prod: 2010,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/aacc94e9-dd58-47e5-2fa3-1e3884dff200/public",
            cod_manager: 57,
            cod_sello: 26
        },
        {
            cod_productor: 27,
            nom_prod: "Tainy",
            nombre_real_prod: "Marcos Efraín",
            apel_prod: " Masís Fernández",
            edad_prod: 34,
            oyentes_prod: 21885223,
            nacionalidad_prod: "Puertorriqueña",
            anio_comienzo_prod: 2003,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/a7a84b08-f91c-4110-d5a2-9359de745300/public",
            cod_manager: 2,
            cod_sello: 3
        },
        {
            cod_productor: 28,
            nom_prod: "Pharrell  Williams",
            nombre_real_prod: "Pharrell ",
            apel_prod: "Lanscilo Williams",
            edad_prod: 51,
            oyentes_prod: 32052714,
            nacionalidad_prod: "Estadounidense",
            anio_comienzo_prod: 1997,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/5d4f25dd-69a9-4011-4b68-1deb8fd35300/public",
            cod_manager: 58,
            cod_sello: 5
        },
        {
            cod_productor: 29,
            nom_prod: "Awesome Pierre",
            nombre_real_prod: "Emmanuel",
            apel_prod: " Rodriguez",
            edad_prod: 26,
            oyentes_prod: 614552,
            nacionalidad_prod: "Argentina",
            anio_comienzo_prod: 2022,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/f765bb2d-b4ce-4183-017d-f263e963af00/public",
            cod_manager: 1,
            cod_sello: 26
        },
        {
            cod_productor: 30,
            nom_prod: "AvilaWTF",
            nombre_real_prod: "Alejandro ",
            apel_prod: "Avila",
            edad_prod: 50,
            oyentes_prod: 201506,
            nacionalidad_prod: "Mexicano",
            anio_comienzo_prod: 2016,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/449675c2-70de-4046-5788-ea9a5094f200/public",
            cod_manager: 25,
            cod_sello: 26
        },
        {
            cod_productor: 31,
            nom_prod: "OroDembow",
            nombre_real_prod: "Sarko ",
            apel_prod: "Louta",
            edad_prod: 29,
            oyentes_prod: 3122,
            nacionalidad_prod: "Argentina",
            anio_comienzo_prod: 2016,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/cf3c343d-3a11-44a6-0c35-0c597f771900/public",
            cod_manager: 11,
            cod_sello: 26
        },
        {
            cod_productor: 32,
            nom_prod: "Club Hats",
            nombre_real_prod: "Juan Manuel",
            apel_prod: "Blascovich Petti",
            edad_prod: 25,
            oyentes_prod: 837259,
            nacionalidad_prod: "Argentina",
            anio_comienzo_prod: 2017,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/fbdac78e-5b5d-464c-836b-fd69ba9f6900/public",
            cod_manager: 11,
            cod_sello: 26
        },
        {
            cod_productor: 33,
            nom_prod: "Marlku",
            nombre_real_prod: "Marcos Rafael ",
            apel_prod: "Colasanti",
            edad_prod: 24,
            oyentes_prod: 123234,
            nacionalidad_prod: "Argentina",
            anio_comienzo_prod: 2020,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/ca0a2fdc-5817-496f-a76c-95907d8f4d00/public",
            cod_manager: 13,
            cod_sello: 26
        },
        {
            cod_productor: 34,
            nom_prod: "Ovy On The Drums",
            nombre_real_prod: "Daniel",
            apel_prod: "Oviedo",
            edad_prod: 32,
            oyentes_prod: 15241564,
            nacionalidad_prod: "Colombiana",
            anio_comienzo_prod: 2018,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/7d981523-aa2a-4d2b-7f24-f9a0e0930d00/public",
            cod_manager: 2,
            cod_sello: 9
        },
        {
            cod_productor: 35,
            nom_prod: "Edgar",
            nombre_real_prod: "Edgar",
            apel_prod: "Barrera",
            edad_prod: 34,
            oyentes_prod: 1000000,
            nacionalidad_prod: "Mexicana",
            anio_comienzo_prod: 2014,
            img_prod: "https://imagedelivery.net/DX6aCRCKOB_y-l4MZVDT9w/67b1b1e8-6955-4edb-5238-7578e8090f00/public",
            cod_manager: 5,
            cod_sello: 13
        }
    ]
    for (const productores of productor) {

        db.insert(Productor).values(productores)
    }

    const usuarios = [
        {
            nombre_usuario: "angel.prada-admin",
            nombre: "Angel",
            apellidos: "Prada",
            contraseña: "1",
            correo_electronico: "angelpradakuai@gmail.com",
            direccion_usu: "Calle el Pumedo Nº 19 , Toral de los vados",
            telefono_usu: "123456789",
            tipo_usu: true,
            img_usu: "https://example.com/image.jpg",
            fecha_nacimiento: new Date("2004-03-12"),
            fecha_registro: new Date("2022-03-01"),
        },

        {
            nombre_usuario: "angel.prada-user",
            nombre: "Angel",
            apellidos: "Prada",
            contraseña: "1",
            correo_electronico: "angelpradakuai@gmail.com",
            direccion_usu: "Calle el Pumedo Nº 19 , Toral de los vados",
            telefono_usu: "123456789",
            tipo_usu: false,
            img_usu: "https://example.com/image.jpg",
            fecha_nacimiento: new Date("2004-03-12"),
            fecha_registro: new Date("2022-03-01"),
        }

    ];


    for (const user of usuarios) {
        await db.insert(Usuario).values(user);
    }
}



