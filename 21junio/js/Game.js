import Boxes from "./Boxes/Boxes.js";
import GameCharacter from "./Character/Character.js";
import GameStingray from "./Stingray/Stingray.js";
export default class Game {
  constructor() {
    this.boxes = new Boxes(0);
    let statistics = JSON.parse(window.localStorage.getItem("statistics"));
    this.character = new GameCharacter({
      width: this.boxes.map.boxWidthScreen,
      height: this.boxes.map.boxHeightScreen,
    }, statistics, this.boxes);
    this.stingray = new GameStingray();
  }
  update() {
    this.boxes.update(this.character);
    this.character.update();
  }
}