import Image from "../Animation/Image.js";
export default class Effect {
  constructor(transform, image, sprite) {
    this.src = "./img/effect/${index}.png";
    this.Image = new Image(undefined, image, transform);
    this.sprite = sprite;
    this.timer = 0;
    this.destroy = false;
  }
  nextSprite() {
    if (this.sprite.index < this.sprite.maximum) {
      let src = this.src.replace("${index}", this.sprite.index);
      this.Image.setSrc(src);
      this.sprite.index++;
    } else {
      this.destroy = true;
    }
  }
  update() {
    this.Image.update();
    if (this.timer <= 0) {
      this.timer = this.sprite.timeEnd;
      this.nextSprite();
    } else {
      this.timer -= window.Main.ms;
    }
  }
}