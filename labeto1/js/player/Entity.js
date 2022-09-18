import Control from "./Control.js";
import Parts from "./Parts.js";
export default class {
  constructor(x, y, width, height, statistics, map) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.statistics = statistics;
    this.map = map;
    this.parts = new Parts(this);
    this.control = new Control(this);
  }
  keyTyped() {
    this.control.keyMove();
  }
  keyReleased() {
    this.control.keyStop();
  }
  afterY(entity) {
    let y = entity.y + entity.height;
    return y > this.y;
  }
  draw() {
    this.parts.draw();
    this.control.draw();
  }
}