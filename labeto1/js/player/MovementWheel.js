export default class {
  constructor(entity) {
    this.entity = entity;
    this.control = this.entity.control;
    this.x = 13;
    this.y = 78;
  }
  updatePosition() {
    if (this.control.xMove == 0) {
      this.x = 13;
      if (this.control.yMove == 0) {
        this.y = 78;
      } else if (this.control.yMove == -1) {
        this.y = 66;
      } else if (this.control.yMove == 1) {
        this.y = 90;
      }
    } else if (this.control.xMove == -1) {
      if (this.control.yMove == 0) {
        this.x = 6;
        this.y = 78;
      } else if (this.control.yMove == -1) {
        this.x = 8;
        this.y = 69;
      } else if (this.control.yMove == 1) {
        this.x = 8;
        this.y = 86;
      }
    } else if (this.control.xMove == 1) {
      if (this.control.yMove == 0) {
        this.x = 20;
        this.y = 78;
      } else if (this.control.yMove == -1) {
        this.x = 17;
        this.y = 68;
      } else if (this.control.yMove == 1) {
        this.x = 17;
        this.y = 88;
      }
    }
  }
  draw() {
    this.updatePosition();
    engine.stroke("#fff");
    engine.noFill();
    utils.circle(13, 78, 20);
    utils.circle(this.x, this.y, 5);
  }
}