"use strict";
import PlayerParts from "./player/playerParts.js";
export default class {
  constructor(transform, statistics) {
    this.transform = transform;
    this.statistics = statistics;
    this.animation = "down";
    PlayerParts(this.statistics, ({ head, armor, weapon }) => {
      this.head = head;
      this.armor = armor;
      this.weapon = weapon;
      this.load = true;
    });
  }
  draw() {
    if (this.load == true) {
      let { x, y, width, height } = this.transform;
      let head = { width: width / 2, height: height / 2, };
      head.x = x + head.width / 2;
      engine.image(this.armor[this.animation][0], x, y, width, height);
      engine.image(this.head[this.animation][0], head.x, y, head.width, head.height);
      engine.image(this.weapon[this.animation][0], x, y, width, height);
    }
  }
}