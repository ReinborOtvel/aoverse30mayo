export default class LoadingScreen {
  constructor() {
    this.image = { x: 0, y: 0 };
    this.transform = {
      x: 0, y: 0,
      width: window.Main.Canvas.width,
      height: window.Main.Canvas.height,
    };
    this.url = "./img/loadingScreen/${index}.png";
    this.index = 0;
    this.maximum = 13;
    this.change();
  }
  stop() {
    this.index = this.maximum + 1;
  }
  change() {
    if (this.index <= this.maximum) {
      let urlIndex = this.url.replace("${index}", this.index);
      this.src = window.Main.Images.get(urlIndex);
      this.index++;
      setTimeout(() => {
        this.change();
      }, 200);
    }
  }
  draw() {
    this.image.width = this.src.width;
    this.image.height = this.src.height;
    window.Main.Draw.image(this.src, this.image, this.transform);
  }
}