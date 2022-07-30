class Estructura {
    setup(click) {
        createCanvas(640, 360);
        frameRate(30);
        let canvas = window.document.querySelector("canvas");
        canvas.addEventListener("click", ({ x, y }) => {
            click(x, y, (xInicial, yInicial, xFinal, yFinal) => {
                return x > xInicial && y > yInicial &&
                    x < xFinal && y < yFinal;
            });
        });
    }
    preload() {
        loadImage("../assets/interfazVacia.png", (img) => {
            this.interfazVacia = img;
        });
    }
    draw() {
        noSmooth();
        textAlign(LEFT);
        textWrap(WORD);
        fill("#fff");
        textSize(30);
        image(this.interfazVacia, 0, 0, 640, 360);
    }
}