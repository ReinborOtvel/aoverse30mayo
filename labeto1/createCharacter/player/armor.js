"use strict";
import Image from "../utils/image.js";
export default function () {
  window.player.armor = {};
  window.player.armor.x = window.player.x - (window.player.width / 2);
  window.player.armor.y = window.player.y - (window.player.height / 2);
  window.player.armor.loadImage = callback => {
    window.engine.loadImage(`../img/player/armor/${window.player.statistics.armor}.png`, img => {
      window.player.armor.image = img.get(0, 0, 25, 45);
      callback();
    });
  };
  window.player.armor.draw = () => {
    let { image, x, y } = window.player.armor;
    let { width, height } = window.player;
    Image(image, x, y, width, height);
  };
}