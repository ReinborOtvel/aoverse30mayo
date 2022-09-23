"use strict";
export default function () {
  let name = "";
  for (let i = 0; i <= 5; i++) {
    let characters = "aeiou";
    if (i % 2 == 0) {
      characters = "qwrtypsdfghjklzxcvbnm";
    }
    name += engine.random([...characters]);
  }
  return {
    name,
    head: utils.range(1, 236),
    armor: utils.range(1, 350),
    weapon: utils.range(1, 89),
    strength: utils.range(20, 100),
    endurance: utils.range(20, 100),
    health: utils.range(20, 100),
    speed: utils.range(20, 100),
  };
}