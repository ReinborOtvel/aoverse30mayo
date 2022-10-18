"use strict";
import metamask from "./metamask.js";
new window.p5(engine => {
  window.engine = engine;
  window.engine.setup = () => {
    metamask();
  };
});