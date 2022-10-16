"use strict";
import setup from "./engine/setup.js";
import draw from "./engine/draw.js";
new window.p5(_engine => {
  window.engine = _engine;
  window.engine.setup = () => setup();
  window.engine.draw = () => draw();
});