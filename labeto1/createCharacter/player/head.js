"use strict";
export default function () {
  sketch.player.head = {};
  sketch.player.head.width = sketch.player.width / 2;
  sketch.player.head.height = sketch.player.height / 2;
  sketch.player.head.x = sketch.player.x - (sketch.player.head.width / 2);
  sketch.player.head.y = sketch.player.y - sketch.player.head.height;
  sketch.player.head.loadImage = callback => {
    sketch.engine.loadImage(`../img/player/head/${sketch.player.statistics.head}.png`, image => {
      sketch.player.head.image = image.get(0, 0, 17, 17);
      callback();
    });
  };
  sketch.player.head.draw = () => {
    sketch.utils.image(sketch.player.head.image, sketch.player.head.x, sketch.player.head.y, sketch.player.head.width, sketch.player.head.height);
  };
};