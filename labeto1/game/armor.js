"use strict";
class Armor {
    constructor(metamask, character) {
        this.metamask = metamask;
        this.character = character;
    }
    setup() {
        this.maximumSprite = 0;
        this.sprite = 0;
        this.width = 25;
        this.height = 45;
    }
    preload(callback) {
        loadImage(`../assets/player/armor/${this.metamask.statistics.armor}.png`, img => {
            let parameters = [["down", 6], ["up", 6], ["left", 5], ["right", 5]];
            for (let iParameters in parameters) {
                let animation = parameters[iParameters][0];
                let numberOfImages = parameters[iParameters][1];
                let y = iParameters * this.height;
                this[animation] = [];
                for (let iImage = 0; iImage < numberOfImages; iImage++) {
                    let x = iImage * this.width;
                    this[animation][iImage] = img.get(y, x, this.width, this.height);
                }
            }
            callback();
        });
    }
    draw() {
        image(
            this[this.character.animation][this.sprite],
            this.character.x,
            this.character.y,
            this.character.width,
            this.character.height
        );
    }
}