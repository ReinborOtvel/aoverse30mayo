"use strict";
import Statistics from "../player/statisticsRandom.js";
import Binance from "../metamask/binance.js";
import Player from "../player/player.js";
export default function (gameData) {
    gameData.pageData = {};
    if (gameData.metamask.chainId == 56) {
        gameData.pageData.interfaceEmpty = gameData.graphicsEngine.loadImage("./Graficos/interfaces/empty.png");
        gameData.pageData.player = new Player({
            x: 300, y: 70, width: 150, height: 150,
        }, Statistics(gameData));
    } else {
        Binance(gameData);
    }
}