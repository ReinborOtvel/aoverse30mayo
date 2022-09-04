"use strict";
import text from "./text.js";
export default class {
    setup() {
        this.index = 1;
        this.images = [];
        this.length = 14;
        for (let i = this.index; i <= this.length; i++) {
            let src = `./Graficos/chargingScreens/${i}.jpg`;
            this.images[i] = engine.loadImage(src);
        }
        let interval = setInterval(() => {
            if (this.index < this.length) {
                this.index++;
            } else {
                clearInterval(interval);
                data.metamask.start();
            }
        }, 2000);
        data.canDraw = true;
    }
    click() {
        this.index = this.length;
    }
    draw() {
        let image = this.images[this.index];
        if (image != undefined) {
            engine.image(image, 0, 0, 640, 360);
        }
        text("click to omit", 420, 330, 30, "#fff");
    }
}