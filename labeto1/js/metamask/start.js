"use strict";
import GetInformation from "./getInformation.js";
import VerifyInformation from "./verifyInformation.js";
import BinanceTestnet from "./binanceTestnet.js";
export default function StartMetamask() {
  if (navigator.onLine == false) {
    alert("no internet");
  } else if (window.ethereum == undefined) {
    alert("download Metamask");
  } else {
    gameData.provider = new ethers.providers.Web3Provider(ethereum);
    gameData.provider.send("eth_requestAccounts", []).then(accounts => {
      gameData.account = accounts[0];
      gameData.signer = gameData.provider.getSigner();
      ethereum.on('accountsChanged', () => location.reload());
      ethereum.on('chainChanged', () => location.reload());
      gameData.signer.getChainId().then(chainId => {
        switch (chainId) {
          case 97: GetInformation(); break;
          case 56: VerifyInformation(); break;
          default: BinanceTestnet(); break;
        }
      }).catch(() => alert("error, chain id"));
    }).catch(() => alert("error, accounts"));
  }
}