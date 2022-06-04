export default class Image {
  constructor(src, image, transform) {
    this.src = window.Main.Images.get(src);
    this.x = image.x;
    this.y = image.y;
    this.width = image.width;
    this.height = image.height;
    this.transform = JSON.parse(JSON.stringify(transform));
  }
  draw() {
    if (this.src !== undefined) {
      window.Main.Draw.image(this.src, this, this.transform);
    }
  }
}