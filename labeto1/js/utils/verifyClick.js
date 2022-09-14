"use strict";
export default function (xInit, yInit, xEnd, yEnd) {
  return events.touch.x >= xInit &&
    events.touch.y >= yInit &&
    events.touch.x <= xEnd &&
    events.touch.y <= yEnd;
}