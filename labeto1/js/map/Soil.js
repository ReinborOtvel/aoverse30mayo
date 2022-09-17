export default class {
  constructor(map) {
    this.map = map;
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
    this.width = 10;
    this.height = 10;
  }
  draw() {
    for (let h in this.matrix) {
      for (let v in this.matrix[h]) {
        let index = this.matrix[h][v];
        if (index == -1) continue;
        let x = this.width * h;
        let y = this.height * v;
        utils.image(this.map.imgs[index], x, y, this.width, this.height);
      }
    }
  }
}