"use strict";
import data from "./data.js";
new p5(engine => {
  window.data = data;
  window.data.engine = engine;
  window.data.engine.setup = window.data.setup;
  window.data.engine.draw = window.data.draw;
});