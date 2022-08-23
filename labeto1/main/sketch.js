"use strict";
import Setup from "./setup.js";
import Draw from "./draw.js";
new p5(graphicsEngine => {
  let gameData = { graphicsEngine };
  graphicsEngine.setup = () => Setup(gameData);
  graphicsEngine.draw = () => Draw(gameData);
});