"use strict";
export default function () {
  player.parts.armor = {};
  player.parts.armor.loadImage = callback => {
    window.loadImage(`../img/player/armor/${player.statistics.armor}.png`, img => {
      player.parts.armor.images = {};
      let animations = ["down", "up", "left", "right"];
      let lengths = [6, 6, 5, 5];
      let width = 25;
      let height = 45;
      for (let v in animations) {
        let animation = animations[v];
        player.parts.armor.images[animation] = [];
        let length = lengths[v];
        let y = v * height;
        for (let h = 0; h < length; h++) {
          let x = h * width;
          player.parts.armor.images[animation][h] = img.get(x, y, width, height);
        }
      }
      callback();
    });
  }
  player.parts.armor.draw = () => {
    Image(player.parts.armor.images[player.parts.animation][player.parts.sprite], x, y, width, height);
  }
  player.parts.armor.transform = () => {
    player.parts.armor.x = player.x - (player.width / 2);
    player.parts.armor.y = player.y - (player.height / 2);
  }
}