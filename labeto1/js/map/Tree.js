import Effect from "./Effect.js";
export default class Tree {
  constructor(index, h, v, width, height) {
    this.effect = new Effect(this);
    this.life = 5;
  }
  interaction(entity) {
    if (this.life <= 0) {
      return;
    }
    this.life -= entity.damage;
    this.effect.active = true;
    setTimeout(() => {
      this.effect.active = false;
    }, 200);
    if (this.life <= 0) {
      entity.inventory.wood += 4;
    }
  }
  collision(x, y) {
    if (this.life <= 0) {
      return false;
    }
    return this.collision(x, y);
  }
  draw() {
    if (this.life <= 0) {
      return;
    }
    utils.image()
  }
}