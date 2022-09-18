"use strict";
export default function (img, x, y, width, height) {
    if (img == undefined) {
        return;
    }
    x = utils.percentageWidth(x);
    y = utils.percentageHeight(y);
    width = utils.percentageWidth(width);
    height = utils.percentageHeight(height);
    engine.image(img, x, y, width, height);
}