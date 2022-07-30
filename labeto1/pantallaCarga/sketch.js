let estructura = new Estructura();
estructura.imagenes = [];
estructura.indice = 0;
let metamask = new Metamask(() => {
    metamask.elegirPagina((pagina) => {
        estructura.pagina = pagina;
        setInterval(() => {
            siguienteImagen();
        }, 2000);
        estructura.metamask = true;
    });
});
let siguienteImagen = () => {
    let ultimoIndice = estructura.imagenes.length - 1;
    if (estructura.indice < ultimoIndice) {
        estructura.indice++;
        return;
    }
    window.location.href = window.location.href.replace("pantallaCarga", estructura.pagina);
}
function setup() {
    estructura.setup(() => {
        if (estructura.metamask != true) {
            return;
        }
        siguienteImagen();
    });
}
function preload() {
    estructura.preload();
    for (let indice = 0; indice < 8; indice++) {
        let src = `../assets/pantallaCarga${indice}.png`;
        estructura.imagenes[indice] = loadImage(src);
    }
}
function draw() {
    estructura.draw();
    image(estructura.imagenes[estructura.indice], 0, 0, 640, 360);
}