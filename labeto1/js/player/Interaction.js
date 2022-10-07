export default class {
  constructor(main) {
    this.main = main;
  }
  setup() {
    this.image = engine.loadImage("./assets/attackButton.png");
  }
  cutDownTrees() {
    for (let tree of this.main.map.trees) {

    }
  }
  touchEnded() {
    let { map, rangeX, rangeY, x, y } = this.main;
    console.log(x, y);
    let entity = map.positionEntity(x, y);
    if (entity == false) {
      return;
    }
    let xInit = entity.x - rangeX;
    let yInit = entity.y - rangeY;
    let xEnd = (entity.x + entity.width) + rangeX;
    let yEnd = (entity.y + entity.height) + rangeY;
    if (x >= xInit && x <= xEnd && y >= yInit && y <= yEnd) {
      entity.interaction(this.main);
    }
  }
  draw() {
    utils.image(this.image, 88, 85, 8, 10);
  }
}