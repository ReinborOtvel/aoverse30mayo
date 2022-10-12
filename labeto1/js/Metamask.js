"use strict";
import database from "./database.js";
import Statistics from "./player/Statistics.js";
export default {
  setup() {
    window.data.setPage("createCharacter", 1);
    if (!window.navigator.onLine) {
      return;
    }
    if (window.ethereum == undefined) {
      return;
    }
    window.ethereum.on('chainChanged', () => {
      window.location.reload();
    });
    window.data.metamask.provider = new window.ethers.providers.Web3Provider(window.ethereum);
    window.data.metamask.provider.send("eth_requestAccounts", []).then(accounts => {
      window.data.metamask.account = accounts[0];
      window.data.metamask.signer = window.data.metamask.provider.getSigner();
      window.data.metamask.signer.getChainId().then(chainId => {
        switch (chainId) {
          case 97:
            window.data.metamask.chainId97();
            break;
          case 56:
            window.data.metamask.chainId56();
            break;
          default:
            window.data.metamask.testnet();
            break;
        }
      });
    });
  },
  chainId56() {
    let createCharacter = window.localStorage.getItem("createCharacter");
    if (createCharacter == "true") {
      window.localStorage.removeItem("createCharacter");
      window.data.setPage("createCharacter", 1);
    } else {
      window.data.metamask.testnet();
    }
  },
  chainId97() {
    if (database.address == "") {
      window.data.metamask.createDatabase();
    } else {
      window.data.metamask.database = new window.ethers.Contract(database.address, database.abi, window.data.metamask.signer);
      window.data.metamask.verify();
    }
  },
  createDatabase() {
    let statistics = JSON.stringify(Statistics());
    let factory = new window.ethers.ContractFactory(database.abi, database.bytecode, window.data.metamask.signer);
    factory.deploy(database.creator, statistics).then(contract => {
      console.log(contract);
    });
  },
  binance() {
    window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: window.ethers.utils.hexValue(56),
        chainName: "binance",
        rpcUrls: ['https://bsc-dataseed.binance.org/'],
      },],
    });
  },
  testnet() {
    window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: window.ethers.utils.hexValue(97),
        chainName: "binance testnet",
        rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
      },],
    });
  },
  verify() {
    window.data.metamask.database.getAccount(window.data.metamask.account).then(({ owner }) => {
      owner = owner.toUpperCase();
      let account = window.data.metamask.account.toUpperCase();
      if (owner == account) {
        window.data.setPage("game", 20);
      } else {
        let statistics = window.localStorage.getItem("statistics");
        window.data.statistics = JSON.parse(statistics);
        if (window.data.statistics == null) {
          window.localStorage.setItem("createCharacter", "true");
          window.data.metamask.binance();
        } else {
          window.data.setPage("selectLeader", 1);
        }
      }
    });
  }
}