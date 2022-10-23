"use strict";
import _database from "../../js/database.js";
export default function () {
  if (!navigator.onLine) {
    alert("connect to the internet");
    return;
  }; if (window.ethereum == undefined) {
    alert("download metamask");
    return;
  };
  ethereum.on('chainChanged', () => {
    location.reload();
  });
  window.metamask = {};
  metamask.provider = new ethers.providers.Web3Provider(ethereum);
  metamask.provider.send("eth_requestAccounts", []).then(_accounts => {
    metamask.account = _accounts[0];
    metamask.signer = metamask.provider.getSigner();
    metamask.signer.getChainId().then(_chainId => {
      if (_chainId != 97) {
        alert("switch to binance testnet");
        ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: ethers.utils.hexValue(97),
            chainName: "binance testnet",
            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
          },],
        });
      } else {
        if (_database.address == "") {
          location.href = location.href.replace("selectLeader", "database");
        } else {
          metamask.database = new ethers.Contract(_database.address, _database.abi, metamask.signer);
          metamask.database.getAccount(metamask.account).then(_account => {
            const _owner = _account.owner.toUpperCase();
            const _user = metamask.account.toUpperCase();
            if (_owner == _user) {
              location.href = location.href.replace("selectLeader", "game");
            } else {
              metamask.database.allAccounts().then(_accounts => {
                membership.count(_accounts);
                leaders.available(_accounts);
              });
            };
          });
        };
      };
    }).catch(_error => {
      console.error(_error);
      alert("no chainId");
    });
  }).catch(_error => {
    console.error(_error);
    alert("connect account");
  });
};