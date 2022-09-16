"use strict";
import assignUtilities from "./utils/assignUtilities.js";
import Metamask from "./Metamask.js";
import setPage from "./pages/setPage.js";
import Events from "./Events.js";
class Data {
  constructor() {
    new p5(engine => {
      window.engine = engine;
      this.setPage = setPage;
      engine.setup = this.setup;
      engine.draw = this.draw;
    });
  }
  setup() {
    metamask.start();
    events.setup();
    data.setPage("", 1);
  }
  draw() {
    utils.rect(0, 0, 100, 100, "#2B2B2B");
    if (data.canDraw == false) {
      utils.text("loading", 15, 60, 20, "#fff");
    } else {
      engine.noSmooth();
      page.draw();
    }
  }

}
assignUtilities();
window.metamask = new Metamask();
window.events = new Events();
window.data = new Data();