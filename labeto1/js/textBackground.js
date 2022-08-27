"use strict";
import text from "./text.js";
export default function (x, y, _text) {
    let width = _text.length * 14;
    engine.fill("#000");
    engine.rect(x, y, width, 40);
    text(_text, x, y + 30, 30);
}