"use strict";
import image from "../../utils/image.js";
export default function () {
  window.player.parts.weapon = {};
  window.player.parts.weapon.loadImage = callback => {
    window.engine.loadImage(`../img/player/weapon/${window.player.statistics.weapon}.png`, img => {
      window.player.parts.weapon.images = {};
      let animations = ["down", "up", "left", "right"];
      let lengths = [6, 6, 5, 5];
      let width = 25;
      let height = 45;
      for (let v in animations) {
        let animation = animations[v];
        window.player.parts.weapon.images[animation] = [];
        let length = lengths[v];
        let y = v * height;
        for (let h = 0; h < length; h++) {
          let x = h * width;
          window.player.parts.weapon.images[animation][h] = img.get(x, y, width, height);
        }
      }
      callback();
    });
  }
  window.player.parts.weapon.draw = () => {
    image(window.player.parts.weapon.images[window.player.parts.animation][window.player.parts.sprite], window.player.parts.weapon.x, window.player.parts.weapon.y, window.player.width, window.player.height);
  }
  window.player.parts.weapon.transform = () => {
    window.player.parts.weapon.x = window.player.x - (window.player.width / 2);
    window.player.parts.weapon.y = window.player.y - (window.player.height / 2);
  }
}