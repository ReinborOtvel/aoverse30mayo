import Entity from "../Entity/Entity.js";
import EntityPart from "../Entity/Part.js";
import Parameters from "./Parameters.js";
export default class Enemy {
  constructor(transform, Boxes, speed, index) {
    let parameters = Parameters(index);
    transform = JSON.parse(JSON.stringify(transform));
    let Parts = [
      new EntityPart(
        `img/enemy/${index}.png`,
        parameters.image,
        transform
      ),
    ];
    Parts[0].animations(parameters.nameAnimations, parameters.maximumSprites, true);
    this.Entity = new Entity(Boxes, Parts, speed);
    this.Entity.setTransform(transform.x, transform.y);
  }
}