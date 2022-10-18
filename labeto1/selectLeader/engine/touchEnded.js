"use strict";
export default function () {
  if (!window.canDraw) return;
  window.leader.touchEnded();
}