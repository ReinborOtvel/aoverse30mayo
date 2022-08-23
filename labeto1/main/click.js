"use strict";
import ChargingScreensClick from "../js/chargingScreens/click.js";
import CreateCharacterClick from "../js/createCharacter/click.js";
export default function (gameData) {
    switch (gameData.namePage) {
        case "chargingScreen": ChargingScreensClick(gameData); break;
        case "createCharacter": CreateCharacterClick(gameData); break;
        case "enterGroup": EnterGroupClick(gameData); break;
        case "game": GameClick(gameData); break;
    }
}