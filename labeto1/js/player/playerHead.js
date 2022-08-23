
"use strict";
import AnimationsHorizontal from "./animationsHorizontal.js";
export default function (index, animationParameters) {
  let src = `../Graficos/player/head/${index}.png`;
  animationParameters.width = 17;
  animationParameters.height = 17;
  animationParameters.parameters = {
    down: { numberImages: 1, indexX: 0 },
    right: { numberImages: 1, indexX: 1 },
    left: { numberImages: 1, indexX: 2 },
    up: { numberImages: 1, indexX: 3 },
  };
  AnimationsHorizontal(src, animationParameters);
}