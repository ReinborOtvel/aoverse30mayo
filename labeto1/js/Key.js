"use strict";
export default class {
  setup() {
    engine.keyTyped = key.keyTyped;
    engine.keyReleased = key.keyReleased;
  }
  keyTyped({ key }) {
    window.key.key = key;
    if (page.keyTyped != undefined) {
      page.keyTyped();
    }
  }
  keyReleased({ key }) {
    window.key.key = key;
    if (page.keyReleased != undefined) {
      page.keyReleased();
    }
  }
}