export default class LoadingBarImages {
  constructor() {
    this.widthPercentage = 640 / 100;
  }
  update() {
    window.main.ctx.fillStyle = "#283593";
    let percentageWidth = this.widthPercentage * window.main.images.loadPercentage;
    window.main.ctx.fillRect(640, 0, -percentageWidth, 360);

    window.main.ctx.fillStyle = "#fff";
    window.main.ctx.font = "100px Arial";
    window.main.ctx.fillText(window.main.images.loadPercentage, 250, 200);
  }
}