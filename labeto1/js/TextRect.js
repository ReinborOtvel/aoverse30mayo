import Text from "./Text.js";
import Rect from "./Rect.js";
export default class {
  constructor(text, x, y, width) {
    let height = 6;
    let size = 5;
    this.rect = new Rect(x, y, width, height, "#000");
    this.text = new Text(text, x, y + size, size, "#fff");
  }
}