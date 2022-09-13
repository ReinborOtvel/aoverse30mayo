"use strict";
import ChargingScreens from "./ChargingScreens.js";
import CreateCharacter from "./CreateCharacter.js";
import SelectLeader from "./SelectLeader.js";
import Game from "./Game.js";
import Metamask from "./Metamask.js";
import text from "./text.js";
import porcentageWidth from "./porcentageWidth.js";
import porcentageHeight from "./porcentageHeight.js";
class Data {
  constructor() {
    new p5(engine => {
      window.engine = engine;
      this.metamask = new Metamask();
      engine.setup = () => this.setup();
      engine.draw = () => this.draw();
    });
  }
  setInterfaceEmpty() {
    let url = "./Graficos/chargingScreens/empty.png";
    engine.loadImage(url, img => {
      this.interfaceEmpty = img;
    });
  }
  setup() {
    this.setInterfaceEmpty();
    this.canvas = document.querySelector("canvas");
    this.clickEvent();
    this.keydownEvent();
    this.keyupEvent();
    this.page("chargingScreens", 1);
  }
  draw() {
    engine.image(this.interfaceEmpty, 0, 0, engine.width, engine.height);
    if (this.canDraw == false) {
      text("loading", 20, 40, 5, "#fff");
    } else {
      engine.noSmooth();
      if (page.draw != undefined) {
        page.draw();
      }
    }
  }
  page(namePage, fps) {
    this.canDraw = false;
    engine.createCanvas(852, 480);
    engine.frameRate(fps);
    switch (namePage) {
      case "chargingScreens": window.page = new ChargingScreens(); break;
      case "createCharacter": window.page = new CreateCharacter(); break;
      case "selectLeader": window.page = new SelectLeader(); break;
      case "game": window.page = new Game(); break;
    }
    if (page.setup != undefined) {
      page.setup();
    }
  }
  clickEvent() {
    this.canvas.addEventListener("click", ({ pageX, pageY }) => {
      if (this.canDraw == true) {
        data.click = { x: pageX, y: pageY };
        data.click.x = data.click.x / porcentageWidth(1);
        data.click.y = data.click.y / porcentageHeight(1);
        data.click.x = parseInt(data.click.x);
        data.click.y = parseInt(data.click.y);
        console.log(data.click);
        if (page.click != undefined) {
          page.click();
        }
      }
    });
  }
  keydownEvent() {
    document.addEventListener("keydown", ({ key }) => {
      if (this.canDraw == true) {
        data.keydown = key;
        if (page.keydown != undefined) {
          page.keydown();
        }
      }
    });
  }
  keyupEvent() {
    document.addEventListener("keyup", ({ key }) => {
      if (this.canDraw == true) {
        data.keyup = key;
        if (page.keyup != undefined) {
          page.keyup();
        }
      }
    });
  }
}
window.data = new Data();