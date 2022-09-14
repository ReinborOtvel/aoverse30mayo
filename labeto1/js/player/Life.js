export default class {
  constructor() {
    this.percentage = 100;
    this.width = 50 / 100;
  }
  draw() {
    let width = this.width * this.percentage;
    utils.rect(30, 85, width, 5, "#EA2825");
  }
}