export default class Sprite {
  constructor(Animation, endTimer) {
    this.Animation = Animation;
    this.Image = this.Animation.Image;
    this.endTimer = endTimer;
    this.timer = 0;
    this.sprite = 0;
  }
  next(ms) {
    this.timer += ms;
    if (this.timer >= this.endTimer) {
      this.timer = 0;
      if (this.Animation.stop === false) {
        let { maximumSprite, horizontal } = this.Animation.animations[this.Animation.name];
        if (this.sprite >= maximumSprite) {
          this.sprite = 0;
        }
        if (horizontal === true) {
          this.Image.y = this.sprite * this.Image.height;
        } else {
          this.Image.x = this.sprite * this.Image.width;
        }
        this.sprite++;
      }
    }
  }
}