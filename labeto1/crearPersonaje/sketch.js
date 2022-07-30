let estructura = new Estructura();
estructura.estadisticas = new Estadisticas();
estructura.personaje = new Personaje();
let metamask = new Metamask(() => {
    metamask.elegirPagina((pagina) => {
        estructura.pagina = pagina;
        if (estructura.pagina != "crearPersonaje") {
            window.location.href = window.location.href.replace("crearPersonaje", pagina);
            return;
        }
        estructura.metamask = true;
    });
});
function preload() {
    estructura.preload();
    estructura.estadisticas.crear();
    estructura.personaje.preload(estructura.estadisticas);
}
function setup() {
    estructura.setup((x, y, verificarClick) => {
        console.log(x, y);
        if (estructura.metamask != true) {
            return;
        }
        if (verificarClick(27, 227, 303, 254)) {
            estructura.estadisticas.crear();
            estructura.personaje.preload(estructura.estadisticas);
        } else if (verificarClick(29, 270, 254, 294)) {
            estructura.personaje.crear(estructura.estadisticas);
        }
    });
}
function draw() {
    estructura.draw();
    estructura.personaje.draw();
    estructura.estadisticas.draw();
}