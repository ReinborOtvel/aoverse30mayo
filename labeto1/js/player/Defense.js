export default class {
  constructor() {
    this.defense = 3;
  }
  draw() {
    let x = 80;
    for (let v = 0; v < 6; v++) {
      let y = v * 10;
      y += 28;
      utils.rect(x, y, 7, 8, "#000");
      if (v <= this.defense) {
        utils.rect(x, y, 7, 8, "#9EABB6");
      }
    }
  }
}