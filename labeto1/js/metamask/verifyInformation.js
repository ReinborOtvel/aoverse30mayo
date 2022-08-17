"use strict";
import BinanceTestnet from "./binanceTestnet.js";
export default function VerifyInformation() {
  let text = getItem("information");
  if (text == null) {
    BinanceTestnet();
  } else {
    let information = JSON.parse(text);
    let account = gameData.account.toUpperCase();
    let statistics = information.statistics[account];
    if (statistics == undefined) {
      statistics = getItem("statistics");
      if (statistics == null) {
        gameData.preload("createCharacter");
      } else {
        gameData.preload("enterGroup");
      }
    } else {
      gameData.preload("game");
    }
  }
}