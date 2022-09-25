"use strict";
import database from "./database.js";
import Statistics from "./player/Statistics.js";
export default class {
  setup() {
    if (navigator.onLine == false) {
      data.error = "no internet";
    } else if (window.ethereum == undefined) {
      data.error = "download metamask";
    } else {
      metamask.account(() => {
        metamask.chainId(() => {
          metamask.load();
        });
      });
    }
  }
  account(callback) {
    metamask.provider = new ethers.providers.Web3Provider(ethereum);
    metamask.provider.send("eth_requestAccounts", []).then(accounts => {
      metamask.account = accounts[0];
      callback();
    }).catch(error => {
      console.error(error);
      data.error = "error, accounts";
    });
  }
  chainId(callback) {
    metamask.signer = metamask.provider.getSigner();
    metamask.signer.getChainId().then(chainId => {
      metamask.chainId = chainId;
      callback();
    }).catch(error => {
      console.error(error);
      data.error = "error, chain id";
    });
  }
  createDatabase() {
    let statistics = JSON.stringify(new Statistics());
    let factory = new ethers.ContractFactory(database.abi, database.bytecode, metamask.signer);
    factory.deploy(database.creator, statistics).then(contract => {
      console.log(contract);
    }).catch(error => {
      console.error(error);
      data.error = "error, create database";
    });
  }
  database(callback) {
    if (database.address == "") {
      metamask.createDatabase();
    } else {
      metamask.database = new ethers.Contract(database.address, database.abi, metamask.signer);
      callback();
    }
  }
  binance(callback) {
    ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: ethers.utils.hexValue(56),
        chainName: "binance",
        rpcUrls: ['https://bsc-dataseed.binance.org/'],
      },],
    }).then(() => {
      callback();
    }).catch(error => {
      console.error(error);
      data.error = "error, change network to binance";
    });
  }
  testnet(callback) {
    ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: ethers.utils.hexValue(97),
        chainName: "binance testnet",
        rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
      },],
    }).then(() => {
      callback();
    }).catch(error => {
      console.error(error);
      data.error = "error, change network to binance testnet";
    });
  }
  load() {
    if (metamask.chainId == 97) {
      metamask.database(() => {
        metamask.verify();
      });
    } else {
      metamask.testnet(() => {
        location.reload();
      });
    }
  }
  verify() {
    metamask.database.getAccount(metamask.account).then(_account => {
      let owner = _account.owner.toUpperCase();
      let account = metamask.account.toUpperCase();
      if (owner == account) {
        data.setPage("game", 20);
      } else {
        data.statistics = JSON.parse(localStorage.getItem("statistics"));
        if (data.statistics == null) {
          metamask.binance(() => {
            data.setPage("createCharacter", 1);
          });
        } else {
          data.setPage("selectLeader", 1);
        }
      }
    });
  }

}