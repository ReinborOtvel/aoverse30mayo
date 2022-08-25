"use strict";
import ChargingScreens from "../chargingScreens/sketch.js";
import CreateCharacter from "../createCharacter/sketch.js";
import EnterGroup from "../enterGroup/sketch.js";
import Game from "../game/sketch.js";
export default function (name, fps) {
    engine.createCanvas(640, 360);
    engine.frameRate(fps);
    switch (name) {
        case "chargingScreens":
            window.page = ChargingScreens;
            break;
        case "createCharacter":
            window.page = CreateCharacter;
            break;
        case "enterGroup":
            window.page = EnterGroup;
            break;
        case "game":
            window.page = Game;
            break;
    }
    page.setup();
}