"use strict";
import ChargingScreensDraw from "../js/chargingScreens/draw.js";
import CreateCharacterDraw from "../js/createCharacter/draw.js";
export default function (gameData) {
    gameData.graphicsEngine.noSmooth();
    gameData.graphicsEngine.textAlign(gameData.graphicsEngine.LEFT);
    gameData.graphicsEngine.textWrap(gameData.graphicsEngine.WORD);
    gameData.graphicsEngine.fill("#fff");
    gameData.graphicsEngine.textSize(30);
    switch (gameData.namePage) {
        case "chargingScreen": ChargingScreensDraw(gameData); break;
        case "createCharacter": CreateCharacterDraw(gameData); break;
        case "enterGroup": EnterGroupDraw(gameData); break;
        case "game": GameDraw(gameData); break;
    }
}