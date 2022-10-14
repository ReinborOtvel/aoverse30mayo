import pages from "./pages/pages.js";
import objects from "./objects/objects.js";
import percentage from "./data/percentage.js";
import percentagePixel from "./data/percentagePixel.js";
import range from "./page/range.js";
import touch from "./page/touch.js";
import key from "./page/key.js";
import metamask from "./page/metamask.js";
import database from "./page/database.js";
export default {
  pages,
  objects,
  percentage,
  percentagePixel,
  range,
  touch,
  key,
  metamask,
  database,
  page(name) {
    window.data.pages.name = name;
    window.data.pages.setup();
  },
  draw() {
    window.data.pages.draw();
  },
  setup() {
    window.data.engine.createCanvas(852, 480);
    window.data.engine.frameRate(15);
    window.data.touch.setup();
    window.data.key.setup();
    window.data.metamask.setup();
  }
}