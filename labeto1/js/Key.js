"use strict";
export default class {
  constructor() {
    engine.keyTyped = this.keyTyped;
    engine.keyReleased = this.keyReleased;
  }
  keyTyped({ key }) {
    this.key = key;
    if (window.page == undefined) {
      return;
    } if (page.keyTyped == undefined) {
      return;
    }
    page.keyTyped();
  }
  keyReleased({ key }) {
    this.key = key;
    if (window.page == undefined) {
      return;
    } if (page.keyReleased == undefined) {
      return;
    }
    page.keyReleased();
  }
}