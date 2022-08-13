
import AnimationsVertical from "./animationsVertical.js";
export default function PlayerWeapon(imageParameters, animationParameters) {
  imageParameters.src = `../Graficos/${imageParameters.index}.png`;
  animationParameters.width = 25;
  animationParameters.height = 45;
  animationParameters.parameters = {
    down: { numberImages: 6, indexY: 0 },
    up: { numberImages: 6, indexY: 1 },
    left: { numberImages: 5, indexY: 2 },
    right: { numberImages: 5, indexY: 3 },
  };
  AnimationsVertical(imageParameters, animationParameters);
}