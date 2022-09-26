"use strict";
import database from "./database.js";
import Statistics from "./player/Statistics.js";
export default class {
  setup() {
    if (navigator.onLine == false) {
      return;
    } if (window.ethereum == undefined) {
      return;
    } else {
      ethereum.on('chainChanged', () => {
        location.reload();
      });
      metamask.provider = new ethers.providers.Web3Provider(ethereum);
      metamask.provider.send("eth_requestAccounts", []).then(accounts => {
        metamask.account = accounts[0];
        metamask.signer = metamask.provider.getSigner();
        metamask.signer.getChainId().then(chainId => {
          if (chainId == 97) {
            if (database.address == "") {
              metamask.createDatabase();
            } else {
              metamask.database = new ethers.Contract(database.address, database.abi, metamask.signer);
              metamask.verify();
            }
          } else if (chainId == 56) {
            if (localStorage.getItem("createCharacter") == "true") {
              localStorage.removeItem("createCharacter");
              data.setPage("createCharacter", 1);
            } else {
              metamask.testnet();
            }
          } else {
            metamask.testnet();
          }
        });
      });
    }
  }
  createDatabase() {
    let statistics = JSON.stringify(new Statistics());
    let factory = new ethers.ContractFactory(database.abi, database.bytecode, metamask.signer);
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
    metamask.database.getAccount(metamask.account).then(_account => {
      let owner = _account.owner.toUpperCase();
      let account = metamask.account.toUpperCase();
      if (owner == account) {
        data.setPage("game", 20);
      } else {
        data.statistics = JSON.parse(localStorage.getItem("statistics"));
        if (data.statistics == null) {
          localStorage.setItem("createCharacter", "true");
          metamask.binance();
        } else {
          data.setPage("selectLeader", 1);
        }
      }
    });
  }
}