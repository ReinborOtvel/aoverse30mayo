import CreateCharacter from "./CreateCharacter.js";
import SelectLeader from "./SelectLeader.js";
import Game from "./Game.js";
export default function (name, fps) {
  data.canDraw = false;
  engine.createCanvas(852, 480);
  engine.frameRate(fps);
  switch (name) {
    case "createCharacter":
      window.page = new CreateCharacter();
      page.setup();
      break;
    case "selectLeader":
      window.page = new SelectLeader();
      page.setup();
      break;
    case "game":
      window.page = new Game();
      page.setup();
      break;
  }
}