"use strict";
import Testnet from "../metamask/testnet.js";
import Page from "../main/page.js";
export default function () {
  let text = engine.getItem("info");
  if (text == null) {
    Testnet();
    return;
  }
  data.info = JSON.parse(text);
  let account = data.account.toUpperCase();
  data.statistics = data.info.statistics[account];
  if (data.statistics != undefined) {
    Page("game");
    return;
  }
  data.statistics = engine.getItem("statistics");
  if (data.statistics == null) {
    Page("createCharacter");
    return;
  }
  data.statistics = JSON.parse(data.statistics);
  Page("enterGroup");
}