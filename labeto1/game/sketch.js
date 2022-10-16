"use strict";
import draw from "./engine/draw.js";
import keyReleased from "./engine/keyReleased.js";
import keyTyped from "./engine/keyTyped.js";
import mouseReleased from "./engine/mouseReleased.js";
import setup from "./engine/setup.js";
new window.p5(_engine => {
  window.engine = _engine;
  window.engine.setup = () => setup();
  window.engine.draw = () => draw();
  window.engine.keyReleased = () => keyReleased();
  window.engine.keyTyped = () => keyTyped();
  window.engine.mouseReleased = () => mouseReleased();
});