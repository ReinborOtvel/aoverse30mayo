"use strict";
import PlayerParts from "./playerParts.js";
export default class Player {
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
    image(this.head[this.animation][0], x, y, width, height);
    image(this.armor[this.animation][0], x, y, width, height);
    image(this.weapon[this.animation][0], x, y, width, height);;
  }
}