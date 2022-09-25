"use strict";
import Metamask from "./Metamask.js";
import CreateCharacter from "./CreateCharacter.js";
import SelectLeader from "./SelectLeader.js";
import Game from "./Game.js";
import Utils from "./Utils.js";
import Touch from "./Touch.js";
import Key from "./Key.js";
class Data {
  constructor() {
    new p5(engine => {
      window.engine = engine;
      engine.setup = this.setup;
      engine.draw = this.draw;
    });
  }
  setPage(name, fps) {
    engine.createCanvas(852, 480);
    engine.frameRate(fps);
    if (name == "createCharacter") {
      window.page = new CreateCharacter();
    } else if (name == "selectLeader") {
      window.page = new SelectLeader();
    } else if (name == "game") {
      window.page = new Game();
    }
    key.setup();
    touch.setup();
    page.setup();
  }
  setup() {
    engine.createCanvas(852, 480);
    engine.frameRate(1);
    metamask.setup();
  }
  draw() {
    utils.rect(0, 0, 100, 100, "#2B2B2B");
    if (window.page != undefined) {
      page.draw();
    } else {
      utils.text("Loading", 5, 50, 25, "#fff");
      utils.text(data.error, 5, 80, 5, "#EE4848");
    }
  }
}
window.utils = new Utils();
window.touch = new Touch();
window.key = new Key();
window.metamask = new Metamask();
window.data = new Data();