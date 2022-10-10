"use strict";
import Range from "../Range.js";
export default function () {
  let name = "";
  for (let i = 0; i <= 5; i++) {
    let characters = "aeiou";
    if (i % 2 == 0) {
      characters = "qwrtypsdfghjklzxcvbnm";
    }
    name += window.engine.random([...characters]);
  }
  return {
    name,
    head: Range(1, 236),
    armor: Range(1, 350),
    weapon: Range(1, 89),
    strength: Range(20, 100),
    endurance: Range(20, 100),
    health: Range(20, 100),
    speed: Range(20, 100),
  };
}