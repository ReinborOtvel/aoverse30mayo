export default class Effect {
  constructor(x, y, width, height) {
    this.image = new window.data.obj.image(x, y, width, height, "./graphics/effects/1.png");
  }
  setActive() {
    this.image.canDraw = true;
    setTimeout(() => {
      this.image.canDraw = false;
    }, 200);
  }
  draw() {
    this.image.draw();
  }
}