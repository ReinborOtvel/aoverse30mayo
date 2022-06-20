import EntityPart from "../Entity/Part.js";
export default class Body extends EntityPart {
  constructor(parameters, Transform) {
    super(parameters.src, parameters.image, Transform);
    this.animations(parameters.nameAnimations, parameters.maximumSprites, false);
  }
}