"use strict";
export default function () {
  player.parts.weapon = {};
  player.parts.weapon.loadImage = callback => {
    window.loadImage(`../img/player/weapon/${player.statistics.weapon}.png`, img => {
      player.parts.weapon.images = {};
      let animations = ["down", "up", "left", "right"];
      let lengths = [6, 6, 5, 5];
      let width = 25;
      let height = 45;
      for (let v in animations) {
        let animation = animations[v];
        player.parts.weapon.images[animation] = [];
        let length = lengths[v];
        let y = v * height;
        for (let h = 0; h < length; h++) {
          let x = h * width;
          player.parts.weapon.images[animation][h] = img.get(x, y, width, height);
        }
      }
      callback();
    });
  }
  player.parts.weapon.draw = () => {
    Image(player.parts.weapon.images[player.parts.animation][player.parts.sprite], x, y, width, height);
  }
  player.parts.weapon.transform = () => {
    player.parts.weapon.x = player.x - (player.width / 2);
    player.parts.weapon.y = player.y - (player.height / 2);
  }
}