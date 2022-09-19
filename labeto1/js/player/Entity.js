import Control from "./Control.js";
import Parts from "./Parts.js";
import MovementWheel from "./MovementWheel.js";
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
    this.movementWheel = new MovementWheel(this);
  }
  keyTyped() {
    this.control.keyMove();
  }
  keyReleased() {
    this.control.keyStop();
  }
  touchStarted() {
    this.control.touchMoved();
  }
  touchMoved() {
    this.control.touchMoved();
  }
  touchEnded() {
    this.control.touchEnded();
  }
  afterY(entity) {
    let y = entity.y + entity.height;
    return y > this.y;
  }
  draw() {
    this.parts.draw();
    this.control.draw();
    this.movementWheel.draw();
  }
}