import entityPart from "../entity/part.js";
export default class body extends entityPart {
  constructor(_transformJSON, _image, _index, _names, _maximumSprites) {
    let _transform = JSON.parse(JSON.stringify(_transformJSON));
    let _src = `./img/enemies/${_index}.png`;
    super(_transform, _image, _src);
    this.animations(_names, _maximumSprites, false);
  }
  setTransform(x, y) {
    this.setTransformPart(x, y);
  }
}