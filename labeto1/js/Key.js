"use strict";
export default class {
  constructor() {
    engine.keyTyped = this.keyTyped;
    engine.keyReleased = this.keyReleased;
  }
  keyTyped({ key }) {
    window.key.key = key;
    if (window.page == undefined) {
      return;
    }
    page.keyTyped();
  }
  keyReleased({ key }) {
    window.key.key = key;
    if (window.page == undefined) {
      return;
    }
    page.keyReleased();
  }
}