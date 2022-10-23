"use strict";
import image from "../../utils/image.js";
export default function () {
  player.parts.armor = {};
  const _armor = player.parts.armor;
  _armor.loadImage = _callback => {
    engine.loadImage(`../img/player/armor/${player.statistics.armor}.png`, _image => {
      _armor.images = {};
      const _animations = ["down", "up", "left", "right"];
      const _lengths = [6, 6, 5, 5];
      const _width = 25;
      const _height = 45;
      for (const _vertical in _animations) {
        const _animation = _animations[_vertical];
        _armor.images[_animation] = [];
        const _length = _lengths[_vertical];
        const _y = _vertical * _height;
        for (let _horizontal = 0; _horizontal < _length; _horizontal++) {
          const _x = _horizontal * _width;
          _armor.images[_animation][_horizontal] = _image.get(_x, _y, _width, _height);
        };
      };
      _callback();
    });
  };
  _armor.draw = () => {
    image(_armor.images[player.parts.animation][player.parts.sprite], _armor.x, _armor.y, player.width, player.height);
  };
  _armor.transform = () => {
    _armor.x = player.x - (player.width / 2);
    _armor.y = player.y - (player.height / 2);
  };
};