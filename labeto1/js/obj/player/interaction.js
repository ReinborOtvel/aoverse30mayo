export default class {
  constructor(x, y, map) {
    this.transform = new window.data.obj.transform(x, y);
    this.map = map;
    this.attackButton = new window.data.obj.image(88, 85, 8, 10, "./assets/attackButton.png");
    this.rangeX = 5;
    this.rangeY = 5;
    this.damage = 1;
  }
  touchEnded() {
    let { x, y } = this.transform.number;
    let entity = this.map.positionEntity(x, y);
    if (entity == false) {
      return;
    }
    let xInit = entity.x - this.rangeX;
    let yInit = entity.y - this.rangeY;
    let xEnd = (entity.x + entity.width) + this.rangeX;
    let yEnd = (entity.y + entity.height) + this.rangeY;
    if (x >= xInit && x <= xEnd && y >= yInit && y <= yEnd) {
      entity.interaction();
    }
  }
  draw() {
    this.attackButton.draw();
  }
}