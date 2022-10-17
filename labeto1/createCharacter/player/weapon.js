"use strict";
import Image from "../utils/image.js";
export default function () {
  window.player.weapon = {};
  window.player.weapon.x = window.player.x - (window.player.width / 2);
  window.player.weapon.y = window.player.y - (window.player.height / 2);
  window.player.weapon.loadImage = callback => {
    window.loadImage(`../img/player/weapon/${window.player.statistics.weapon}.png`, img => {
      window.player.weapon.image = img.get(0, 0, 25, 45);
      callback();
    });
  };
  window.player.weapon.draw = () => {
    let { image, x, y } = window.player.weapon;
    let { width, height } = window.player;
    Image(image, x, y, width, height);
  };
}