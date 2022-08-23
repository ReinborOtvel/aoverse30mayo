"use strict";
import BinanceTestnet from "./binanceTestnet.js";
export default function () {
  let text = gameData.p5.getItem("information");
  if (text == null) {
    BinanceTestnet();
  } else {
    let information = JSON.parse(text);
    let account = gameData.account.toUpperCase();
    let statistics = information.statistics[account];
    if (statistics == undefined) {
      statistics = gameData.p5.getItem("statistics");
      if (statistics == null) {
        gameData.newPage("createCharacter");
      } else {
        gameData.newPage("enterGroup");
      }
    } else {
      gameData.newPage("game");
    }
  }
}