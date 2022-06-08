import Image from "../Animation/Image.js";
import Maps from "./Maps.js";
export default class boxes {
    constructor(indexMap) {
        this.width = window.Main.Canvas.width;
        this.height = window.Main.Canvas.height;
        this.boxes = Maps(indexMap);
        this.numberBoxesHorizontal = 10;
        this.numberBoxesVertical = 5;
        this.boxWidth = this.width / this.numberBoxesHorizontal;
        this.boxHeight = this.height / this.numberBoxesVertical;
        this.blackBox = "./img/boxes/8.png";
        this.loadImages();
    }
    collision(x, y) {
        if (x >= 0 && y >= 0 && x < this.width && y < this.height) {
            let { xBox, yBox } = this.boxesPosition(x, y);
            if (this.boxes[yBox] === undefined) {
                return true;
            }
            let box = this.boxes[yBox][xBox];
            switch (box) {
                case 0:
                case 2:
                case 3:
                case 4:
                case 5:
                    return false;
                case 1:
                    return true;
            }
        } else {
            return true;
        }
    }
    loadImages() {
        this.images = [];
        for (let y = 0; y < this.numberBoxesVertical; y++) {
            this.images[y] = [];
            for (let x = 0; x < this.numberBoxesHorizontal; x++) {
                let box = this.boxes[y][x];
                switch (box) {
                    case 0:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        this.images[y][x] = this.floor();
                        break;
                    case 1:
                        this.images[y][x] = this.wall(x, y);
                        break;
                }
            }
        }
    }
    floor() {
        let boxes = [0];
        return window.Main.Tools.randomArray(boxes);
    }
    wall(x, y) {
        let positionUp = this.pixelBoxPosition(x, y - 1);
        let up = this.collision(positionUp.x, positionUp.y);
        let positionLeft = this.pixelBoxPosition(x - 1, y);
        let left = this.collision(positionLeft.x, positionLeft.y);
        let positionRight = this.pixelBoxPosition(x + 1, y);
        let right = this.collision(positionRight.x, positionRight.y);
        let positionDown = this.pixelBoxPosition(x, y + 1);
        let down = this.collision(positionDown.x, positionDown.y);
        if (up === true && left === false && right === false && down === true) {
            return 5;
        } if (up === false && left === true && right === false && down === false) {
            return 6;
        } if (up === false && left === false && right === false && down === true) {
            return 7;
        } if (up === false && left === true && right === true && down === false) {
            return 9;
        } if (up === false && left === false && right === true && down === false) {
            return 10;
        } if (up === true && left === false && right === false && down === false) {
            return 11;
        } if (up === false && left === false && right === false && down === false) {
            return 12;
        } if (up === true && left === true && right === true && down === true) {
            return 13;
        } if (up === true && left === true && right === false && down === true) {
            return 14;
        } if (up === true && left === false && right === true && down === true) {
            return 15;
        } if (up === false && left === true && right === true && down === true) {
            return 16;
        } if (up === true && left === true && right === true && down === false) {
            return 17;
        } if (up === false && left === true && right === false && down === true) {
            return 18;
        } if (up === false && left === false && right === true && down === true) {
            return 19;
        } if (up === true && left === false && right === true && down === false) {
            return 20;
        } if (up === true && left === true && right === false && down === false) {
            return 21;
        }
    }
    update() {
        for (let yBox = 0; yBox < this.numberBoxesVertical; yBox++) {
            for (let xBox = 0; xBox < this.numberBoxesHorizontal; xBox++) {
                let src = this.blackBox;
                if (this.images[yBox] !== undefined) {
                    let box = this.images[yBox][xBox];
                    if (box !== undefined) {
                        src = `./img/boxes/${box}.png`;
                    }
                }
                let image = new Image(src, {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                }, {
                    x: xBox * this.boxWidth,
                    y: yBox * this.boxHeight,
                    width: this.boxWidth,
                    height: this.boxHeight,
                });
                image.width = image.src.width;
                image.height = image.src.height;
                image.update();
            }
        }
    }
    boxesPosition(x, y) {
        let xBox = parseInt(x / this.boxWidth);
        let yBox = parseInt(y / this.boxHeight);
        return { xBox, yBox };
    }
    pixelBoxPosition(xBox, yBox) {
        let x = xBox * this.boxWidth;
        let y = yBox * this.boxHeight;
        return { x, y };
    }
    freeBox() {
        let xBox;
        let yBox;
        do {
            xBox = Math.floor(Math.random() * this.numberBoxesHorizontal);
            yBox = Math.floor(Math.random() * this.numberBoxesVertical);
        } while (this.boxes[yBox][xBox] === 1);
        return { xBox, yBox };
    }
}