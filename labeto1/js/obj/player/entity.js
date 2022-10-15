export default class {
  constructor(x, y, width, height, statistics, map) {
    this.transform = new window.data.obj.transform(x, y, width, height);
    this.parts = new window.data.obj.player.parts(x, y, width, height, statistics);
    this.move = new window.data.obj.player.move(x, y, map);
    this.interaction = new window.data.obj.player.interaction(x, y, map);
    this.movementWheel = new window.data.obj.player.movementWheel();
  }
  afterY(y, height) {
    let yEnd = y + height;
    return yEnd > this.y;
  }
  touchStarted() {
    this.move.touchMoved();
  }
  touchMoved() {
    this.move.touchMoved();
  }
  touchEnded() {
    this.move.touchEnded();
    this.interaction.touchEnded();
  }
  keyTyped() {
    this.move.keyTyped();
  }
  keyReleased() {
    this.move.keyReleased();
  }
  draw() {
    this.move.move();
    this.parts.draw();
    this.movementWheel.draw();
    this.interaction.draw();
  }
}
