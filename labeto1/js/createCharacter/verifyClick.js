"use strict";
export default function VerifyClick(x, y, xInit, yInit, xEnd, yEnd) {
  return x > xInit && y > yInit && x < xEnd && y < yEnd;
}