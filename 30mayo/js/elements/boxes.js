import image from "./image.js";
export default class boxes {
    constructor() {
        this.width = window.main.canvas.width;
        this.height = window.main.canvas.height;
        this.numberBoxesHorizontal = 10;
        this.numberBoxesVertical = 5;
        this.boxWidth = this.width / this.numberBoxesHorizontal;
        this.boxHeight = this.height / this.numberBoxesVertical;
        this.blackBox = "./img/boxes/8.png";
        this.boxes = new Array(this.numberBoxesVertical).fill(
            new Array(this.numberBoxesHorizontal).fill(0)
        );
        this.loadImages();
    }
    collision(x, y, pixeles) {
        let xBox = false;
        let yBox = false;
        if (pixeles === true) {
            if (x >= 0 && y >= 0 && x <= this.width && y <= this.height) {
                xBox = parseInt(x / this.boxWidth);
                yBox = parseInt(y / this.boxHeight);
            }
        } else {
            xBox = x;
            yBox = y;
        }
        if (xBox !== false && yBox !== false) {
            if (Boolean(this.boxes[yBox]) === false) {
                return null;
            }
            let box = this.boxes[yBox][xBox];
            if (box === 0) {
                return false;
            } else if (box === 1) {
                return true;
            } else if (Boolean(box) === false) {
                return null;
            }
        }
        return null;
    }
    loadImages() {
        this.images = [];
        for (let y = 0; y < this.numberBoxesVertical; y++) {
            this.images[y] = [];
            for (let x = 0; x < this.numberBoxesHorizontal; x++) {
                let box = this.boxes[y][x];
                if (box === 0) {
                    this.images[y][x] = this.floor();
                } else if (box === 1) {
                    this.images[y][x] = this.wall(x, y);
                }
            }
        }
    }
    floor() {
        let boxes = [0];
        return window.main.tools.random.array(boxes);
    }
    wall(x, y) {
        let up = this.collision(x, y - 1, false);
        let left = this.collision(x - 1, y, false);
        let right = this.collision(x + 1, y, false);
        let down = this.collision(x, y + 1, false);
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
    draw(percentage) {
        for (let yBox = 0; yBox < this.numberBoxesVertical; yBox++) {
            for (let xBox = 0; xBox < this.numberBoxesHorizontal; xBox++) {
                let box = this.images[yBox];
                let src = this.blackBox;
                if (Boolean(box) === true) {
                    box = this.images[yBox][xBox];
                    if (box === 0) {
                        src = `./img/boxes/${box}.png`;
                    } else if (Boolean(box) === true) {
                        src = `./img/boxes/${box}.png`;
                    }
                }
                let _image = new image({
                    x: xBox * this.boxWidth,
                    y: yBox * this.boxHeight,
                    width: this.boxWidth,
                    height: this.boxHeight,
                }, src, {
                    x: 0,
                    y: 0,
                    width: "src",
                    height: "src",
                });
                _image.draw(percentage);
            }
        }
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