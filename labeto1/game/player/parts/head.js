"use strict";
export default function () {
  player.parts.head = {};
  player.parts.head.loadImage = callback => {
    console.log(player.statistics.head);
    window.loadImage(`../img/player/head/${player.statistics.head}.png`, img => {
      let animations = ["down", "right", "left", "up"];
      player.parts.head.images = [];
      let width = 17;
      for (let h in animations) {
        let animation = animations[h];
        let x = h * width;
        player.parts.head.images[animation] = img.get(x, 0, width, 17);
      }
      callback();
    });
  }
  player.parts.head.draw = () => {
    Image(player.parts.head.images[player.parts.animation], x, y, width, height);
  }
  player.parts.head.transform = () => {
    player.parts.head.width = player.width / 2;
    player.parts.head.height = player.height / 2;
    player.parts.head.x = player.x - (player.parts.head.width / 2);
    player.parts.head.y = player.y - player.parts.head.height;
  }
}