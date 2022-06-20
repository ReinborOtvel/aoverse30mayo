import Image from "../Animation/Image.js";
import Animation from "../Animation/Animation.js";
export default class EntityPart {
  constructor(src, image, Transform) {
    this.Image = new Image(src, image, Transform);
    this.Animation = new Animation(this.Image, 200);
    this.center();
  }
  center() {
    this.Image.Transform.x -= this.Image.Transform.width / 2;
    this.Image.Transform.y -= this.Image.Transform.height / 2;
    if (this.lateCenter !== undefined) {
      this.lateCenter();
    }
  }
  animations(names, maximumSprites, horizontal) {
    for (let index in names) {
      let name = names[index];
      let maximumSprite = maximumSprites[index];
      this.Animation.create(name, index, horizontal, maximumSprite);
    }
  }
}