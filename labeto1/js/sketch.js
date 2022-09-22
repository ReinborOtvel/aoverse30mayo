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
  }
  setup() {
    metamask.start();
    window.utils = new Utils();
    window.touch = new Touch();
    window.key = new Key();
  }
  draw() {
    rect(0, 0, 100, 100, "#2B2B2B");
    engine.noSmooth();
    if (window.page == undefined) {
      return;
    } if (page.draw == undefined) {
      page.draw();
    }
  }
}
window.metamask = new Metamask();
window.data = new Data();