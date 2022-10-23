"use strict";
import image from "../utils/image.js";
export default function () {
  leader.head = {};
  const _head = leader.head;
  _head.loadImage = _callback => {
    engine.loadImage(`../img/player/head/${leader.statistics.head}.png`, _image => {
      _head.image = _image.get(0, 0, 17, 17);
      _callback();
    });
  };
  _head.draw = () => {
    image(_head.image, _head.x, _head.y, _head.width, _head.height);
  };
  _head.width = leader.width / 2;
  _head.height = leader.height / 2;
  _head.x = leader.x - (_head.width / 2);
  _head.y = leader.y - _head.height;
};