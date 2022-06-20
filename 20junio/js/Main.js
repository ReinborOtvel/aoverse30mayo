import Images from "./Images.js";
import Tools from "./Tools.js";
import Draw from "./Draw.js";
import Text from "./Text.js";
import Click from "./Click.js";
import LoadingScreen from "./LoadingScreen.js";
import Keyboard from "./Keyboard.js";
import Database from "./Database.js";
import LoadingBarImages from "./LoadingBarImages.js";
export default class Main {
  start() {
    this.Canvas = document.getElementById("canvas");
    this.Ctx = this.Canvas.getContext("2d");
    this.Tools = new Tools();
    this.Click = new Click();
    this.Keyboard = new Keyboard();
    this.Page = new LoadingBarImages();
    this.Images = new Images();
    this.startLoop();
  }
  loadImages() {
    this.Draw = new Draw();
    this.Text = new Text();
    this.Page = new LoadingScreen();
    this.Database = new Database();
  }
  startLoop() {
    this.fps = 60;
    this.ms = 1000 / this.fps;
    this.deltaTime = this.ms / 100;
    this.stop = false;
    this.update();
  }
  update() {
    this.Canvas.width = 640;
    this.Canvas.height = 360;
    this.Page.update();
    if (this.stop === true) {
      return;
    }
    setTimeout(() => {
      this.update();
    }, this.ms);
  }
}