"use strict";
import text from "./text.js";
import rect from "./rect.js";
export default function (_text, x, y, width, height, size) {
    rect(x, y, width, height, "#000");
    text(_text, x, y + size, size);
}