"use strict";
import Statistics from "../player/statisticsRandom.js";
import Binance from "../metamask/binance.js";
import Player from "../player/player.js";
export default function () {
    if (data.chainId != 56) {
        Binance();
        return;
    }
    page.interfaceEmpty = engine.loadImage("./Graficos/Interfaces/empty.png");
    page.transaction = false;
    page.player = new Player({
        x: 300, y: 70, width: 150, height: 150,
    }, Statistics());
}