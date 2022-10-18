"use strict";
import database from "./database.js";
export default function (callback) {
  if (!window.navigator.onLine) {
    window.alert("connect to the internet");
    return;
  } if (window.ethereum == undefined) {
    window.alert("download metamask");
    return;
  }
  window.ethereum.on('chainChanged', () => {
    window.location.reload();
  });
  window.metamask = {};
  window.metamask.provider = new window.ethers.providers.Web3Provider(window.ethereum);
  window.metamask.provider.send("eth_requestAccounts", []).then(accounts => {
    window.metamask.account = accounts[0];
    window.metamask.signer = window.metamask.provider.getSigner();
    window.metamask.signer.getChainId().then(chainId => {
      if (chainId == 97) {
        if (database.address == "") {
          callback("database");
        } else {
          window.metamask.database = new window.ethers.Contract(database.address, database.abi, window.metamask.signer);
          window.metamask.database.getAccount(window.metamask.account).then(account => {
            let owner = account.owner.toUpperCase();
            let user = window.metamask.account.toUpperCase();
            if (owner == user) {
              callback("game");
            } else {
              let statistics = window.localStorage.getItem("statistics");
              if (statistics == null) {
                callback("createCharacter");
              } else {
                callback("selectLeader");
              }
            }
          });
        }
      } else {
        alert("switch to binance testnet");
        window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: window.ethers.utils.hexValue(97),
            chainName: "binance testnet",
            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
          },],
        });
      }
    }).catch(error => {
      console.error(error);
      alert("no chainId");
    });
  }).catch(error => {
    console.error(error);
    alert("connect account");
  });
}