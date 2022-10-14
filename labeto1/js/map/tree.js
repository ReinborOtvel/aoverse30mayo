import Effect from "./Effect.js";
export default class Tree {
  constructor(h, v, width, height) {
    this.h = h;
    this.v = v;
    this.width = width;
    this.height = height;
    this.x = this.h * this.width;
    this.y = this.v * this.height;
    this.image = engine.loadImage("./graphics/nature/tree/5.png");
    this.effect = new Effect(this.x, this.y, this.width, this.height);
    this.life = 5;
  }
  interaction(entity) {
    if (this.life <= 0) {
      return false;
    }
    this.life -= entity.damage;
    this.effect.setActive();
    return this.life <= 0;
  }
  collision(x, y) {
    if (this.life <= 0) {
      return false;
    }
    let xEnd = this.x + this.width;
    let yEnd = this.y + this.height;
    return x >= this.x && x <= xEnd && y >= this.y && y <= yEnd;
  }
  draw() {
    if (this.life <= 0) {
      return;
    }
    utils.image(this.image, this.x, this.y, this.width, this.height);
    this.effect.draw();
  }
}