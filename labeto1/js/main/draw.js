"use strict";
import TextBackground from "../utils/textBackground.js";
export default function () {
    engine.noSmooth();
    engine.textAlign(engine.LEFT);
    engine.textWrap(engine.WORD);
    engine.fill("#fff");
    engine.textSize(30);
    page.draw();
    if (data.alert != undefined) {
        TextBackground(0, 320, data.alert);
    }
}