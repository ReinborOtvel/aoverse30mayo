"use strict";
export default function () {
  sketch.player.weapon = {};
  sketch.player.weapon.x = sketch.player.x - (sketch.player.width / 2);
  sketch.player.weapon.y = sketch.player.y - (sketch.player.height / 2);
  sketch.player.weapon.loadImage = callback => {
    sketch.engine.loadImage(`../img/player/weapon/${sketch.player.statistics.weapon}.png`, image => {
      sketch.player.weapon.image = image.get(0, 0, 25, 45);
      callback();
    });
  };
  sketch.player.weapon.draw = () => {
    sketch.utils.image(sketch.player.weapon.image, sketch.player.weapon.x, sketch.player.weapon.y, sketch.player.width, sketch.player.height);
  };
};