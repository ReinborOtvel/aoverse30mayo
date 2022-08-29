"use strict";
import text from "./text.js";
import rect from "./rect.js";
export default class {
    setup() {
        this.index = 1;
        this.images = [];
        this.metamask = false;
        for (let i = 1; i <= 14; i++) {
            let src = `./Graficos/chargingScreens/${i}.jpg`;
            this.images[i] = engine.loadImage(src);
        }
        setInterval(() => {
            if (this.index < 14) {
                this.index++;
            } else {
                this.index = 0;
            }
        }, 2000);
    }
    click() {
        if (this.metamask == false) {
            this.metamask = true;
            data.metamask.start();
        }
    }
    draw() {
        let image = this.images[this.index];
        if (image != undefined) {
            engine.image(image, 0, 0, 640, 360);
        }
        if (this.metamask == false) {
            rect(50, 295, 505, 45, "#000");
            text(" click to connect with metamask", 50, 325, 35);
        }
    }
}