"use strict";
import Statistics from "../player/statisticsRandom.js";
import Verify from "../utils/verifyClick.js";
import Character from "./createCharacter.js";
import Player from "../player/player.js";
export default function (gameData) {
    if (Verify(gameData, 50, 280, 260, 330)) {
        gameData.player = new Player({
            x: 300, y: 70, width: 150, height: 150,
        }, Statistics(gameData));
    } else if (Verify(gameData, 300, 280, 540, 330)) {
        Character(gameData);
    }
}