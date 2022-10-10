"use strict";
import database from "./database.js";
import Statistics from "./player/Statistics.js";
export default class {
  constructor() {
    window.ethereum.on('chainChanged', () => {
      window.location.reload();
    });
    this.provider = new window.ethers.providers.Web3Provider(window.ethereum);
    this.provider.send("eth_requestAccounts", []).then(accounts => {
      this.account = accounts[0];
      this.signer = this.provider.getSigner();
      this.signer.getChainId().then(chainId => {
        switch (chainId) {
          case 97:
            this.chainId97();
            break;
          case 56:
            this.chainId56();
            break;
          default:
            this.testnet();
            break;
        }
      });
    });
  }
  chainId56() {
    let createCharacter = window.localStorage.getItem("createCharacter");
    if (createCharacter == "true") {
      window.localStorage.removeItem("createCharacter");
      window.data.setPage("createCharacter", 1);
    } else {
      this.testnet();
    }
  }
  chainId97() {
    if (database.address == "") {
      this.createDatabase();
    } else {
      this.database = new window.ethers.Contract(database.address, database.abi, this.signer);
      this.verify();
    }
  }
  createDatabase() {
    let statistics = JSON.stringify(Statistics());
    let factory = new ethers.ContractFactory(database.abi, database.bytecode, this.signer);
    factory.deploy(database.creator, statistics).then(contract => {
      console.log(contract);
    });
  }
  binance() {
    ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: ethers.utils.hexValue(56),
        chainName: "binance",
        rpcUrls: ['https://bsc-dataseed.binance.org/'],
      },],
    });
  }
  testnet() {
    ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: ethers.utils.hexValue(97),
        chainName: "binance testnet",
        rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
      },],
    });
  }
  verify() {
    this.database.getAccount(this.account).then(({ owner }) => {
      owner = owner.toUpperCase();
      let account = this.account.toUpperCase();
      if (owner == account) {
        window.data.setPage("game", 20);
      } else {
        let statistics = window.localStorage.getItem("statistics");
        window.data.statistics = JSON.parse(statistics);
        if (window.data.statistics == null) {
          window.localStorage.setItem("createCharacter", "true");
          this.binance();
        } else {
          window.data.setPage("selectLeader", 1);
        }
      }
    });
  }
}