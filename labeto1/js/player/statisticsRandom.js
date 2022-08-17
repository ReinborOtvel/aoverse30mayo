"use strict";
export default function StatisticsRandom() {
  let name = "";
  for (let i = 0; i <= 5; i++) {
    let characters = "aeiou";
    if (i % 2 == 0) {
      characters = "qwrtypsdfghjklzxcvbnm";
    }
    name += gameData.p5.random(characters);
  }
  let range = (a, b) => Math.round(gameData.p5.random(a, b));
  return {
    name,
    head: range(1, 236),
    armor: range(1, 373),
    weapon: range(1, 130),
    strength: range(20, 100),
    endurance: range(20, 100),
    health: range(20, 100),
    speed: range(20, 100),
  }
}