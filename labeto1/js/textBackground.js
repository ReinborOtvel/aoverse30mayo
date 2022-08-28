"use strict";
import text from "./text.js";
export default function (_text, x, y, width, size) {
    engine.fill("#000");
    engine.rect(x, y, width, size + 10);
    text(_text, x, y + size, size);
}