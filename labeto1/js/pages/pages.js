import CreateCharacter from "./CreateCharacter.js";
import SelectLeader from "./SelectLeader.js";
import Game from "./Game.js";
export default {
  CreateCharacter,
  SelectLeader,
  Game,
  setup() {
    window.data.pages[window.data.pages.name].setup();
  },
  draw() {
    window.data.pages[window.data.pages.name].draw();
  },
  call(method) {
    if (window.data.pages[window.data.pages.name][method]) {
      window.data.pages[window.data.pages.name][method]();
    }
  }
}