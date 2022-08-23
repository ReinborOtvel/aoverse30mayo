"use strict";
export default class {
  constructor(callback) {
    this.graphics = new CharacterGraphics(() => {
      this.graphics.setup();
      callback();
    });
    this.map = new CharacterMap();
  }
}