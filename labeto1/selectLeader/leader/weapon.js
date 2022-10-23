"use strict";
import image from "../utils/image.js";
export default function () {
  leader.weapon = {};
  const _weapon = leader.weapon;
  _weapon.loadImage = _callback => {
    engine.loadImage(`../img/player/weapon/${leader.statistics.weapon}.png`, _image => {
      _weapon.image = _image.get(0, 0, 25, 45);
      _callback();
    });
  };
  _weapon.draw = () => {
    image(_weapon.image, _weapon.x, _weapon.y, leader.width, leader.height);
  };
  _weapon.x = leader.x - (leader.width / 2);
  _weapon.y = leader.y - (leader.height / 2);
};