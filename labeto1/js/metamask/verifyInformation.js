"use strict";
import Testnet from "./testnet.js";
import Page from "../../main/newPage.js";
export default function (gameData) {
  let text = gameData.graphicsEngine.getItem("information");
  if (text == null) {
    Testnet();
  } else {
    let information = JSON.parse(text);
    let account = gameData.metamask.account.toUpperCase();
    let statistics = information.statistics[account];
    if (statistics == undefined) {
      statistics = gameData.graphicsEngine.getItem("statistics");
      if (statistics == null) {
        gameData.namePage = "createCharacter";
      } else {
        gameData.namePage = "enterGroup";
      }
    } else {
      gameData.namePage = "game";
    }
    Page(gameData);
  }
}