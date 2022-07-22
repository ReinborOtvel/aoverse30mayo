export default class mensaje {
    constructor(main, texto) {
        this.main = main;
        this.interfazVacia = this.main.loadImage("assets/interfazVacia.png");
        this.texto = texto;
    }
    draw() {
        this.main.image(this.interfazVacia, 0, 0, 640, 360);
        this.main.textAlign(this.main.CENTER);
        this.main.textSize(70);
        this.main.textWrap(this.main.WORD);
        this.main.fill("#fff");
        this.main.text(this.texto, 30, 30, this.main.width - 30, this.main.height - 30);
    }
}