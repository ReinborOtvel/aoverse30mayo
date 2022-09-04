"use strict";
import text from "./text.js";
export default class {
  setup() {
    this.timer = 60;
    let interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(interval);
        location.reload();
      }
    }, 1000);
    data.canDraw = true;
  }
  draw() {
    text(`wait ${this.timer} seconds`, 50, 190, 60, "#fff");
  }
}