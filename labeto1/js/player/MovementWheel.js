export default class {
  constructor() {
    this.circles = [
      new window.data.objects.Circle(13, 78, 5),
      new window.data.objects.Circle(13, 78, 20),
    ];
  }
  updatePosition(xMove, yMove) {
    let x;
    let y;
    if (xMove == 0) {
      x = 13;
      if (yMove == 0) {
        y = 78;
      } else if (yMove == -1) {
        y = 66;
      } else if (yMove == 1) {
        y = 90;
      }
    } else if (xMove == -1) {
      if (yMove == 0) {
        x = 6;
        y = 78;
      } else if (yMove == -1) {
        x = 8;
        y = 69;
      } else if (yMove == 1) {
        x = 8;
        y = 86;
      }
    } else if (xMove == 1) {
      if (yMove == 0) {
        x = 20;
        y = 78;
      } else if (yMove == -1) {
        x = 17;
        y = 68;
      } else if (yMove == 1) {
        x = 17;
        y = 88;
      }
    }
    this.circles[0].transform.setTransform(x, y, 5);
  }
  draw() {
    engine.stroke("#fff");
    engine.noFill();
    for (let circle of this.circles) {
      circle.draw();
    }
  }
}