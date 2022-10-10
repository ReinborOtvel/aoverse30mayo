import Rect from "./Rect.js";
import Text from "./Text.js";
import Metamask from "./Metamask.js";
export default class {
  constructor() {
    this.background = new Rect(0, 0, 100, 100, "#2B2B2B");
    this.loading = new Text(10, 55, 25, "loading", "#fff");
    window.data.metamask = new Metamask();
  }
  draw() {
    this.background.draw();
    this.loading.draw();
  }
}