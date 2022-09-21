"use strict";
import Metamask from "./Metamask.js";
import Events from "./Events.js";
import CreateCharacter from "./CreateCharacter.js";
import SelectLeader from "./SelectLeader.js";
import Game from "./Game.js";
import Rect from "./Rect.js";
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
    page.setup();
  }
  setup() {
    metamask.start();
    events.setup();
    this.background = new Rect(0, 0, 100, 100, "#2B2B2B");
  }
  draw() {
    this.background.draw();
    engine.noSmooth();
    if (window.page != undefined) {
      page.draw();
    }
  }
}
window.metamask = new Metamask();
window.events = new Events();
window.data = new Data();