"use strict";
import image from "../../utils/image.js";
export default function () {
  player.parts.weapon = {};
  const _weapon = player.parts.weapon;
  _weapon.loadImage = _callback => {
    engine.loadImage(`../img/player/weapon/${player.statistics.weapon}.png`, _image => {
      _weapon.images = {};
      const _animations = ["down", "up", "left", "right"];
      const _lengths = [6, 6, 5, 5];
      const _width = 25;
      const _height = 45;
      for (const _vertical in _animations) {
        const _animation = _animations[v];
        _weapon.images[_animation] = [];
        const _length = _lengths[v];
        const _y = _vertical * _height;
        for (let _horizontal = 0; _horizontal < _length; _horizontal++) {
          const _x = _horizontal * _width;
          _weapon.images[_animation][_horizontal] = _image.get(_x, _y, _width, _height);
        };
      };
      _callback();
    });
  };
  _weapon.draw = () => {
    image(_weapon.images[player.parts.animation][player.parts.sprite], _weapon.x, _weapon.y, player.width, player.height);
  };
  _weapon.transform = () => {
    _weapon.x = player.x - (player.width / 2);
    _weapon.y = player.y - (player.height / 2);
  };
};