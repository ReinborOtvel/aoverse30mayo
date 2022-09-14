"use strict";
export default function (pixels) {
  let one = utils.percentageWidth(1);
  return parseInt(pixels / one);
}