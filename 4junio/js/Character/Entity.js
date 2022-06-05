import Character from "./Character.js";
import Entity from "../Entity/Entity.js";
export default class EntityCharacter {
  constructor(Transform, statistics, Boxes, speed) {
    this.Transform = Transform;
    this.statistics = statistics;
    this.Boxes = Boxes;
    this.speed = speed;
    this.Character = new Character(this.Transform, this.statistics);
    this.Entity = new Entity(this.Boxes, this.Character.Parts, this.speed);
    this.spawn();
    window.addEventListener("keydown", event => {
      this.Entity.moveKey(event.key);
      let animations = {
        w: "up",
        s: "down",
        a: "left",
        d: "right",
      };
      this.Character.stopAnimation(false);
      let nameAnimation = animations[event.key];
      if (nameAnimation !== undefined) {
        this.Character.changeAnimation(nameAnimation);
      }
    });
    window.addEventListener("keyup", event => {
      this.Entity.stopKey(event.key);
      if (this.Entity.xMove == 0 && this.Entity.yMove == 0) {
        this.Character.stopAnimation(true);
      }
    });
  }
  spawn() {
    forY: for (let y = 0; y < this.Boxes.numberBoxesVertical; y++) {
      for (let x = 0; x < this.Boxes.numberBoxesHorizontal; x++) {
        if (this.Boxes.boxes[y][x] == 2) {
          let xMap = x * this.Boxes.boxWidth;
          let yMap = y * this.Boxes.boxHeight;
          this.Entity.setTransform(xMap, yMap);
          break forY;
        }
      }
    }
  }
  draw(ms, deltaTime) {
    this.Entity.move(ms, deltaTime);
    this.Character.nextSprite(ms, deltaTime);
    this.Character.draw(ms, deltaTime);
  }
}