import Images from "./Images.js";
import Tools from "./Tools.js";
import Draw from "./Draw.js";
import Click from "./Click.js";
import LoadingScreen from "./LoadingScreen.js";
import LoadingBarImages from "./LoadingBarImages.js";
import Database from "./Database.js";
export default class Main {
  start() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.tools = new Tools();
    this.click = new Click();
    this.page = new LoadingBarImages();
    this.images = new Images();
    this.startLoop();
  }
  loadImages() {
    this.draw = new Draw();
    this.database = new Database();
    this.page = new LoadingScreen();
  }
  startLoop() {
    this.fps = 60;
    this.ms = 1000 / this.fps;
    this.deltaTime = this.ms / 100;
    this.stop = false;
    this.update();
  }
  update() {
    this.canvas.width = 640;
    this.canvas.height = 360;
    this.page.update();
    if (this.stop === true) {
      return;
    }
    setTimeout(() => {
      this.update();
    }, this.ms);
  }
}