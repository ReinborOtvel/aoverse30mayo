"use strict";
class Metamask {
  changeNetworkToBinanceTestnet() {
    ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: ethers.utils.hexValue(97),
        chainName: "binance testnet",
        rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
      },],
    }).catch(() => alert("error, change network to binance testnet"));
  }
  preload() {
    if (navigator.onLine == false) {
      alert("no internet");
    } else if (window.ethereum == undefined) {
      alert("download Metamask");
    } else {
      this.provider = new ethers.providers.Web3Provider(ethereum);
      this.provider.send("eth_requestAccounts", []).then(accounts => {
        this.account = accounts[0];
        this.signer = this.provider.getSigner();
        ethereum.on('accountsChanged', () => location.reload());
        ethereum.on('chainChanged', () => location.reload());
        this.signer.getChainId().then(chainId => {
          if (chainId == 97) {
            this.getInformation();
            return;
          } if (chainId == 56) {
            this.verifyInformation();
            return;
          }
          this.changeNetworkToBinanceTestnet();
        }).catch(() => alert("error, chain id"));
      }).catch(() => alert("error, accounts"));
    }
  }
  createDatabase() {
    let information = { statistics: {}, leaders: {}, groups: {} };
    let creator = database.creator.toUpperCase();
    information.statistics[creator] = {
      name: "creator",
      head: Math.round(random(0, 235)),
      armor: Math.round(random(0, 10)),
      weapon: Math.round(random(0, 6)),
      strength: Math.round(random(20, 100)),
      endurance: Math.round(random(20, 100)),
      health: Math.round(random(20, 100)),
      speed: Math.round(random(20, 100)),
    };
    information.leaders[creator] = creator;
    information.groups[creator] = [];
    let text = JSON.stringify(information);
    let factory = new ethers.ContractFactory(database.abi, database.bytecode, this.signer);
    factory.deploy(text).then(contract => {
      print(contract);
    }).catch(() => alert("error, create database"));
  }
  getInformation() {
    if (database.address == "") {
      this.createDatabase();
      return;
    }
    this.database = new ethers.Contract(database.address, database.abi, this.signer);
    this.database.get().then(text => {
      storeItem("information", text);
      this.verifyInformation();
    }).catch(() => alert("error, database information"));
  }
  verifyInformation() {
    let text = getItem("information");
    if (text == null) {
      this.changeNetworkToBinanceTestnet();
      return;
    }
    let information = JSON.parse(text);
    let account = this.account.toUpperCase();
    if (information.statistics[account] == undefined) {
      let statistics = getItem("statistics");
      if (statistics == null) {
        location.href = location.href.replace("chargingScreen", "createCharacter");
        return;
      }
      location.href = location.href.replace("chargingScreen", "enterGroup");
      return;
    }
    location.href = location.href.replace("chargingScreen", "game");
  }
}