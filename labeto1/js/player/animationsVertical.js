"use strict";
export default function (src, { width, height, parameters, readyAnimations }) {
  engine.loadImage(src, image => {
    let animations = {};
    for (let name in parameters) {
      let { numberImages, indexY } = parameters[name];
      let y = height * indexY;
      animations[name] = [];
      for (let indexX = 0; indexX < numberImages; indexX++) {
        let x = width * indexX;
        animations[name][indexX] = image.get(x, y, width, height);
      }
    }
    readyAnimations(animations);
  });
}