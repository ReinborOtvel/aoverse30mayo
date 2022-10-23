"use strict";
import image from "../../utils/image.js";
export default function () {
  const _parts = player.parts;
  _parts.head = {};
  const _head = _parts.head;
  _head.loadImage = _callback => {
    engine.loadImage(`../img/player/head/${player.statistics.head}.png`, _image => {
      _head.images = [];
      const _animations = ["down", "right", "left", "up"];
      const _width = 17;
      for (const _horizontal in _animations) {
        const _animation = _animations[_horizontal];
        const _x = _horizontal * _width;
        _head.images[_animation] = _image.get(_x, 0, _width, 17);
      };
      _callback();
    });
  };
  _head.draw = () => {
    image(_head.images[_parts.animation], _head.x, _head.y, _head.width, _head.height);
  }
  _head.transform = () => {
    _head.width = player.width / 2;
    _head.height = player.height / 2;
    _head.x = player.x - (_head.width / 2);
    _head.y = player.y - _head.height;
  }
}