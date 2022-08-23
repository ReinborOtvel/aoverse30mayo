"use strict";
import PlayerParts from "./playerParts.js";
export default class {
  constructor(transform, statistics, preload) {
    this.transform = transform;
    this.statistics = statistics;
    this.animation = "down";
    PlayerParts(this.statistics, ({ head, armor, weapon }) => {
      this.head = head;
      this.armor = armor;
      this.weapon = weapon;
      preload();
    });
  }
  draw() {
    let { x, y, width, height } = this.transform;
    let head = { width: width / 2, height: height / 2, };
    head.x = x + head.width / 2;
    gameData.p5.image(this.armor[this.animation][0], x, y, width, height);
    gameData.p5.image(this.head[this.animation][0], head.x, y, head.width, head.height);
    gameData.p5.image(this.weapon[this.animation][0], x, y, width, height);;
  }
}