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
    this.startLoop();
  }
  startLoop() {
    this.fps = 10;
    this.ms = 1000 / this.fps;
    this.deltaTime = this.ms / 100;
    this.stop = false;
    this.update();
  }
  update() {
    window.Main.Draw.erase();
    window.Main.Page.update(this.ms, this.deltaTime);
    if (this.stop === false) {
      setTimeout(() => {
        this.update();
      }, this.ms);
    }
  }
}