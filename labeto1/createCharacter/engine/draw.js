"use strict";
import text from "../utils/text.js";
import rect from "../utils/rect.js";
export default function () {
  if (!window.canDraw) return;
  window.engine.noSmooth();
  rect(0, 0, 100, 100, "#111");
  window.player.draw();
  text(5, 15, 5, "character", "#fff");
  text(5, 80, 5, "new character", "#C548EE");
  text(5, 90, 5, "create character", "#C548EE");
  text(5, 25, 5, `name ${player.statistics.name}`, "#fff");
  text(5, 35, 5, `strength ${player.statistics.strength}`, "#fff");
  text(5, 45, 5, `endurance ${player.statistics.endurance}`, "#fff");
  text(5, 55, 5, `health ${player.statistics.health}`, "#fff");
  text(5, 65, 5, `speed ${player.statistics.speed}`, "#fff");
}