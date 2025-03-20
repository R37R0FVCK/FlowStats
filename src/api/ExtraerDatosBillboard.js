import fetch from 'node-fetch'; // Para realizar solicitudes HTTP
import { JSDOM } from 'jsdom'; // Para manipular y analizar el HTML

// URLs de las páginas de Billboard que se van a analizar
const urlN1 = 'https://www.billboard.com/c/espanol/';
const urlN2 = 'https://www.billboard.com/c/espanol/noticias/';
const urlN3 = 'https://www.billboard.com/c/espanol/noticias/page/2/';

// Función para extraer la primera noticia de la página principal
export async function Noticia1() {
    try {
        // Realizar una solicitud HTTP a la URL
        const respuesta_web = await fetch(urlN1);
        const html = await respuesta_web.text(); // Obtener el contenido HTML de la respuesta

        // Analizar el HTML utilizando JSDOM
        const DOM_HTML = new JSDOM(html);
        const conjunto_estilos = DOM_HTML.window.document;

        // Seleccionar eldiv de la noticia principal mediante sus estilos
        const noticia = conjunto_estilos.querySelector('.o-card.lrv-u-flex.lrv-u-flex-direction-column\\@mobile-max.lrv-u-background-color-white.lrv-a-glue-parent');

        // Verificar si se encontró la noticia
        if (!noticia) {
            throw new Error('La noticia no se ha encontrado');
        }

        // Extraer la imagen de la noticia
        const imagen_noticia = noticia.querySelector('.c-lazy-image__img');
        if (!imagen_noticia) {
            throw new Error('La imagen de la noticia no se encontró');
        }
        const url_imagen = imagen_noticia.getAttribute('src'); // Obtener la URL de la imagen

        // Extraer el título de la noticia
        const estilo_titulo = noticia.querySelector('.c-title__link');
        const titulo_noticia = estilo_titulo ? estilo_titulo.textContent.trim() : 'El titulo de la noticia no fue encontrado';

        // Extraer el enlace de la noticia
        const link = estilo_titulo ? estilo_titulo.getAttribute('href') : 'El link de la noticia no fue encontrado';

        // Extraer el autor de la noticia
        const estilo_autor = noticia.querySelector('.c-tagline a span');
        const autor = estilo_autor ? estilo_autor.textContent.trim() : 'El nombre del autor no fue encontrado';

        // Extraer la fecha de publicación de la noticia
        const fecha_publicacion = noticia.querySelector('.c-timestamp');
        const fecha_puli = fecha_publicacion ? fecha_publicacion.textContent.trim() : 'La fecha de publicacion no ha podido ser encontrada';

        // Devolver un objeto con los datos extraídos
        return {
            titulo_noticia,
            link,
            url_imagen,
            autor,
            fecha_puli
        };
    } catch (error) {
        // Manejar errores y devolver null si ocurre un problema
        console.error('error con la url:', error);
        return null;
    }
}
//P.D. Las siguientes funciones son similares a la anterior, solo cambian las URL de las páginas a analizar
// Función para extraer la segunda noticia de la sección de noticias
export async function Noticia2() {
    try {
        const respuesta_web = await fetch(urlN2);
        const html = await respuesta_web.text();

        const DOM_HTML = new JSDOM(html);
        const conjunto_estilos = DOM_HTML.window.document;

        const noticia = conjunto_estilos.querySelector('.story.lrv-a-glue-parent.lrv-u-background-color-white.lrv-u-margin-tb-075.lrv-u-display-inline-block.lrv-u-width-100p');

        if (!noticia) {
            throw new Error('La noticia no se ha encontrado');
        }

        const imagen_noticia = noticia.querySelector('.c-lazy-image__img');
        if (!imagen_noticia) {
            throw new Error('La imagen de la noticia no se encontró');
        }
        const url_imagen = imagen_noticia.getAttribute('src');

        const estilo_titulo = noticia.querySelector('.c-title__link');
        const titulo_noticia = estilo_titulo ? estilo_titulo.textContent.trim() : 'El titulo de la noticia no fue encontrado';

        const link = estilo_titulo ? estilo_titulo.getAttribute('href') : 'El link de la noticia no fue encontrado';

        const estilo_autor = noticia.querySelector('.c-tagline a span');
        const autor = estilo_autor ? estilo_autor.textContent.trim() : 'El nombre del autor no fue encontrado';

        const fecha_publicacion = noticia.querySelector('.c-timestamp');
        const fecha_puli = fecha_publicacion ? fecha_publicacion.textContent.trim() : 'La fecha de publicacion no ha podido ser encontrada';

        return {
            titulo_noticia,
            link,
            url_imagen,
            autor,
            fecha_puli
        };
    } catch (error) {
        console.error('error con la url:', error);
        return null;
    }
}

// Función para extraer la  tercera noticia de la segunda página de la sección de noticias
export async function Noticia3() {
    try {
        const respuesta_web = await fetch(urlN3);
        const html = await respuesta_web.text();

        const DOM_HTML = new JSDOM(html);
        const conjunto_estilos = DOM_HTML.window.document;

        const noticia = conjunto_estilos.querySelector('.story.lrv-a-glue-parent.lrv-u-background-color-white.lrv-u-margin-tb-075.lrv-u-display-inline-block.lrv-u-width-100p');

        if (!noticia) {
            throw new Error('La noticia no se ha encontrado');
        }

        const imagen_noticia = noticia.querySelector('.c-lazy-image__img');
        if (!imagen_noticia) {
            throw new Error('La imagen de la noticia no se encontró');
        }
        const url_imagen = imagen_noticia.getAttribute('src');

        const estilo_titulo = noticia.querySelector('.c-title__link');
        const titulo_noticia = estilo_titulo ? estilo_titulo.textContent.trim() : 'El titulo de la noticia no fue encontrado';

        const link = estilo_titulo ? estilo_titulo.getAttribute('href') : 'El link de la noticia no fue encontrado';

        const estilo_autor = noticia.querySelector('.c-tagline a span');
        const autor = estilo_autor ? estilo_autor.textContent.trim() : 'El nombre del autor no fue encontrado';

        const fecha_publicacion = noticia.querySelector('.c-timestamp');
        const fecha_puli = fecha_publicacion ? fecha_publicacion.textContent.trim() : 'La fecha de publicacion no ha podido ser encontrada';

        return {
            titulo_noticia,
            link,
            url_imagen,
            autor,
            fecha_puli
        };
    } catch (error) {
        console.error('error con la url:', error);
        return null;
    }
}