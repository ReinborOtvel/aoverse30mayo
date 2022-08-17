class CharacterMap {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xMove = 0;
    this.yMove = 0;
    this.speedX = 1;
    this.speedY = 1;
  }
  move() {
    let speedX = this.speedX * this.xMove;
    let speedY = this.speedY * this.yMove;
    let newX = this.x + speedX;
    let newY = this.y + speedY;
    this.x = newX;
    this.y = newY;
  }
  keyPressed() {
    let keys = { w: 87, s: 83, a: 65, d: 68 };
    switch (keyCode) {
      case keys.w:
        this.yMove = -1;
        break;
      case keys.s:
        this.yMove = 1;
        break;
      case keys.a:
        this.xMove = -1;
        break;
      case keys.d:
        this.xMove = 1;
        break;
    }
  }
  keyReleased() {
    let keys = { w: 87, s: 83, a: 65, d: 68 };
    switch (keyCode) {
      case keys.w:
      case keys.s:
        this.yMove = 0;
        break;
      case keys.a:
      case keys.d:
        this.xMove = 0;
        break;
    }
  }
}