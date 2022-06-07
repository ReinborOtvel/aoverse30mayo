export default class Sprite {
  constructor(Animation, endTimer) {
    this.Animation = Animation;
    this.endTimer = endTimer;
    this.stop = false;
    this.timer = 0;
    this.sprite = 0;
  }
  next(ms) {
    this.timer += ms;
    if (this.timer >= this.endTimer) {
      this.timer = 0;
      if (this.stop === false) {
        let { maximumSprite, horizontal } = this.Animation.animations[this.Animation.name];
        if (this.sprite >= maximumSprite) {
          this.sprite = 0;
        }
        if (horizontal === true) {
          this.Animation.Image.y = this.sprite * this.Animation.Image.height;
        } else {
          this.Animation.Image.x = this.sprite * this.Animation.Image.width;
        }
        this.sprite++;
      }
    }
  }
}