"use strict";
import Loading from "./Loading.js";
import CreateCharacter from "./CreateCharacter.js";
import SelectLeader from "./SelectLeader.js";
import Game from "./Game.js";
class Data {
  constructor() {
    new p5(engine => {
      window.engine = engine;
      engine.setup = () => this.setup();
    });
  }
  setPage(name, fps) {
    engine.createCanvas(852, 480);
    engine.frameRate(fps);
    switch (name) {
      case "loading":
        this.page = new Loading();
        break;
      case "createCharacter":
        this.page = new CreateCharacter();
        break;
      case "selectLeader":
        this.page = new SelectLeader();
        break;
      case "game":
        this.page = new Game();
        break;
    }
    engine.draw = () => this.page.draw();
  }
  setup() {
    this.setPage("loading", 1);
  }
}
window.data = new Data();