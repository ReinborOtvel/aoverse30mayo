export default class Land {
  constructor(index, h, v, width, height) {
    this.index = index;
    let x = h * width;
    let y = v * height;
    this.image = new window.data.obj.image(x, y, width, height, `./graphics/nature/land/${this.index}.png`, () => {
      this.image.canDraw = true;
    });
  }
  draw() {
    this.image.draw();
  }
}