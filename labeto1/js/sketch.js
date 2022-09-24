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
    page.setup();
    window.utils = new Utils();
    window.touch = new Touch();
    window.key = new Key();
  }
  setup() {
    metamask.start();
  }
  draw() {
    utils.rect(0, 0, 100, 100, "#2B2B2B");
    page.draw();
  }
}
window.metamask = new Metamask();
window.data = new Data();