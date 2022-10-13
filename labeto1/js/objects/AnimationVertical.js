import Image from "./Image.js";
export default class extends Image {
  constructor(xT, yT, widthT, heightT, url, widthS, heightS, animations, lengths) {
    super(xT, yT, widthT, heightT, url, () => {
      this.animations = {};
      for (let v in animations) {
        let y = v * heightS;
        let animation = animations[v];
        let length = lengths[v];
        this.animations[animation] = [];
        for (let h = 0; h < length; h++) {
          let x = h * widthS;
          this.animations[animation][h] = this.image.get(x, y, widthS, heightS);
        }
      }
      this.canDraw = true;
    });
  }
  draw(animation, sprite) {
    if (!this.canDraw) return;
    let image = this.animations[animation][sprite];
    let { x, y, width, height } = this.transform.percentage;
    window.data.engine.noSmooth();
    window.data.engine.image(image, x, y, width, height);
  }
}