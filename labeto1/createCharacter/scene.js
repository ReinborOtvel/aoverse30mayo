"use strict";
class Click {
  constructor(metamask, character, scene) {
    this.character = character;
  }
  preload() {
    this.canvas = document.querySelector("canvas");
    this.canvas.addEventListener("click", (data) => this.event(data));
  }
  verify(xInitial, yInitial, xEnd, yEnd) {
    return this.x > xInitial && this.y > yInitial && this.x < xEnd && this.y < yEnd;
  }
  event(data) {
    this.x = data.pageX;
    this.y = data.pageY;
    print(this.x, this.y);
    if (this.verify(52, 284, 233, 300)) {
      this.character.preload(() => { });
      return;
    } if (this.verify(301, 283, 512, 300)) {
      if (this.character.endOfCreation == true) {
        this.character.create();
      }
    }
  }
}
class Scene {
  constructor(metamask, character) {
    this.click = new Click(metamask, character, this);
  }
  preload(callback) {
    loadImage("../assets/interfaceEmpty.png", img => {
      this.interfaceEmpty = img;
      this.click.preload();
      callback();
    });
  }
  draw() {
    image(this.interfaceEmpty, 0, 0, width, height);
    text("character", 30, 60);
    text("new character", 50, 300);
    text("create character", 300, 300);
  }
}