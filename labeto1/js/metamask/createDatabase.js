"use strict";
import database from "./database.js";
import Statistics from "../player/statisticsRandom.js";
import Binance from "../metamask/binance.js";
export default function () {
  if (gameData.metamask.chainId == 56) {
    let information = { statistics: {}, leaders: {}, groups: {} };
    let creator = database.creator.toUpperCase();
    information.statistics[creator] = Statistics();
    information.leaders[creator] = creator;
    information.groups[creator] = [];
    let text = JSON.stringify(information);
    let factory = new ethers.ContractFactory(database.abi, database.bytecode, gameData.metamask.signer);
    factory.deploy(text).then(contract => {
      console.log(contract);
    }).catch(() => alert("error, create database"));
  } else {
    Binance();
  }
}