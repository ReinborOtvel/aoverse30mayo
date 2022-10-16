"use strict";
import setup from "./setup.js";
import draw from "./draw.js";
new window.p5(_engine => {
  window.engine = _engine;
  window.engine.setup = () => setup();
  window.engine.draw = () => draw();
});