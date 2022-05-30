import entity from "../entity/entity.js";
import armor from "./armor.js";
import head from "./head.js";
import weapon from "./weapon.js";
export default class character {
  constructor(transformJSON, statistics, boxes, speed) {
    this.transform = JSON.parse(JSON.stringify(transformJSON));
    this.statistics = statistics;
    this.boxes = boxes;
    this.speed = speed;
    this.head = new head(this.transform, this.statistics.head);
    this.armor = new armor(this.transform, this.statistics.armor);
    this.weapon = new weapon(this.transform, this.statistics.weapon);
    this.parts = [this.head, this.armor, this.weapon];
    this.entity = new entity(this.boxes, this.parts, this.speed);
  }
  move(deltaTime) {
    this.entity.move(deltaTime);
  }
  freeBox() {
    this.entity.freeBox();
  }
  setTransform(x, y) {
    this.entity.setTransform(x, y);
  }
  changeAnimation(name) {
    for (let index in this.parts) {
      this.parts[index].change(name);
    }
  }
  nextSprite(ms) {
    for (let index in this.parts) {
      this.parts[index].nextSprite(ms);
    }
  }
  stopAnimation(value) {
    for (let index in this.parts) {
      this.parts[index].stop(value);
    }
  }
  draw(percentage) {
    for (let index in this.parts) {
      this.parts[index].draw(percentage);
    }
  }
  keydown(key) {
    this.stopAnimation(false);
    this.entity.moveKey(key);
    if (key === "a") {
      this.changeAnimation("left");
    } else if (key === "d") {
      this.changeAnimation("right");
    } else if (key === "w") {
      this.changeAnimation("up");
    } else if (key === "s") {
      this.changeAnimation("down");
    }
    if (this.entity.collision === true) {
      this.stopAnimation(true);
    }
  }
  keyup(key) {
    this.entity.stopKey(key);
    if (this.entity.xMove === 0 && this.entity.yMove === 0) {
      this.stopAnimation(true);
    }
  }
  turn() {
    let animations = ["down", "right", "up", "left"];
    let index = animations.indexOf(this.head.animation.name) + 1;
    if (index >= animations.length) {
      index = 0;
    }
    this.changeAnimation(animations[index]);
  }
}