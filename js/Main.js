import Images from "./Images.js";
import Tools from "./Tools.js";
import Draw from "./Draw.js";
import Text from "./Text.js";
import Click from "./Click.js";
import LoadingScreen from "./LoadingScreen.js";
import Database from "./Database.js";
export default class Main {
  start() {
    window.addEventListener("resize", () => {
      window.location.reload();
    });
    this.Canvas = document.getElementById("canvas");
    this.size();
    this.Ctx = this.Canvas.getContext("2d");
    this.Images = new Images();
    this.Tools = new Tools();
    this.Draw = new Draw();
    this.Text = new Text();
    this.Click = new Click();
    this.Page = new LoadingScreen();
    this.Database = new Database();
    this.startDrawing();
  }
  size() {
    let height = window.innerHeight;
    let width = parseInt(height * 2);
    if (width > window.innerWidth) {
      width = window.innerWidth;
      height = parseInt(width / 2);
    }
    this.Canvas.style.width = `${width}px`;
    this.Canvas.style.height = `${height}px`;
  }
  startDrawing() {
    let fps = 30;
    let ms = 1000 / fps;
    let deltaTime = ms / 100;
    setInterval(() => {
      window.Main.Draw.erase();
      window.Main.Page.draw(ms, deltaTime);
    }, ms);
  }
}