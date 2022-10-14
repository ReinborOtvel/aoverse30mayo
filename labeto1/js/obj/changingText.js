import Text from "./Text.js";
export default class {
  constructor(x, y, size, color) {
    this.text = new Text(x, y, size, undefined, color);
  }
  draw(text) {
    this.text.text = text;
    this.text.draw();
  }
}