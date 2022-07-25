export default class Configuracion {
    constructor() {
        this.ancho = 640;
        this.alto = 360;
        this.fps = 30;
    }
    setup() {
        this.graf.createCanvas(this.ancho, this.alto);
        this.graf.frameRate(this.fps);
        let canvas = window.document.querySelector("canvas");
        canvas.addEventListener("click", evento => {
            clickCanvas(evento.x, evento.y);
        });
    }
}