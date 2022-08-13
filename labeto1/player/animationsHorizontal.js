import Image from "./image.js";
export default function AnimationsHorizontal(imageParameters, { width, height, parameters, readyAnimations }) {
  imageParameters.readyImage = image => {
    let animations = {};
    for (let name in parameters) {
      let { numberImages, indexX } = parameters[name];
      let x = width * indexX;
      for (let indexY = 0; indexY < numberImages; indexY++) {
        let y = height * indexY;
        animations[name][indexY] = image.get(x, y, width, height);
      }
    }
    readyAnimations(animations);
  };
  Image(imageParameters);
}