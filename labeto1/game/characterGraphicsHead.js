"use strict";
class CharacterGraphicsHead {
    constructor(callback) {
        let index = metamask.statistics.head;
        let url = `../assets/player/head/${index}.png`;
        loadImage(url, img => {
            let width = 17;
            let height = 17;
            let parameters = ["down", "right", "left", "right"];
            for (let iParameters in parameters) {
                let animation = parameters[iParameters];
                let x = iParameters * width;
                this[animation] = img.get(x, 0, width, height);
            }
            callback();
        });
    }
    draw() {
        let { animation, x, y, width, height } = character.graphics;
        width = width / 2;
        height = height / 2;
        x = x + width / 2;
        y = y - height / 2;
        image(this[animation], x, y, width, height);
    }
}