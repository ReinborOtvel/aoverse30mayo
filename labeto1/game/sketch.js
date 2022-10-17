"use strict";
import draw from "./engine/draw.js";
import keyReleased from "./engine/key/released.js";
import keyTyped from "./engine/key/typed.js";
import touchStarted from "./engine/touch/started.js";
import touchMoved from "./engine/touch/moved.js";
import touchEnded from "./engine/touch/ended.js";
import setup from "./engine/setup.js";
new window.p5(_engine => {
  window.engine = _engine;
  window.engine.setup = () => setup();
  window.engine.draw = () => draw();
  window.engine.keyReleased = () => keyReleased();
  window.engine.keyTyped = () => keyTyped();
  window.engine.touchStarted = () => touchStarted();
  window.engine.touchMoved = () => touchMoved();
  window.engine.touchEnded = () => touchEnded();
});