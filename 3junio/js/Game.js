import Boxes from "./Boxes/Boxes.js";
import EntityCharacter from "./Character/Entity.js";
export default class Game {
  constructor() {
    this.Boxes = new Boxes(0);
    this.statistics = JSON.parse(window.localStorage.getItem("statistics"));
    this.EntityCharacter = new EntityCharacter({
      x: 0, y: 0, width: this.Boxes.boxWidth, height: this.Boxes.boxHeight,
    }, this.statistics, this.Boxes, 10);
  }
  draw(ms, deltaTime) {
    this.Boxes.draw();
    this.EntityCharacter.draw(ms, deltaTime);
  }
}