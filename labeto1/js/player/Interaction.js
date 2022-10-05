export default class {
  setup() {
    this.image = engine.loadImage("./assets/attackButton.png");
    this.x = 85;
    this.y = 85;
    this.width = 10;
    this.height = 10;
  }
  cutDownTrees() {
    for (let tree of page.map.trees) {

    }
  }
  touchEnded() {
    let entity = page.map.touchEntity();
    if (entity == false) {
      return;
    }
    let xInit = entity.x - page.player.rangeX;
    let yInit = entity.y - page.player.rangeY;
    let xEnd = (entity.x + entity.width) + page.player.rangeX;
    let yEnd = (entity.y + entity.height) + page.player.rangeY;
    if (page.player.x >= xInit && page.player.x <= xEnd && page.player.y >= yInit && page.player.y <= yEnd) {
      entity.interaction(page.player);
    }
  }
  draw() {
    utils.image(this.image, this.x, this.y, this.width, this.height);
  }
}