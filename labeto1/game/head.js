"use strict";
class Head {
    constructor(metamask, character) {
        this.metamask = metamask;
        this.character = character;
    }
    setup() {
        this.width = 17;
        this.height = 17;
    }
    preload(callback) {
        loadImage(`../assets/player/head/${this.metamask.statistics.head}.png`, img => {
            let parameters = ["down", "right", "left", "right"];
            for (let iParameters in parameters) {
                let animation = parameters[iParameters];
                let x = iParameters * this.width;
                this[animation] = img.get(x, 0, this.width, this.height);
            }
            callback();
        });
    }
    draw() {
        image(
            this[this.character.animation],
            this.character.x,
            this.character.y,
            this.character.width,
            this.character.height
        );
    }
}