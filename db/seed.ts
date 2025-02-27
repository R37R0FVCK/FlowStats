import { db, Artista, Manager, Sello_Discografico } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {

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



}



