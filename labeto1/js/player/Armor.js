export default class {
  constructor(transform, index, callback) {
    this.animation = "down";
    this.canNextSprite = false;
    this.sprite = 0;
    this.setTransform(transform);
    this.imgs = { down: [], up: [], left: [], right: [] };
    let url = `./Graficos/player/armor/${index}.png`;
    engine.loadImage(url, img => {
      this.loadImg(img, callback);
    });
    setInterval(() => {
      this.nextSprite();
    }, 200);
  }
  newAnimation(name) {
    if (this.animation != name) {
      this.sprite = 0;
      this.animation = name;
    }
  }
  nextSprite() {
    if (data.canDraw == true && this.canNextSprite == true) {
      let length;
      switch (this.animation) {
        case "down":
        case "up":
          length = 5;
          break;
        case "left":
        case "right":
          length = 4;
          break;
      }
      if (this.sprite < length) {
        this.sprite++;
      } else {
        this.sprite = 0;
      }
    }
  }
  loadImg(img, callback) {
    let width = 25;
    let height = 45;
    for (let i = 0; i < 6; i++) {
      let x = i * width;
      this.imgs.down[i] = img.get(x, 0, width, height);
      this.imgs.up[i] = img.get(x, height, width, height);
      if (i < 5) {
        this.imgs.left[i] = img.get(x, 2 * height, width, height);
        this.imgs.right[i] = img.get(x, 3 * height, width, height);
      }
    }
    callback();
  }
  setTransform({ x, y, width, height }) {
    this.transform = { x, y, width, height };
    this.x -= width / 2;
    this.y -= height / 2;
  }
  draw() {
    let { x, y, width, height } = this.transform;
    let img = this.imgs[this.animation][this.sprite];
    if (img != undefined) {
      engine.image(img, x, y, width, height);
    } else {
      console.log(this.animation, this.sprite);
    }
  }
}