"use strict";
export default function (x, y, text) {
    let width = text.length * 14;
    engine.fill("#000");
    engine.rect(x, y, width, 40);
    engine.fill("#fff");
    engine.text(text, x, y + 30);
}