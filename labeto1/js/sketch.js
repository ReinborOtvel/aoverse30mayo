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
    utils.rect({
      transform: {
        x: 0,
        y: 0,
        width: 100,
        height: 100
      },
      color: "#2B2B2B"
    });
    if (window.page != undefined) {
      page.draw();
    } else {
      utils.text({
        text: "Loading",
        x: 5,
        y: 50,
        size: 25,
        color: "#fff"
      });
      utils.text({
        text: data.error,
        x: 5,
        y: 80,
        size: 5,
        color: "#EE4848"
      });
    }
  }
}
window.utils = new Utils();
window.touch = new Touch();
window.key = new Key();
window.metamask = new Metamask();
window.data = new Data();