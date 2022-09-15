"use strict";
export default class {
  constructor(fullLoad) {
    this.fullLoad = fullLoad;
    this.pressQ = false;
    this.pressE = false;
    this.pressR = false;
    this.pressF = false;
    this.buttonDownQ();
  }
  buttonDownQ() {
    let url = "./Graficos/interface/buttons/down/q.png";
    engine.loadImage(url, img => {
      this.buttonDownQ = img;
      this.buttonUpQ();
    });
  }
  buttonUpQ() {
    let url = "./Graficos/interface/buttons/up/q.png";
    engine.loadImage(url, img => {
      this.buttonUpQ = img;
      this.buttonDownE();
    });
  }
  buttonDownE() {
    let url = "./Graficos/interface/buttons/down/e.png";
    engine.loadImage(url, img => {
      this.buttonDownE = img;
      this.buttonUpE();
    });
  }
  buttonUpE() {
    let url = "./Graficos/interface/buttons/up/e.png";
    engine.loadImage(url, img => {
      this.buttonUpE = img;
      this.buttonDownR();
    });
  }
  buttonDownR() {
    let url = "./Graficos/interface/buttons/down/r.png";
    engine.loadImage(url, img => {
      this.buttonDownR = img;
      this.buttonUpR();
    });
  }
  buttonUpR() {
    let url = "./Graficos/interface/buttons/up/r.png";
    engine.loadImage(url, img => {
      this.buttonUpR = img;
      this.buttonDownF();
    });
  }
  buttonDownF() {
    let url = "./Graficos/interface/buttons/down/f.png";
    engine.loadImage(url, img => {
      this.buttonDownF = img;
      this.buttonUpF();
    });
  }
  buttonUpF() {
    let url = "./Graficos/interface/buttons/up/f.png";
    engine.loadImage(url, img => {
      this.buttonUpF = img;
      this.fullLoad();
    });
  }
  keyTyped() {
    switch (events.key) {
      case "q":
        this.pressQ = true;
        break;
      case "e":
        this.pressE = true;
        break;
      case "r":
        this.pressR = true;
        break;
      case "f":
        this.pressF = true;
        break;
    }
  }
  keyReleased() {
    this.pressQ = false;
    this.pressE = false;
    this.pressR = false;
    this.pressF = false;
  }
  touchKey() {
    if (utils.verifyClick(68, 70, 77, 83)) {
      return "q";
    } else if (utils.verifyClick(78, 60, 87, 73)) {
      return "e";
    } else if (utils.verifyClick(88, 70, 97, 83)) {
      return "r";
    } else if (utils.verifyClick(78, 80, 87, 93)) {
      return "f";
    }
  }
  touchStarted() {
    switch (this.touchKey()) {
      case "q":
        this.pressQ = true;
        break;
      case "e":
        this.pressE = true;
        break;
      case "r":
        this.pressR = true;
        break;
      case "f":
        this.pressF = true;
        break;
    }
  }
  touchEnded() {
    this.pressQ = false;
    this.pressE = false;
    this.pressR = false;
    this.pressF = false;
  }
  draw() {
    if (this.pressQ) {
      utils.image(this.buttonDownQ, 68, 70, 10, 15);
    } else {
      utils.image(this.buttonUpQ, 68, 70, 10, 15);
    }
    if (this.pressE) {
      utils.image(this.buttonDownE, 78, 60, 10, 15);
    } else {
      utils.image(this.buttonUpE, 78, 60, 10, 15);
    }
    if (this.pressF) {
      utils.image(this.buttonDownF, 78, 80, 10, 15);
    } else {
      utils.image(this.buttonUpF, 78, 80, 10, 15);
    }
    if (this.pressR) {
      utils.image(this.buttonDownR, 88, 70, 10, 15);
    } else {
      utils.image(this.buttonUpR, 88, 70, 10, 15);
    }
  }
}