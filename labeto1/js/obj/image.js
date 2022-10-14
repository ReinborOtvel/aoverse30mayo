export default class {
  constructor(x, y, width, height, url, loadImage) {
    this.transform = new window.data.obj.transform(x, y, width, height);
    this.canDraw = false;
    window.data.engine.loadImage(url, image => {
      this.image = image;
      loadImage();
    });
  }
  draw() {
    if (!this.canDraw) return;
    let { x, y, width, height } = this.transform.percentage;
    window.data.engine.noSmooth();
    window.data.engine.image(this.image, x, y, width, height);
  }
}