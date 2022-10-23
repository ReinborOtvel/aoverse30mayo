"use strict";
import _rect from "./utils/rect.js";
import _map from "./map/map.js";
import _player from "./player/player.js";
import _metamask from "./metamask/metamask.js";
new window.p5(_engine => {
  window.engine = _engine;
  window.sketch = {};
  engine.setup = () => {
    engine.createCanvas(852, 480);
    engine.frameRate(15);
    canDraw = false;
    _map();
    _player(5, 5);
    _metamask();
  };
  engine.draw = () => {
    if (!canDraw) return;
    engine.noSmooth();
    _rect(0, 0, 100, 100, "#111");
    map.draw();
    player.draw();
  };
  engine.keyReleased = () => {
    player.keyReleased();
  };
  engine.keyTyped = () => {
    player.keyTyped();
  };
  engine.touchStarted = () => {
    if (!canDraw) return;
    sketch.touch.set();
    player.touchStarted();
  };
  engine.touchMoved = () => {
    if (!canDraw) return;
    sketch.touch.set();
    player.touchMoved();
  };
  engine.touchEnded = () => {
    if (!canDraw) return;
    sketch.touch.set();
    player.touchEnded();
  };
});