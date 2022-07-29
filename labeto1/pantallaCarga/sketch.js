let estructura = new Estructura();
estructura.imagenes = [];
estructura.indice = 0;
let metamask = new Metamask(() => {
    metamask.elegirPagina((pagina) => {
        estructura.pagina = pagina;
        new p5(principal);
    });
});
let principal = (motor) => {
    motor.setup = () => {
        estructura.setup();
    }
    motor.preload = () => {
        estructura.preload(motor);
        for (let indice = 0; indice < 8; indice++) {
            let src = `../assets/pantallaCarga${indice}.png`;
            estructura.imagenes[indice] = motor.loadImage(src);
        }
        setInterval(() => {
            let ultimoIndice = estructura.imagenes.length - 1;
            if (estructura.indice < ultimoIndice) {
                estructura.indice++;
                return;
            }
            window.location.href = window.location.href.replace("pantallaCarga", estructura.pagina);
        }, 2000);
    }
    motor.draw = () => {
        estructura.draw();
        motor.image(estructura.imagenes[estructura.indice], 0, 0, 640, 360);
    }
}