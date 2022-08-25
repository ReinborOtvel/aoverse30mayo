"use strict";
import Testnet from "../metamask/testnet.js";
import Player from "../player/player.js";
export default function () {
    if (data.chainId != 97) {
        Testnet();
        return;
    }
    page.interfaceEmpty = engine.loadImage("./Graficos/Interfaces/empty.png");
    page.account = data.account.toUpperCase();
    for (let leader in data.info.groups) {
        if (data.info.groups[leader].length >= 5) {
            continue;
        }
        data.info.statistics[page.account] = data.statistics;
        page.leader = leader;
        data.info.leaders[page.account] = leader;
        data.info.groups[leader].push(page.account);
        data.info.groups[page.account] = [];
        break;
    }
    if (page.leader == undefined) {
        alert("not groups");
        return;
    }
    page.player = new Player({
        x: 300, y: 50, width: 150, height: 150,
    }, data.statistics);
    page.leaderPlayer = new Player({
        x: 450, y: 50, width: 150, height: 150,
    }, data.info.statistics[page.leader]);
}