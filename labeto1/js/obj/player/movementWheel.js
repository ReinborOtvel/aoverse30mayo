export default class {
  constructor() {
    this.x = 13;
    this.y = 78;
  }
  setPosition(xMove, yMove) {
    if (xMove == 0) {
      this.x = 13;
      if (yMove == 0) {
        this.y = 78;
      } else if (yMove == -1) {
        this.y = 66;
      } else if (yMove == 1) {
        this.y = 90;
      }
    } else if (xMove == -1) {
      if (yMove == 0) {
        this.x = 6;
        this.y = 78;
      } else if (yMove == -1) {
        this.x = 8;
        this.y = 69;
      } else if (yMove == 1) {
        this.x = 8;
        this.y = 86;
      }
    } else if (xMove == 1) {
      if (yMove == 0) {
        this.x = 20;
        this.y = 78;
      } else if (yMove == -1) {
        this.x = 17;
        this.y = 68;
      } else if (yMove == 1) {
        this.x = 17;
        this.y = 88;
      }
    }
  }
  draw() {
    engine.stroke("#fff");
    engine.noFill();
    window.data.fun.circle(13, 78, 5);
    window.data.fun.circle(13, 78, 20);
  }
}