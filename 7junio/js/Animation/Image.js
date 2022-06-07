import Transform from "./Transform.js";
export default class Image {
  constructor(src, image, transform) {
    this.src = window.Main.Images.get(src);
    this.x = image.x;
    this.y = image.y;
    this.width = image.width;
    this.height = image.height;
    this.Transform = new Transform(transform.x, transform.y, transform.width, transform.height);
  }
  update() {
    if (this.src !== undefined) {
      window.Main.Draw.image(this.src, this, this.Transform);
    }
  }
}