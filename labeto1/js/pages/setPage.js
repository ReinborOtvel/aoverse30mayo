import ChargingScreens from "./ChargingScreens.js";
import CreateCharacter from "./CreateCharacter.js";
import SelectLeader from "./SelectLeader.js";
import Game from "./Game.js";
export default function (name, fps) {
  data.canDraw = false;
  engine.createCanvas(852, 480);
  engine.frameRate(fps);
  switch (name) {
    case "chargingScreens":
      window.page = new ChargingScreens();
      break;
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