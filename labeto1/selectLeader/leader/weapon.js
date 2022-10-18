"use strict";
import Image from "../utils/image.js";
export default function () {
  window.leader.weapon = {};
  window.leader.weapon.loadImage = callback => {
    window.engine.loadImage(`../img/player/weapon/${window.leader.statistics.weapon}.png`, img => {
      window.leader.weapon.image = img.get(0, 0, 25, 45);
      callback();
    });
  };
  window.leader.weapon.draw = () => {
    let { image, x, y } = window.leader.weapon;
    let { width, height } = window.leader;
    Image(image, x, y, width, height);
  };
  window.leader.weapon.x = window.leader.x - (window.leader.width / 2);
  window.leader.weapon.y = window.leader.y - (window.leader.height / 2);
}