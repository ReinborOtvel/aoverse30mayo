import Rect from "./Rect.js";
import Text from "./Text.js";
export default class {
  constructor() {
    this.background = new Rect(0, 0, 100, 100, "#2B2B2B");
    this.loading = new Text(10, 20, 50, "loading", "#fff");
  }
  draw() {
    this.background.draw();
    this.loading.draw();
  }
}