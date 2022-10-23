"use strict";
import database from "./database.js";
export default function (_callback) {
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
      if (_chainId == 97) {
        if (database.address == "") {
          _callback("database");
        } else {
          metamask.database = new ethers.Contract(database.address, database.abi, metamask.signer);
          const _user = metamask.account.toUpperCase();
          metamask.database.getAccount(metamask.account).then(_account => {
            const _owner = _account.owner.toUpperCase();
            if (_owner == _user) {
              _callback("game");
            } else {
              const _statistics = localStorage.getItem("statistics");
              if (_statistics == null) {
                _callback("createCharacter");
              } else {
                _callback("selectLeader");
              };
            };
          });
        };
      } else {
        alert("switch to binance testnet");
        ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: ethers.utils.hexValue(97),
            chainName: "binance testnet",
            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
          },],
        });
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