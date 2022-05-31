import Images from "./Images.js";
import Tools from "./Tools.js";
import Draw from "./Draw.js";
import Text from "./Text.js";
import Click from "./Click.js";
import LoadingScreen from "./LoadingScreen.js";
import Database from "./Database.js";
export default class Main {
  start() {
    this.Canvas = document.getElementById("canvas");
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