"use strict";
import assignUtilities from "./utils/assignUtilities.js";
import Metamask from "./Metamask.js";
import Events from "./Events.js";
import CreateCharacter from "./pages/CreateCharacter.js";
import SelectLeader from "./pages/SelectLeader.js";
import Game from "./pages/Game.js";
class Data {
  constructor() {
    new p5(engine => {
      window.engine = engine;
      engine.setup = this.setup;
      engine.draw = this.draw;
    });
  }
  setCanvas(fps) {
    data.canDraw = false;
    engine.createCanvas(852, 480);
    engine.frameRate(fps);
  }
  setPage(name, fps) {
    this.setCanvas(fps);
    switch (name) {
      case "createCharacter":
        window.page = new CreateCharacter();
        break;
      case "selectLeader":
        window.page = new SelectLeader();
        break;
      case "game":
        window.page = new Game();
        break;
    }
    page.setup();
  }
  setup() {
    metamask.start();
    events.setup();
    data.setCanvas(1);
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