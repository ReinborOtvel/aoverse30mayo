"use strict";
class Click {
  constructor(metamask) {
    this.metamask = metamask;
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
    if (this.verify(350, 276, 529, 307)) {
      if (this.metamask.savedInformation == true) {
        return;
      }
      this.metamask.saveInformation();
    }
  }
}
class Scene {
  constructor(metamask) {
    this.metamask = metamask;
    this.click = new Click(metamask);
  }
  preload(callback) {
    loadImage("../assets/interfaceEmpty.png", img => {
      this.interfaceEmpty = img;
      this.click.preload();
      callback();
    });
  }
  drawGroup() {
    let account = this.metamask.account.toUpperCase();
    let leader = this.metamask.information.leaders[account];
    let group = this.metamask.information.groups[leader];
    text(`leader ${leader.slice(0, 5)}`, 30, 110);
    for (let i in group) {
      let member = group[i];
      let spaceY = 30 * i;
      let y = 140 + spaceY;
      text(`member${i} ${member.slice(0, 5)}`, 30, y);
    }
  }
  draw() {
    image(this.interfaceEmpty, 0, 0, width, height);
    text("group", 30, 60);
    text("join the group", 350, 300);
    this.drawGroup();
  }
}