"use strict";
import setup from "./engine/setup.js";
import draw from "./engine/draw.js";
import touchEnded from "./engine/touchEnded.js";
new window.p5(engine => {
  window.engine = engine;
  window.engine.setup = () => setup();
  window.engine.draw = () => draw();
  window.engine.touchEnded = () => touchEnded();
})