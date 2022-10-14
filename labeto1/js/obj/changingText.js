export default class {
  constructor(x, y, size, color) {
    this.text = new window.data.obj.text(x, y, size, undefined, color);
  }
  draw(text) {
    this.text.text = text;
    this.text.draw();
  }
}