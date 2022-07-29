class Estructura {
    setup(click) {
        this.motor.createCanvas(640, 360);
        this.motor.frameRate(30);
        let canvas = window.document.querySelector("canvas");
        canvas.addEventListener("click", ({ x, y }) => {
            click(x, y);
        });
    }
    preload(motor) {
        this.motor = motor;
        this.motor.loadImage("../assets/interfazVacia.png", (img) => {
            this.interfazVacia = img;
        });
    }
    draw() {
        this.motor.noSmooth();
        this.motor.textAlign(this.motor.CENTER);
        this.motor.textWrap(this.motor.WORD);
        this.motor.fill("#fff");
        this.motor.textSize(30);
        this.motor.image(this.interfazVacia, 0, 0, 640, 360);
    }
}