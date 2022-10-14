import createCharacter from "./createCharacter.js";
import game from "./game.js";
import message from "./message.js";
import selectLeader from "./selectLeader.js";
export default {
  createCharacter,
  game,
  message,
  selectLeader,
  call(method) {
    if (window.data.pages[window.data.pages.name][method]) {
      window.data.pages[window.data.pages.name][method]();
    }
  }
}