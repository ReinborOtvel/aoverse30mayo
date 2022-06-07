import EntityPart from "../Entity/Part.js";
export default class Weapon extends EntityPart {
  constructor(Transform, index) {
    let src = `./img/weapon/${index}.png`;
    let image = { x: 0, y: 0, width: 25, height: 45, };
    super(src, image, Transform);
    this.animations(["down", "up", "left", "right"], [6, 6, 5, 5], false);
  }
}