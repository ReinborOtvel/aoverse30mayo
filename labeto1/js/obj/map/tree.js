export default class {
  constructor(h, v, width, height) {
    let x = h * width;
    let y = v * height;
    this.transform = new window.data.obj.transform(x, y, width, height);
    this.image = new window.data.obj.image(x, y, width, height, "./graphics/nature/tree/5.png", () => {
      this.image.canDraw = true;
    });
    this.effect = new window.data.obj.map.effect(x, y, width, height);
    this.life = 5;
  }
  interaction(entity) {
    if (this.life <= 0) return false;
    this.life -= entity.damage;
    this.effect.setActive();
    return this.life <= 0;
  }
  collision(x, y) {
    if (this.life <= 0) return false;
    let transform = this.transform.number;
    let xEnd = transform.x + transform.width;
    let yEnd = transform.y + transform.height;
    return x >= transform.x && x <= xEnd && y >= transform.y && y <= yEnd;
  }
  draw() {
    if (this.life <= 0) {
      return;
    }
    this.image.draw();
    this.effect.draw();
  }
}