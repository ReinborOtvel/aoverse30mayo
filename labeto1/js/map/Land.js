import Element from "./Element.js";
export default class Land extends Element {
  constructor(index, h, v, width, height) {
    super(`./graphics/nature/land/${index}.png`, h, v, width, height);
  }
}