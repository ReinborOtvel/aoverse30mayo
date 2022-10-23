"use strict";
export default function () {
  return {
    name: "reinbor",
    head: Math.round(window.engine.random(1, 236)),
    armor: Math.round(window.engine.random(1, 350)),
    weapon: Math.round(window.engine.random(1, 89)),
    strength: Math.round(window.engine.random(20, 100)),
    endurance: Math.round(window.engine.random(20, 100)),
    health: Math.round(window.engine.random(20, 100)),
    speed: Math.round(window.engine.random(20, 100)),
  };
};