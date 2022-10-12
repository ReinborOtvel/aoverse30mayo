"use strict";
export default {
  setup() {
    window.data.engine.keyTyped = window.data.key.keyTyped;
    window.data.engine.keyReleased = window.data.key.keyReleased;
  },
  keyTyped({ key }) {
    window.data.key.key = key;
    window.data.page.keyTyped();
  },
  keyReleased({ key }) {
    window.data.key.key = key;
    window.data.page.keyReleased();
  }
}