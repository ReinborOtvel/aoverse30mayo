"use strict";
export default class {
    animation() {
        switch (character.graphics.animation) {
            case "up":
            case "down":
                this.sprite = 0;
                this.maximumSprite = 6;
                break;
            case "left":
            case "right":
                this.sprite = 0;
                this.maximumSprite = 5;
                break;
        }
    }
    nextSprite() {
        if (this.sprite == this.maximumSprite) {
            this.sprite = 0;
        } else {
            this.sprite++;
        }
    }
    constructor(callback) {
        this.maximumSprite = 0;
        this.sprite = 0;
        let index = metamask.statistics.weapon;
        let url = `../assets/player/weapon/${index}.png`;
        loadImage(url, img => {
            let parameters = [["down", 6], ["up", 6], ["left", 5], ["right", 5]];
            let width = 25;
            let height = 45;
            for (let iParameters in parameters) {
                let animation = parameters[iParameters][0];
                let numberOfImages = parameters[iParameters][1];
                let y = iParameters * height;
                this[animation] = [];
                for (let iImage = 0; iImage < numberOfImages; iImage++) {
                    let x = iImage * width;
                    this[animation][iImage] = img.get(x, y, width, height);
                }
            }
            callback();
        });
    }
    draw() {
        let { animation, x, y, width, height } = character.graphics;
        image(this[animation][this.sprite], x, y, width, height);
    }
}