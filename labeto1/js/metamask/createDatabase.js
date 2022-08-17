"use strict";
import { creator, abi, bytecode } from "./database.js";
import StatisticsRandom from "../player/statisticsRandom.js";
export default function CreateDatabase() {
  let information = { statistics: {}, leaders: {}, groups: {} };
  creator = creator.toUpperCase();
  information.statistics[creator] = StatisticsRandom();
  information.leaders[creator] = creator;
  information.groups[creator] = [];
  let text = JSON.stringify(information);
  let factory = new ethers.ContractFactory(abi, bytecode, gameData.signer);
  factory.deploy(text).then(contract => {
    console.log(contract);
  }).catch(() => alert("error, create database"));
}