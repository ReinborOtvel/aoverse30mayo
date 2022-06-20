import Image from "../Animation/Image.js";
import Maps from "./Maps.js";
class Box {
  constructor(transform, index) {
    this.Image = new Image(`./img/boxes/${index}.png`, {
      x: 0, y: 0, width: 0, height: 0,
    }, transform);
    this.Image.width = this.Image.src.width;
    this.Image.height = this.Image.src.height;
  }
  update() {
    this.Image.update();
  }
}
class Map {
  constructor(index) {
    this.array = Maps(index);
    this.width = (window.Main.Canvas.width / 100) * 50;
    this.height = window.Main.Canvas.height;
    this.horizontal = 5;
    this.vertical = 5;
    this.box = {
      width: this.width / this.horizontal,
      height: this.height / this.vertical,
    }
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
    }
    let { xBox, yBox } = this.boxes(x, y);
    if (this.array[yBox] === undefined) {
      return true;
    }
    let box = this.array[yBox][xBox];
    if (box === 1) {
      return true;
    }
    return false;
  }
  boxes(x, y) {
    let xBox = parseInt(x / this.box.width);
    let yBox = parseInt(y / this.box.height);
    return { xBox, yBox };
  }
  pixel(xBox, yBox) {
    let x = xBox * this.box.width;
    let y = yBox * this.box.height;
    return { x, y };
  }
  free() {
    let xBox;
    let yBox;
    do {
      xBox = Math.floor(Math.random() * this.horizontal);
      yBox = Math.floor(Math.random() * this.vertical);
    } while (this.boxes[yBox][xBox] === 1);
    return { xBox, yBox };
  }
}
export default class Boxes {
  constructor(index) {
    this.Map = new Map(index);
    this.images();
  }
  images() {
    let index;
    this.boxes = [];
    for (let yBox = 0; yBox < this.Map.vertical; yBox++) {
      this.boxes[yBox] = [];
      for (let xBox = 0; xBox < this.Map.horizontal; xBox++) {
        if (this.Map.array[yBox][xBox] === 1) {
          index = this.wall(xBox, yBox);
        } else {
          index = this.floor();
        }
        let { x, y } = this.Map.pixel(xBox, yBox);
        this.Map.box.x = x;
        this.Map.box.y = y;
        this.boxes[yBox][xBox] = new Box(this.Map.box, index);
      }
    }
  }
  floor() {
    let boxes = [0];
    return window.Main.Tools.randomArray(boxes);
  }
  collisionBoxes(xBox, yBox) {
    let { x, y } = this.Map.pixel(xBox, yBox);
    return this.Map.collision(x, y);
  }
  wall(x, y) {
    let up = this.collisionBoxes(x, y - 1) === true;
    let left = this.collisionBoxes(x - 1, y) === true;
    let right = this.collisionBoxes(x + 1, y) === true;
    let down = this.collisionBoxes(x, y + 1) === true;
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
  update() {
    for (let yBox = 0; yBox < this.Map.vertical; yBox++) {
      for (let xBox = 0; xBox < this.Map.horizontal; xBox++) {
        this.boxes[yBox][xBox].update();
      }
    }
  }
}