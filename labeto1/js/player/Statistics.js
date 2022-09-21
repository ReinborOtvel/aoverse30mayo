"use strict";
export default class {
  constructor() {
    this.name = "";
    for (let i = 0; i <= 5; i++) {
      let characters = "aeiou";
      if (i % 2 == 0) {
        characters = "qwrtypsdfghjklzxcvbnm";
      }
      this.name += engine.random([...characters]);
    }
    this.head = Math.round(engine.random(1, 236));
    this.armor = Math.round(engine.random(1, 350));
    this.weapon = Math.round(engine.random(1, 89));
    this.strength = Math.round(engine.random(20, 100));
    this.endurance = Math.round(engine.random(20, 100));
    this.health = Math.round(engine.random(20, 100));
    this.speed = Math.round(engine.random(20, 100));
  }
}