"use strict";
import image from "../../utils/image.js";
export default function () {
  window.player.parts.head = {};
  window.player.parts.head.loadImage = callback => {
    window.engine.loadImage(`../img/player/head/${window.player.statistics.head}.png`, img => {
      let animations = ["down", "right", "left", "up"];
      window.player.parts.head.images = [];
      let width = 17;
      for (let h in animations) {
        let animation = animations[h];
        let x = h * width;
        window.player.parts.head.images[animation] = img.get(x, 0, width, 17);
      }
      callback();
    });
  }
  window.player.parts.head.draw = () => {
    image(window.player.parts.head.images[window.player.parts.animation], window.player.parts.head.x, window.player.parts.head.y, window.player.parts.head.width, window.player.parts.head.height);
  }
  window.player.parts.head.transform = () => {
    window.player.parts.head.width = window.player.width / 2;
    window.player.parts.head.height = window.player.height / 2;
    window.player.parts.head.x = window.player.x - (window.player.parts.head.width / 2);
    window.player.parts.head.y = window.player.y - window.player.parts.head.height;
  }
}