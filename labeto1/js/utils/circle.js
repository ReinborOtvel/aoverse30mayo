"use strict";
export default function (x, y, diameter) {
    x = utils.percentageWidth(x);
    y = utils.percentageHeight(y);
    diameter = utils.percentageWidth(diameter);
    engine.circle(x, y, diameter);
}