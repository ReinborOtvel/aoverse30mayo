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
    this.damage = 1;
    this.inventory = { wood: 0 };
    this.interactionRange = 5;
    this.parts = new Parts();
    this.control = new Control();
    this.movementWheel = new MovementWheel();
  }
  keyTyped() {
    this.control.keyTyped();
  }
  keyReleased() {
    this.control.keyReleased();
  }
  interaction() {
    let { touch } = events;
    let entity = this.map.interaction(touch.x, touch.y);
    if (entity == false) {
      return;
    }
    let xInit = entity.x - this.interactionRange;
    let xEnd = entity.x + entity.width;
    xEnd += this.interactionRange;
    let yInit = entity.y - this.interactionRange;
    let yEnd = entity.y + entity.height;
    yEnd += this.interactionRange;
    let xRange = this.x > xInit && this.x < xEnd;
    let yRange = this.y > yInit && this.y < yEnd;
    if (xRange && yRange) {
      entity.interaction(this);
    }
  }
  touchStarted() {
    this.control.touchStarted();
    this.interaction();
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