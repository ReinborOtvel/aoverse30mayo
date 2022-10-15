import obj from "./obj/import.js";
import fun from "./fun/import.js";
import pages from "./pages/import.js";
export default {
  obj,
  fun,
  pages,
  page(name) {
    window.data.pages.name = name;
    window.data.pages.call("setup");
  },
  draw() {
    window.data.fun.rect(0, 0, 100, 100, "#000");
    window.data.pages.call("draw");
  },
  setup() {
    window.data.page("message");
    window.data.engine.createCanvas(852, 480);
    window.data.engine.frameRate(15);
    window.data.obj.touch.setup();
    window.data.obj.key.setup();
    window.data.obj.metamask.setup();
  }
}