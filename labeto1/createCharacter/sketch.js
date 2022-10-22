"use strict";
import Utils from "./utils.js";
import Touch from "./touch.js";
import Player from "./player/player.js";
import Metamask from "./metamask.js";
new p5(engine => {
  window.sketch = {};
  sketch.engine = engine;
  Utils();
  Touch();
  sketch.engine.setup = () => {
    sketch.canDraw = false;
    sketch.engine.createCanvas(852, 480);
    sketch.engine.frameRate(15);
    Player();
    Metamask();
  };
  sketch.engine.draw = () => {
    if (!sketch.canDraw) return;
    sketch.engine.noSmooth();
    sketch.utils.rect(0, 0, 100, 100, "#111");
    sketch.player.draw();
    sketch.utils.text(5, 15, 5, "character", "#fff");
    sketch.utils.text(5, 80, 5, "new character", "#C548EE");
    sketch.utils.text(5, 90, 5, "create character", "#C548EE");
    sketch.utils.text(5, 25, 5, `name ${sketch.player.statistics.name}`, "#fff");
    sketch.utils.text(5, 35, 5, `strength ${sketch.player.statistics.strength}`, "#fff");
    sketch.utils.text(5, 45, 5, `endurance ${psketch.layer.statistics.endurance}`, "#fff");
    sketch.utils.text(5, 55, 5, `health ${sketch.player.statistics.health}`, "#fff");
    sketch.utils.text(5, 65, 5, `speed ${sketch.player.statistics.speed}`, "#fff");
  };
  sketch.engine.touchEnded = () => {
    if (!sketch.canDraw) return;
    sketch.touch.set();
    sketch.player.touchEnded();
  };
});