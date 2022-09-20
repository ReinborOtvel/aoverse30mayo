import Element from "./Element.js";
import Effect from "./Effect.js";
export default class {
  constructor(index, h, v, width, height) {
    this.index = index;
    this.element = new Element(undefined, this.h, this.v, this.width, this.height);
    this.element.image = engine.loadImage(`./graphics/nature/tree/${this.index}.png`);
    this.life = 5;
  }
  interaction(entity) {
    if (this.life <= 0) {
      return;
    }
    this.life -= entity.damage;
    this.effect();
    if (this.life <= 0) {
      entity.inventory.wood += 4;
    }
  }
  collision(x, y) {
    if (this.life <= 0) {
      return false;
    }
    return this.element.collision(x, y);
  }
  draw() {
    if (this.life <= 0) {
      return;
    }
    this.element.draw();
  }
}