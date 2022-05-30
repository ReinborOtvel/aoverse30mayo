import Image from "../Animation/Image.js";
import Animation from "../Animation/Animation.js";
export default class EntityPart {
  constructor(src, image, transform) {
    this.image = JSON.parse(JSON.stringify(image));
    this.transform = JSON.parse(JSON.stringify(transform));
    this.Image = new Image(src, this.image, this.transform);
    this.Animation = new Animation(this.Image, 200);
    this.center();
  }
  center() {
    this.Image.transform.x -= this.Image.transform.width / 2;
    this.Image.transform.y -= this.Image.transform.height / 2;
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