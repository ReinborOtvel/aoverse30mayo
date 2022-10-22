"use strict";
import _setup from "./engine/setup.js";
import _draw from "./engine/draw.js";
import _touchEnded from "./engine/touchEnded.js";
new p5(_engine => {
  window.engine = _engine;
  engine.setup = () => _setup();
  engine.draw = () => _draw();
  engine.touchEnded = () => _touchEnded();
});