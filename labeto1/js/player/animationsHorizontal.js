"use strict";
export default function (src, { width, height, parameters, readyAnimations }) {
  gameData.p5.loadImage(src, image => {
    let animations = {};
    for (let name in parameters) {
      let { numberImages, indexX } = parameters[name];
      let x = width * indexX;
      animations[name] = [];
      for (let indexY = 0; indexY < numberImages; indexY++) {
        let y = height * indexY;
        animations[name][indexY] = image.get(x, y, width, height);
      }
    }
    readyAnimations(animations);
  });
}