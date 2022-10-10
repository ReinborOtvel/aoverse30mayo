import Text from "./Text.js";
export default class {
  constructor(x, y, width, color) {
    this.text = new Text(x, y, width, undefined, color);
  }
  draw(text) {
    this.text.text = text;
    this.text.draw();
  }
}