import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

const urlN1 = 'https://www.billboard.com/c/espanol/';
const urlN2 = 'https://www.billboard.com/c/espanol/noticias/';
const urlN3 = 'https://www.billboard.com/c/espanol/noticias/page/2/';

export async function Noticia1() {
    try {
        const respuesta_web = await fetch(urlN1);
        const html = await respuesta_web.text();

        const DOM_HTML = new JSDOM(html);
        const conjunto_estilos = DOM_HTML.window.document;

        const noticia = conjunto_estilos.querySelector('.o-card.lrv-u-flex.lrv-u-flex-direction-column\\@mobile-max.lrv-u-background-color-white.lrv-a-glue-parent');

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