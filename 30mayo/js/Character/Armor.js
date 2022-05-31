import EntityPart from "../Entity/Part.js";
export default class Armor extends EntityPart {
  constructor(transform, index) {
    transform = JSON.parse(JSON.stringify(transform));
    let src = `./img/armor/${index}.png`;
    let image = { x: 0, y: 0, width: 25, height: 45, };
    super(src, image, transform);
    this.animations(["down", "up", "left", "right"], [6, 6, 5, 5], false);
  }
}