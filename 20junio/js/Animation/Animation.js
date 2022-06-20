import Sprite from "./Sprite.js";
export default class Animation {
  constructor(Image, endTimer) {
    this.Image = Image;
    this.animations = {};
    this.name = 'still';
    this.create(this.name, 0, true, 0);
    this.Sprite = new Sprite(this, endTimer);
  }
  create(name, court, horizontal, maximumSprite) {
    this.animations[name] = { court, horizontal, maximumSprite };
  }
  change(name) {
    if (this.name !== name && name !== undefined) {
      this.name = name;
      let { court, horizontal } = this.animations[this.name];
      this.Sprite.sprite = 0;
      if (horizontal === true) {
        this.Image.x = court * this.Image.width;
      } else {
        this.Image.y = court * this.Image.height;
      }
    }
  }
}