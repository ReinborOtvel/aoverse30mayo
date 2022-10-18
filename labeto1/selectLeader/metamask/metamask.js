"use strict";
import database from "../../js/database.js";
export default function () {
  if (!window.navigator.onLine) return window.alert("connect to the internet");
  if (window.ethereum == undefined) return window.alert("download metamask");
  window.ethereum.on('chainChanged', () => {
    window.location.reload();
  });
  window.metamask = {};
  window.metamask.provider = new window.ethers.providers.Web3Provider(window.ethereum);
  window.metamask.provider.send("eth_requestAccounts", []).then(accounts => {
    window.metamask.account = accounts[0];
    window.metamask.signer = window.metamask.provider.getSigner();
    window.metamask.signer.getChainId().then(chainId => {
      if (chainId != 97) {
        window.alert("switch to binance testnet");
        window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: window.ethers.utils.hexValue(97),
            chainName: "binance testnet",
            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
          },],
        });
      } else {
        if (database.address == "") {
          window.location.href = window.location.href.replace("selectLeader", "database");
        } else {
          window.metamask.database = new window.ethers.Contract(database.address, database.abi, window.metamask.signer);
          window.metamask.database.getAccount(window.metamask.account).then(account => {
            let owner = account.owner.toUpperCase();
            let user = window.metamask.account.toUpperCase();
            if (owner == user) {
              window.location.href = window.location.href.replace("selectLeader", "game");
            } else {
              window.metamask.database.allAccounts().then(accounts => {
                window.membership.count(accounts);
                window.leaders.available(accounts);
              });
            }
          });
        }
      }
    }).catch(error => {
      console.error(error);
      window.alert("no chainId");
    });
  }).catch(error => {
    console.error(error);
    window.alert("connect account");
  })
}