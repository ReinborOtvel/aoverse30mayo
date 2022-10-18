"use strict";
import image from "../utils/image.js";
export default function () {
  leader.armor = {};
  const _armor = leader.armor;
  _armor.loadImage = _callback => {
    engine.loadImage(`../img/player/armor/${leader.statistics.armor}.png`, _image => {
      _armor.image = _image.get(0, 0, 25, 45);
      _callback();
    });
  };
  _armor.draw = () => {
    image(_armor.image, _armor.x, _armor.y, leader.width, leader.height);
  };
  _armor.x = leader.x - (leader.width / 2);
  _armor.y = leader.y - (leader.height / 2);
}