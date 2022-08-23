"use strict";
import Get from "./getInformation.js";
import Verify from "./verifyInformation.js";
import Testnet from "./testnet.js";
export default function (gameData) {
  if (navigator.onLine == false) {
    alert("no internet");
  } else if (window.ethereum == undefined) {
    alert("download Metamask");
  } else {
    gameData.metamask = {};
    gameData.metamask.provider = new ethers.providers.Web3Provider(ethereum);
    gameData.metamask.provider.send("eth_requestAccounts", []).then(accounts => {
      gameData.metamask.account = accounts[0];
      gameData.metamask.signer = gameData.metamask.provider.getSigner();
      ethereum.on('accountsChanged', () => location.reload());
      ethereum.on('chainChanged', () => location.reload());
      gameData.metamask.signer.getChainId().then(chainId => {
        gameData.metamask.chainId = chainId;
        switch (chainId) {
          case 97: Get(gameData); break;
          case 56: Verify(gameData); break;
          default: Testnet(gameData); break;
        }
      }).catch((error) => {
        console.error(error);
        alert("error, chain id");
      });
    }).catch(() => alert("error, accounts"));
  }
}