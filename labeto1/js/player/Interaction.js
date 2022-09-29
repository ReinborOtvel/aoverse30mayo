export default class {
  constructor() {
    this.image = engine.loadImage("./assets/attackButton.png");
  }
  cutDownTrees() {
    for (let tree of this.map.trees) {

    }
  }
  interaction() {
    let entity = this.map.touchEntity();
    if (entity == false) {
      return;
    }
    let xInit = entity.x - this.rangeX;
    let yInit = entity.y - this.rangeY;
    let xEnd = (entity.x + entity.width) + this.rangeX;
    let yEnd = (entity.y + entity.height) + this.rangeY;
    if (this.x >= xInit && this.x <= xEnd && this.y >= yInit && this.y <= yEnd) {
      entity.interaction(this);
    }
  }
  draw() {
    utils.image(this.image, 85, 85, 10, 10);
  }
}