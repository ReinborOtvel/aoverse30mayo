"use strict";
import Statistics from "../player/statisticsRandom.js";
import Verify from "../utils/verifyClick.js";
import Character from "./createCharacter.js";
import Player from "../player/player.js";
export default function () {
    if (Verify(50, 280, 260, 320)) {
        if (page.player.load == false) {
            return;
        }
        page.player = new Player({
            x: 300, y: 70, width: 150, height: 150,
        }, Statistics());
    } else if (Verify(300, 280, 550, 320)) {
        if (page.transaction == true) {
            return;
        }
        page.transaction = true;
        Character();
    }
}