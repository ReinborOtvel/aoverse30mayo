export default class Effect {
  constructor(entity) {
    this.entity = entity;
    this.image = engine.loadImage("./graphics/effects/0.png");
    this.active = false;
  }
  draw() {
    if (this.active == true) {
      utils.image(this.image, this.entity.x, this.entity.y,
        this.entity.width, this.entity.height);
    }
  }
}