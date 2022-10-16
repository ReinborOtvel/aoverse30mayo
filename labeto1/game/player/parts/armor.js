"use strict";
import image from "../../utils/image.js";
export default function () {
  window.player.parts.armor = {};
  window.player.parts.armor.loadImage = callback => {
    window.engine.loadImage(`../img/player/armor/${window.player.statistics.armor}.png`, img => {
      window.player.parts.armor.images = {};
      let animations = ["down", "up", "left", "right"];
      let lengths = [6, 6, 5, 5];
      let width = 25;
      let height = 45;
      for (let v in animations) {
        let animation = animations[v];
        window.player.parts.armor.images[animation] = [];
        let length = lengths[v];
        let y = v * height;
        for (let h = 0; h < length; h++) {
          let x = h * width;
          window.player.parts.armor.images[animation][h] = img.get(x, y, width, height);
        }
      }
      callback();
    });
  }
  window.player.parts.armor.draw = () => {
    image(window.player.parts.armor.images[window.player.parts.animation][window.player.parts.sprite], window.player.parts.armor.x, window.player.parts.armor.y, window.player.width, window.player.height);
  }
  window.player.parts.armor.transform = () => {
    window.player.parts.armor.x = window.player.x - (window.player.width / 2);
    window.player.parts.armor.y = window.player.y - (window.player.height / 2);
  }
}