"use strict";
import Image from "../utils/image.js";
export default function () {
  window.leader.head = {};
  window.leader.head.width = window.leader.width / 2;
  window.leader.head.height = window.leader.height / 2;
  window.leader.head.x = window.leader.x - (window.leader.head.width / 2);
  window.leader.head.y = window.leader.y - window.leader.head.height;
  window.leader.head.loadImage = callback => {
    window.loadImage(`../img/player/head/${window.leader.statistics.head}.png`, img => {
      window.leader.head.image = img.get(0, 0, 17, 17);
      callback();
    });
  };
  window.leader.head.draw = () => {
    let { image, x, y, width, height } = window.leader.head;
    Image(image, x, y, width, height);
  };
}