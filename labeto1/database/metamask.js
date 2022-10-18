"use strict";
import database from "../js/database.js";
import Statistics from "./statistics.js";
export default function () {
  if (!window.navigator.onLine) return alert("connect to the internet");
  if (window.ethereum == undefined) return alert("download metamask");
  window.ethereum.on('chainChanged', () => {
    window.location.reload();
  });
  let provider = new window.ethers.providers.Web3Provider(window.ethereum);
  provider.send("eth_requestAccounts", []).then(accounts => {
    let account = accounts[0];
    let signer = provider.getSigner();
    signer.getChainId().then(chainId => {
      if (chainId != 97) {
        alert("switch to binance testnet");
        window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: window.ethers.utils.hexValue(97),
            chainName: "binance testnet",
            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
          },],
        });
      } else {
        let factory = new window.ethers.ContractFactory(database.abi, database.bytecode, signer);
        let statistics = JSON.stringify(Statistics());
        factory.deploy(database.creator, statistics).then(contract => {
          console.log(contract);
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