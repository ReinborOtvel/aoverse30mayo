import Image from "./image.js";
export default function AnimationsVertical(imageParameters, { width, height, parameters, readyAnimations }) {
  imageParameters.readyImage = image => {
    let animations = {};
    for (let name in parameters) {
      let { numberImages, indexY } = parameters[name];
      let y = height * indexY;
      for (let indexX = 0; indexX < numberImages; indexX++) {
        let x = width * indexX;
        animations[name][indexX] = image.get(x, y, width, height);
      }
    }
    readyAnimations(animations);
  };
  Image(imageParameters);
}