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
  engine.setup = () => setup();
  engine.draw = () => draw();
  engine.keyReleased = () => keyReleased();
  engine.keyTyped = () => keyTyped();
  engine.touchStarted = () => touchStarted();
  engine.touchMoved = () => touchMoved();
  engine.touchEnded = () => touchEnded();
});