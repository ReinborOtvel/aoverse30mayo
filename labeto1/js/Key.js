"use strict";
export default class {
  setup() {
    engine.keyTyped = key.keyTyped;
    engine.keyReleased = key.keyReleased;
  }
  keyTyped({ key }) {
    this.key = key;
    window.data.page.keyTyped();
  }
  keyReleased({ key }) {
    this.key = key;
    window.data.page.keyReleased();
  }
}