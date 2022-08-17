"use strict";
import AnimationsVertical from "./animationsVertical.js";
export default function PlayerWeapon(index, animationParameters) {
  let src = `../Graficos/player/weapon/${index}.png`;
  animationParameters.width = 25;
  animationParameters.height = 45;
  animationParameters.parameters = {
    down: { numberImages: 6, indexY: 0 },
    up: { numberImages: 6, indexY: 1 },
    left: { numberImages: 5, indexY: 2 },
    right: { numberImages: 5, indexY: 3 },
  };
  AnimationsVertical(src, animationParameters);
}