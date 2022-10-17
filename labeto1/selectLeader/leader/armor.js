"use strict";
import Image from "../utils/image.js";
export default function () {
  window.leader.armor = {};
  window.leader.armor.x = window.leader.x - (window.leader.width / 2);
  window.leader.armor.y = window.leader.y - (window.leader.height / 2);
  window.leader.armor.loadImage = callback => {
    window.loadImage(`../img/player/armor/${window.leader.statistics.armor}.png`, img => {
      window.leader.armor.image = img.get(0, 0, 25, 45);
      callback();
    });
  }
  window.leader.armor.draw = () => {
    let { image, x, y } = window.leader.armor;
    let { width, height } = window.leader;
    Image(image, x, y, width, height);
  }
}