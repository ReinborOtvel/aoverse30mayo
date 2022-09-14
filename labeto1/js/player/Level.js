export default class {
  constructor(name) {
    this.name = name;
    this.level = 1;
  }
  draw() {
    let level = this.level;
    if (level < 10) {
      level = `00${level}`;
    } else if (level < 100) {
      level = `0${level}`;
    }
    let text = `${this.name} ${level}`;
    utils.text(text, 45, 45, 2, "#fff");
  }
}