export default class {
  constructor(transform, index, fullLoad) {
    this.transform = {};
    this.transform.x = transform.x;
    this.transform.y = transform.y;
    this.transform.width = transform.width;
    this.transform.height = transform.height;
    this.index = index;
    this.fullLoad = fullLoad;
    this.animation = "down";
    this.canNextSprite = false;
    this.sprite = 0;
    this.setTransform(this.transform.x, this.transform.y, this.transform.width, this.transform.height);
    this.setImgs();
    setInterval(() => {
      this.nextSprite();
    }, 200);
  }
  setImgs() {
    this.imgs = { down: [], up: [], left: [], right: [] };
    let url = `./Graficos/player/weapon/${this.index}.png`;
    engine.loadImage(url, img => {
      this.loadImg(img);
    });
  }
  loadImg(img) {
    let width = 25;
    let height = 45;
    let animations = ["down", "up", "left", "right"];
    let lengths = [6, 6, 5, 5];
    for (let vertical in animations) {
      let animation = animations[vertical];
      let length = lengths[vertical];
      let y = vertical * height;
      for (let horizontal = 0; horizontal < length; horizontal++) {
        let x = horizontal * width;
        this.imgs[animation][horizontal] = img.get(x, y, width, height);
      }
    }
    this.fullLoad();
  }
  setTransform(x, y, width, height) {
    this.transform.x = x;
    this.transform.y = y;
    this.transform.width = width;
    this.transform.height = height;
    this.transform.x -= this.transform.width / 2;
    this.transform.y -= this.transform.height / 2;
  }
  draw() {
    engine.image(this.imgs[this.animation][this.sprite], this.transform.x, this.transform.y, this.transform.width, this.transform.height);
  }
  setAnimation(name) {
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
  setCanNextSprite(canNextSprite) {
    this.canNextSprite = canNextSprite;
  }
}