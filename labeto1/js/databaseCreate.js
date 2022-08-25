"use strict";
import info from "./information.js";
import Statistics from "../player/statisticsRandom.js";
import Testnet from "../metamask/testnet.js";
export default function () {
  if (data.chainId != 97) {
    Testnet();
  } else {
    data.alert = " create database ";
    let information = { statistics: {}, leaders: {}, groups: {} };
    let creator = info.creator.toUpperCase();
    information.statistics[creator] = Statistics();
    information.leaders[creator] = creator;
    information.groups[creator] = [];
    let text = JSON.stringify(information);
    let factory = new ethers.ContractFactory(info.abi, info.bytecode, data.signer);
    factory.deploy(text).then(contract => {
      console.log(contract);
    }).catch(error => {
      console.error(error);
      data.alert = " error, create database ";
    });
  }
}