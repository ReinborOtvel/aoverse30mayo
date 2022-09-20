"use strict";
export default class {
  setup() {
    engine.touchStarted = () => {
      events.touchEvent("touchStarted");
      console.log(events.touch);
    }
    engine.touchMoved = () => {
      events.touchEvent("touchMoved");
    }
    engine.touchEnded = () => {
      events.touchEvent("touchEnded");
    }
    engine.keyTyped = ({ key }) => {
      events.keyEvent("keyTyped", key);
    }
    engine.keyReleased = ({ key }) => {
      events.keyEvent("keyReleased", key);
    }
  }
  verifyTouch(xInit, yInit, xEnd, yEnd) {
    return events.touch.x >= xInit &&
      events.touch.x <= xEnd &&
      events.touch.y >= yInit &&
      events.touch.y <= yEnd;
  }
  setTouch() {
    events.touch = {
      x: utils.percentagePixelsWidth(engine.mouseX),
      y: utils.percentagePixelsHeight(engine.mouseY),
    };
  }
  touchEvent(name) {
    if (window.page == undefined) {
      return;
    }
    if (page[name]) {
      events.setTouch();
      page[name]();
    }
  }
  keyEvent(name, key) {
    if (window.page == undefined) {
      return;
    }
    if (page[name]) {
      events.key = key;
      page[name]();
    }
  }
}