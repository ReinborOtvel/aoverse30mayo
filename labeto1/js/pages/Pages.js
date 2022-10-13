import CreateCharacter from "./CreateCharacter.js";
import SelectLeader from "./SelectLeader.js";
import Game from "./Game.js";
export default {
  CreateCharacter,
  SelectLeader,
  Game,
  setup(name) {
    window.data.pages.name = name;
    window.data.pages[name].setup();
  },
  draw() { }
}