"use strict";
import Loading from "./Loading.js";
import CreateCharacter from "./CreateCharacter.js";
import SelectLeader from "./SelectLeader.js";
import Game from "./Game.js";
import Rect from "./Rect.js";
window.data = {
  setPage(name, fps) {
    window.data.engine.createCanvas(852, 480);
    window.data.engine.frameRate(fps);
    switch (name) {
      case "loading":
        window.data.page = new Loading();
        break;
      case "createCharacter":
        window.data.page = new CreateCharacter();
        break;
      case "selectLeader":
        window.data.page = new SelectLeader();
        break;
      case "game":
        window.data.page = new Game();
        break;
    }
    window.data.page.setup();
  },
  draw() {
    window.data.background.draw();
    window.data.page.draw();
  },
  setup() {
    window.data.setPage("loading", 1);
    window.data.background = new Rect(0, 0, 100, 100, "#2B2B2B");
  }
}
new p5(engine => {
  window.data.engine = engine;
  window.data.engine.setup = window.data.setup;
  window.data.engine.draw = window.data.draw;
});