"use strict";
import Setup from "./setup.js";
import Draw from "./draw.js";
new p5(engine => {
  window.data = {};
  window.engine = engine;
  engine.setup = () => Setup();
  engine.draw = () => Draw();
});