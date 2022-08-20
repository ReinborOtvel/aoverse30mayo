"use strict";
export default function AnimationsVertical(src, { width, height, parameters, readyAnimations }) {
  gameData.p5.loadImage(src, image => {
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