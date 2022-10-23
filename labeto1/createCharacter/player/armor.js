"use strict";
export default function () {
  sketch.player.armor = {};
  sketch.player.armor.x = sketch.player.x - (sketch.player.width / 2);
  sketch.player.armor.y = sketch.player.y - (sketch.player.height / 2);
  sketch.player.armor.loadImage = callback => {
    sketch.engine.loadImage(`../img/player/armor/${sketch.player.statistics.armor}.png`, image => {
      sketch.player.armor.image = image.get(0, 0, 25, 45);
      callback();
    });
  };
  sketch.player.armor.draw = () => {
    sketch.utils.image(sketch.player.armor.image, sketch.player.armor.x, sketch.player.armor.y, sketch.player.width, sketch.player.height);
  };
}