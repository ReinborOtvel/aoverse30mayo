export default class {
  constructor(map) {
    this.map = map;
    this.matrix = [
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, 1, -1, -1, -1, -1, -1, 1, -1, -1],
      [-1, -1, -1, -1, 1, -1, -1, -1, -1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, 1, -1, -1, -1, -1, -1, 1, -1],
    ];
    this.width = 10;
    this.height = 20;
  }
  collision(x, y) {
    x = parseInt(x / this.width);
    y = parseInt(y / this.height);
    let index = this.matrix[y][x] != -1;
    return index;
  }
  draw() {
    for (let v in this.matrix) {
      for (let h in this.matrix[v]) {
        let index = this.matrix[v][h];
        if (index == -1) continue;
        let x = this.width * h;
        let y = this.height * v;
        utils.image(this.map.imgs[index], x, y, this.width, this.height);
      }
    }
  }
}