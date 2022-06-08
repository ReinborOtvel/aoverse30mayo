import EntityPart from "../Entity/Part.js";
export default class Head extends EntityPart {
  constructor(Transform, index) {
    let src = `./img/head/${index}.png`;
    let image = { x: 0, y: 0, width: 17, height: 17, };
    super(src, image, Transform);
    this.animations(["down", "right", "left", "up"], [0, 0, 0, 0], true);
  }
  lateCenter() {
    this.Image.Transform.y -= this.Image.Transform.height / 2;
  }
}