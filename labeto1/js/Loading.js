import Rect from "./Rect.js";
import Text from "./Text.js";
import Metamask from "./Metamask.js";
export default {
  setup() {
    window.data.page.loading = new Text(10, 55, 25, "loading", "#fff");
    window.data.metamask = new Metamask();
  },
  draw() {
    window.data.page.loading.draw();
  }
}