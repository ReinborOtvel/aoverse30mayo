"use strict";
import Utils from "./utils.js";
import Touch from "./touch.js";
new p5(engine => {
  window.sketch = sketch;
  sketch.engine = engine;
  Utils();
  Touch();
  sketch.engine.setup = () => {
    sketch.engine.createCanvas(852, 480);
    sketch.engine.frameRate(15);
    Leader();
    Leaders();
    Membership();
    Metamask();
  };
  sketch.engine.draw = () => {
    if (!sketch.canDraw) return;
    sketch.engine.noSmooth();
    sketch.utils.rect(0, 0, 100, 100, "#111");
    sketch.leader.draw();
    sketch.leaders.draw();
  };
  sketch.engine.touchEnded = () => {
    if (!sketch.canDraw) return;
    sketch.touch.set();
    sketch.leader.touchEnded();
  };
});