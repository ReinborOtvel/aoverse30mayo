"use strict";
import text from "../utils/text.js";
import rect from "../utils/rect.js";
export default function () {
  if (!window.canDraw) return;
  window.engine.noSmooth();
  Rect(0, 0, 100, 100, "#111");
  window.leader.draw();
  Text(5, 15, 5, `total leaders ${window.membership.leaders.length}`, "#fff");
  Text(5, 25, 5, "leaders - members", "#fff");
  Text(55, 15, 5, "random leader", "#C548EE");
  Text(55, 25, 5, "write leader", "#C548EE");
  Text(5, 85, 5, "join group", "#C548EE");
  for (let i in window.membership.leaders) {
    if (i >= 3) break;
    let address = window.membership.leaders[i];
    let top = 35;
    let y = top + (10 * i);
    let members = window.membership.membership[address.toUpperCase()];
    Text(5, y, 5, `${address.slice(0, 6)} - ${members}`, "#fff");
  }
}