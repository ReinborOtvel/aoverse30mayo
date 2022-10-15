export default class {
  constructor(x, y) {
    this.transform = new window.data.obj.transform(x, y);
    this.xMove = 0;
    this.yMove = 0;
    this.speed = 1;
  }
  animation() {
    if (this.yMove == 0 && this.xMove == 0) {
      this.canNextSprite = false;
    } else {
      this.canNextSprite = true;
      if (this.yMove == -1) {
        this.animation = "up";
      } else if (this.yMove == 1) {
        this.animation = "down";
      } else if (this.xMove == -1) {
        this.animation = "left";
      } else if (this.xMove == 1) {
        this.animation = "right";
      }
    }
  }
  touchMoved() {
    if (window.data.obj.touch.verify(3, 73, 8, 82)) {
      this.xMove = -1;
      this.yMove = 0;
    } else if (window.data.obj.touch.verify(5, 64, 10, 73)) {
      this.xMove = -1;
      this.yMove = -1;
    } else if (window.data.obj.touch.verify(10, 61, 15, 70)) {
      this.xMove = 0;
      this.yMove = -1;
    } else if (window.data.obj.touch.verify(14, 63, 19, 72)) {
      this.xMove = 1;
      this.yMove = -1;
    } else if (window.data.obj.touch.verify(17, 73, 22, 82)) {
      this.xMove = 1;
      this.yMove = 0;
    } else if (window.data.obj.touch.verify(14, 83, 19, 92)) {
      this.xMove = 1;
      this.yMove = 1;
    } else if (window.data.obj.touch.verify(10, 85, 15, 94)) {
      this.xMove = 0;
      this.yMove = 1;
    } else if (window.data.obj.touch.verify(5, 81, 10, 90)) {
      this.xMove = -1;
      this.yMove = 1;
    }
    this.animation();
  }
  touchEnded() {
    if (window.data.obj.touch.verify(10, 73, 15, 82)) {
      this.xMove = 0;
      this.yMove = 0;
    }
    this.animation();
  }
  keyTyped() {
    if (window.data.obj.key.key == "w") {
      this.yMove = -1;
    } else if (window.data.obj.key.key == "s") {
      this.yMove = 1;
    } else if (window.data.obj.key.key == "a") {
      this.xMove = -1;
    } else if (window.data.obj.key.key == "d") {
      this.xMove = 1;
    }
  }
  keyReleased() {
    if (window.data.obj.key.key == "w" || window.data.obj.key.key == "s") {
      this.yMove = 0;
    } else if (window.data.obj.key.key == "a" || window.data.obj.key.key == "d") {
      this.xMove = 0;
    }
    this.animation();
  }
  move() {
    let { x, y } = this.transform.number;
    let xSpeed = this.xMove * this.speed;
    let ySpeed = this.yMove * this.speed;
    if (xSpeed != 0 || ySpeed != 0) {
      x += xSpeed;
      y += ySpeed;
      if (!this.map.collision(x, y)) {
        this.transform.setTransform(x, y);
      }
    }
  }
}