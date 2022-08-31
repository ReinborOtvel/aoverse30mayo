"use strict";
import rect from "./rect.js";
import text from "./text.js";
export default class {
  setup() {
    this.timer = 60;
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(this.interval);
        location.reload();
      }
    }, 1000);
    data.canDraw = true;
  }
  click() { }
  draw() {
    rect(0, 0, 640, 360, "#000");
    text(`wait ${this.timer} seconds`, 50, 190, 60);
  }
}