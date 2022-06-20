export default class LoadingBarImages {
  constructor() {
    this.widthPercentage = 640 / 100;
  }
  update() {
    window.Main.Ctx.fillStyle = "#283593";
    let percentageWidth = this.widthPercentage * window.Main.Images.loadPercentage;
    let percentageHeight = this.heightPercentage * window.Main.Images.loadPercentage;
    window.Main.Ctx.fillRect(640, 0, -percentageWidth, 360);

    window.Main.Ctx.fillStyle = "#fff";
    window.Main.Ctx.font = "100px Arial";
    window.Main.Ctx.fillText(window.Main.Images.loadPercentage, 250, 200);
  }
}