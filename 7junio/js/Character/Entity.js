import Character from "./Character.js";
import Entity from "../Entity/Entity.js";
import MoveClickCharacter from "./MoveClick.js";
export default class EntityCharacter {
  constructor(Transform, statistics, Boxes) {
    this.Character = new Character(Transform, statistics);
    this.Entity = new Entity(Boxes, this.Character.Parts, statistics);
    this.MoveClick = new MoveClickCharacter(this.Entity, this.Character);
    this.spawn();
    window.addEventListener("keydown", event => {
      this.movekey(event.key);
    });
    window.addEventListener("keyup", event => {
      this.stopKey(event.key);
    });
  }
  movekey(key) {
    this.Entity.moveKey(key);
    let animations = {
      w: "up",
      s: "down",
      a: "left",
      d: "right",
    };
    this.Character.stopAnimation(false);
    let nameAnimation = animations[key];
    if (nameAnimation !== undefined) {
      this.Character.changeAnimation(nameAnimation);
    }
  }
  stopKey(key) {
    this.Entity.stopKey(key);
    if (this.Entity.xMove == 0 && this.Entity.yMove == 0) {
      this.Character.stopAnimation(true);
    }
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
  update(ms, deltaTime) {
    this.Entity.move(ms, deltaTime);
    this.Character.nextSprite(ms, deltaTime);
    this.Character.update(ms, deltaTime);
    this.MoveClick.update(ms, deltaTime);
  }
}