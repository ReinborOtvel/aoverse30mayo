export default class Nivel {
    constructor(main) {
        this.main = main;
        this.interfazVacia = this.main.loadImage("assets/interfazVacia.png");
    }
    draw() {
        this.main.image(this.interfazVacia, 0, 0, 640, 360);
    }
}