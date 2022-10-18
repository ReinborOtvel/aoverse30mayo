"use strict";
import Image from "../utils/image.js";
export default function () {
  window.player.head = {};
  window.player.head.width = window.player.width / 2;
  window.player.head.height = window.player.height / 2;
  window.player.head.x = window.player.x - (window.player.head.width / 2);
  window.player.head.y = window.player.y - window.player.head.height;
  window.player.head.loadImage = callback => {
    window.engine.loadImage(`../img/player/head/${window.player.statistics.head}.png`, img => {
      window.player.head.image = img.get(0, 0, 17, 17);
      callback();
    });
  }
  window.player.head.draw = () => {
    let { image, x, y, width, height } = window.player.head;
    Image(image, x, y, width, height);
  }
}