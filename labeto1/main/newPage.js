"use strict";
import ChargingScreensSetup from "../js/chargingScreens/setup.js";
import CreateCharacterSetup from "../js/createCharacter/setup.js";
export default function (gameData) {
    gameData.graphicsEngine.createCanvas(640, 360);
    gameData.graphicsEngine.frameRate(30);
    switch (gameData.namePage) {
        case "chargingScreen": ChargingScreensSetup(gameData); break;
        case "createCharacter": CreateCharacterSetup(gameData); break;
        case "enterGroup": EnterGroupSetup(gameData); break;
        case "game": GameSetup(gameData); break;
    }
}