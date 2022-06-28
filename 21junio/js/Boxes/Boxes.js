import maps from "./maps.js";
class Map {
  constructor(index) {
    this.boxes = maps(index);
    this.widthScreen = (window.main.canvas.width / 100) * 50;
    this.heightScreen = window.main.canvas.height;
    this.boxesScreen = 6;
    this.boxWidthScreen = this.widthScreen / this.boxesScreen;
    this.boxHeightScreen = this.heightScreen / this.boxesScreen;
  }
  collision(x, y) {
    if (x < 0) {
      return true;
    } if (y < 0) {
      return true;
    } if (x >= this.width) {
      return true;
    } if (y >= this.height) {
      return true;
    } if (this.boxes[y] === undefined) {
      return true;
    } if (this.boxes[y][x] === "1") {
      return true;
    }
    return false;
  }
  freeBox() {
    let xBox;
    let yBox;
    do {
      xBox = Math.floor(Math.random() * this.boxes.length);
      yBox = Math.floor(Math.random() * this.boxes.length);
    } while (this.boxes[yBox][xBox] === "1");
    return { xBox, yBox };
  }
}
export default class Boxes {
  constructor(index) {
    this.map = new Map(index);
    this.images();
  }
  images() {
    this.boxes = [];
    for (let yBox = 0; yBox < this.map.boxes.length; yBox++) {
      this.boxes[yBox] = [];
      for (let xBox = 0; xBox < this.map.boxes.length; xBox++) {
        if (this.map.boxes[yBox][xBox] === "1") {
          this.boxes[yBox][xBox] = this.wall(xBox, yBox);
        } else {
          this.boxes[yBox][xBox] = this.floor();
        }
      }
    }
  }
  floor() {
    let boxes = [0];
    return window.main.tools.randomArray(boxes);
  }
  wall(x, y) {
    let up = this.map.collision(x, y - 1) === true;
    let left = this.map.collision(x - 1, y) === true;
    let right = this.map.collision(x + 1, y) === true;
    let down = this.map.collision(x, y + 1) === true;
    if (up && !left && !right && down) {
      return 5;
    } if (!up && left && !right && !down) {
      return 6;
    } if (!up && !left && !right && down) {
      return 7;
    } if (!up && left && right && !down) {
      return 9;
    } if (!up && !left && right && !down) {
      return 10;
    } if (up && !left && !right && !down) {
      return 11;
    } if (!up && !left && !right && !down) {
      return 12;
    } if (up && left && right && down) {
      return 13;
    } if (up && left && !right && down) {
      return 14;
    } if (up && !left && right && down) {
      return 15;
    } if (!up && left && right && down) {
      return 16;
    } if (up && left && right && !down) {
      return 17;
    } if (!up && left && !right && down) {
      return 18;
    } if (!up && !left && right && down) {
      return 19;
    } if (up && !left && right && !down) {
      return 20;
    } if (up && left && !right && !down) {
      return 21;
    }
  }
  box(x, y, index) {
    let src = window.main.images.get(`./img/boxes/${index}.png`);
    let image = {
      x: 0, y: 0,
      width: src.width,
      height: src.height
    };
    let box = {
      width: this.map.boxWidthScreen,
      height: this.map.boxHeightScreen,
      x, y,
    };
    window.main.draw.image(src, image, box);
  }
  update(character) {
    moveX = (this.map.boxWidthScreen / 100) * character.xSteps;
    moveY = (this.map.boxHeightScreen / 100) * character.ySteps;
    let xInitial = character.x - (this.map.boxesScreen / 2);
    let yInitial = character.y - (this.map.boxesScreen / 2);
    for (let yI = -1; yI <= this.map.boxesScreen; yI++) {
      let yBox = yInitial + yI;
      for (let xI = -1; xI <= this.map.boxesScreen; xI++) {
        let xBox = xInitial + xI;
        let index;
        if (this.boxes[yBox] === undefined) {
          index = 8;
        } else if (this.boxes[yBox][xBox] === undefined) {
          index = 8;
        } else {
          index = this.boxes[yBox][xBox];
        }
        let x = 200 + (xI * this.map.boxWidthScreen);
        let y = yI * this.map.boxHeightScreen;
        this.box(x - moveX, y - moveY, index);
      }
    }
    window.main.draw.fillRect("#000", 0, 0, 200, window.main.canvas.height);
    window.main.draw.fillRect("#000", this.map.widthScreen + 200, 0, this.map.widthScreen, window.main.canvas.height);
  }
}