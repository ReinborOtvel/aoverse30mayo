"use strict";
export default function (pixels) {
  let one = utils.percentageHeight(1);
  return parseInt(pixels / one);
}