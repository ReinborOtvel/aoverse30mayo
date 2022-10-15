"use strict";
let transaction = false;
let player = {};
function percentage(size, number) {
  let one = size / 100;
  return one * number;
}
function randomName() {
  let name = "";
  for (let i = 0; i <= 5; i++) {
    let characters = "aeiou";
    if (i % 2 == 0) characters = "qwrtypsdfghjklzxcvbnm";
    name += random([...characters]);
  }
}
function randomStatistics() {
  return {
    name: randomName(),
    head: Math.round(random(1, 236)),
    armor: Math.round(random(1, 350)),
    weapon: Math.round(random(1, 89)),
    strength: Math.round(random(20, 100)),
    endurance: Math.round(random(20, 100)),
    health: Math.round(random(20, 100)),
    speed: Math.round(random(20, 100)),
  };
}
function setup() {
  createCanvas(852, 480);
  frameRate(15);
  player.x = percentage(width, 70);
  player.y = percentage(height, 50);
  player.width = percentage(width, 40);
  player.height = percentage(height, 80);
  player.statistics = randomStatistics();
  player.head = {};
  player.armor = {};
  player.weapon = {};
}
function draw() {
  fill("#fff");
  rect(0, 0, width, height);
}