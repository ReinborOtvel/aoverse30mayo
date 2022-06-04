import EntityPart from "../Entity/Part.js";
export default class Head extends EntityPart {
  constructor(transform, index) {
    transform = JSON.parse(JSON.stringify(transform));
    let src = `./img/head/${index}.png`;
    let image = { x: 0, y: 0, width: 17, height: 17, };
    super(src, image, transform);
    this.animations(["down", "right", "left", "up"], [0, 0, 0, 0], true);
  }
  lateCenter() {
    this.Image.transform.y -= this.Image.transform.height / 2;
  }
}