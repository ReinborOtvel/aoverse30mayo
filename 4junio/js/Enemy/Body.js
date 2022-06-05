import EntityPart from "../Entity/Part.js";
export default class Body extends EntityPart {
  constructor(parameters, Transform) {
    super(parameters.src, parameters.image, Transform);
    this.parameters = parameters;
    this.animations(this.parameters.nameAnimations, this.parameters.maximumSprites, true);
  }
}