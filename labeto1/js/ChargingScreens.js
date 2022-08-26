"use strict";
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
            Metamask();
        }
    }
    draw() {
        let image = this.images[this.index];
        if (image != undefined) {
            engine.image(image, 0, 0, 640, 360);
        }
        if (this.metamask == false) {
            TextBackground(50, 280, " click to connect with metamask ");
        }
    }
}