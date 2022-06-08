import Character from "./Character.js";
import Entity from "../Entity/Entity.js";
import MoveClickCharacter from "./MoveClick.js";
import LifeBar from "./LifeBar.js";
export default class EntityCharacter {
  constructor(Transform, statistics, Boxes) {
    this.Character = new Character(Transform, statistics);
    this.Entity = new Entity(Boxes, this.Character.Parts, statistics);
    this.MoveClick = new MoveClickCharacter(this.Entity, this.Character);
    this.LifeBar = new LifeBar(this);
    this.spawn();
  }
  spawn() {
    forY: for (let y = 0; y < this.Entity.Boxes.numberBoxesVertical; y++) {
      for (let x = 0; x < this.Entity.Boxes.numberBoxesHorizontal; x++) {
        if (this.Entity.Boxes.boxes[y][x] == 2) {
          let xMap = x * this.Entity.Boxes.boxWidth;
          let yMap = y * this.Entity.Boxes.boxHeight;
          this.Entity.setTransform(xMap, yMap);
          break forY;
        }
      }
    }
  }
  update() {
    this.Entity.move();
    this.Character.nextSprite();
    this.Character.update();
    this.MoveClick.update();
    this.LifeBar.update();
  }
}