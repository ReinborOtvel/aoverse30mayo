"use strict";
class Metamask {
  constructor() {
    this.savedInformation = false;
  }
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
  assignStats() {
    this.statistics = JSON.parse(getItem("statistics"));
    let account = this.account.toUpperCase();
    for (let leader in this.information.leaders) {
      if (this.information.groups[leader].length <= 4) {
        this.information.statistics[account] = this.statistics;
        this.information.leaders[account] = leader;
        this.information.groups[leader].push(account);
        this.information.groups[account] = [];
        break;
      }
    }
    if (this.information.leaders[account] == undefined) {
      alert("no groups available");
    }
  }
  preload(callback) {
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
            this.information = JSON.parse(getItem("information"));
            this.database = new ethers.Contract(database.address, database.abi, this.signer);
            this.assignStats();
            callback();
          } else {
            this.changeNetworkToBinanceTestnet();
          }
        }).catch((e) => { console.error(e); alert("error, chain id"); });
      }).catch(() => alert("error, accounts"));
    }
  }
  saveInformation() {
    this.savedInformation = true;
    let text = JSON.stringify(this.information);
    this.database.set(text).then(() => {
      alert("you joined the group, wait 5 seconds");
      localStorage.removeItem("statistics");
      setTimeout(() => {
        location.href = location.href.replace("enterGroup", "chargingScreen");
      }, 5000);
    }).catch(() => {
      this.savedInformation = false;
      alert("error, join the group");
    });
  }
}