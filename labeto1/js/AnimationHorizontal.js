import Image from "./Image.js";
export default class extends Image {
  constructor(xT, yT, widthT, heightT, url, widthS, heightS, animations, lengths) {
    super(xT, yT, widthT, heightT, url, () => {
      this.animations = {};
      for (let h in animations) {
        let x = h * widthS;
        let animation = animations[h];
        let length = lengths[h];
        this.animations[animation] = [];
        for (let v = 0; v < length; v++) {
          let y = v * heightS;
          this.animations[animation][v] = this.image.get(x, y, widthS, heightS);
        }
      }
    });
  }
  draw(animation, sprite) {
    let image = this.animations[animation][sprite];
    let { x, y, width, height } = this.transform.percentage;
    window.data.engine.noSmooth();
    window.data.engine.image(image, x, y, width, height);
  }
}