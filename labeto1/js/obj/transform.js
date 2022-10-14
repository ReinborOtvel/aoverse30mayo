export default class {
  constructor(x, y, width, height) {
    this.x = new window.data.obj.percentageNumber(x);
    this.y = new window.data.obj.percentageNumber(y);
    this.width = new window.data.obj.percentageNumber(width);
    this.height = new window.data.obj.percentageNumber(height);
  }
  setTransform(x, y, width, height) {
    this.x.number = x;
    this.y.number = y;
    this.width.number = width;
    this.height.number = height;
  }
  get number() {
    return {
      x: this.x.number,
      y: this.y.number,
      width: this.width.number,
      height: this.height.number,
    }
  }
  get percentage() {
    return {
      x: this.x.width,
      y: this.y.height,
      width: this.width.width,
      height: this.height.height,
    }
  }
}