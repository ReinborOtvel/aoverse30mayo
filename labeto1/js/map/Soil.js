export default class {
  constructor(fullLoad) {
    this.fullLoad = fullLoad;
    this.matrix = [
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
    ];
    this.distanceH = 10;
    this.distanceV = 10;
    this.width = 10;
    this.height = 10;
    this.imgs();
  }
  imgs() {
    this.imgs = {};
    this.imgs[579] = engine.loadImage("./graphics/nature/579.png");
    this.fullLoad();
  }
  draw() {
    for (let h in this.matrix) {
      for (let v in this.matrix[h]) {
        let index = this.matrix[h][v];
        if (index == -1) continue;
        let x = this.distanceH * h;
        let y = this.distanceV * v;
        utils.image(this.imgs[index], x, y, this.width, this.height);
      }
    }
  }
}