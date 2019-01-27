
const hbs = require('hbs');

// Helpers
hbs.registerHelper('getAnhio', () => new Date().getFullYear());

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, i) => {
        palabras[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});