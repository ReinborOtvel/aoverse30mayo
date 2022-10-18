"use strict";
import setup from "./engine/setup.js";
import draw from "./engine/draw.js";
import touchEnded from "./engine/touchEnded.js";
new p5(_engine => {
  window.engine = _engine;
  engine.setup = () => setup();
  engine.draw = () => draw();
  engine.touchEnded = () => touchEnded();
});