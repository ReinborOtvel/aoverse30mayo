import bodies from "./bodies.js";
import body from "./body.js";
export default function createBody(_index, _transformJSON) {
  let _transform = JSON.parse(JSON.stringify(_transformJSON));
  let { index, image, names, maximumSprite, } = bodies[_index];
  return new body(_transform, image, index, names, maximumSprite);
}