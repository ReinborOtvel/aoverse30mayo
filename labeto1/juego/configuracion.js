export default class Configuracion {
    constructor(graf) {
        this.graf = graf;
        this.ancho = 640;
        this.alto = 360;
        this.fps = 30;
    }
    verificarClick(xInicio, yInicio, xFinal, yFinal) {
        return x > xInicio && y > yInicio
            && x < xFinal && y < yFinal;
    }
    click(x, y) {
        console.log(x, y);
    }
    setup() {
        this.graf.createCanvas(this.ancho, this.alto);
        this.graf.frameRate(this.fps);
        this.canvas = window.document.querySelector("canvas");
        this.canvas.addEventListener("click", evento => {
            this.click(evento.x, evento.y);
        });
    }
    preload() {
        this.graf.loadImage("../assets/interfazVacia.png", (imagen) => {
            this.interfazVacia = imagen;
        });
    }
    draw() {
        this.graf.image(this.interfazVacia, 0, 0, this.ancho, this.alto);
    }
}