"use strict";
import circle from "./circle.js";
import databaseInformation from "./databaseInformation.js";
import image from "./image.js";
import percentageHeight from "./percentageHeight.js";
import percentagePixelsHeight from "./percentagePixelsHeight.js";
import percentagePixelsWidth from "./percentagePixelsWidth.js";
import percentageWidth from "./percentageWidth.js";
import rect from "./rect.js";
import statisticsRandom from "./statisticsRandom.js";
import text from "./text.js";
import textRect from "./textRect.js";
import verifyClick from "./verifyClick.js";
export default function () {
  window.utils = {
    circle,
    databaseInformation,
    image,
    percentageHeight,
    percentagePixelsHeight,
    percentagePixelsWidth,
    percentageWidth,
    rect,
    statisticsRandom,
    text,
    textRect,
    verifyClick,
  };
}