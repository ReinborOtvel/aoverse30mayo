"use strict";
class Metamask {
  changeNetworkToBinance() {
    ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: ethers.utils.hexValue(56),
        chainName: "binance",
        rpcUrls: ['https://bsc-dataseed.binance.org/'],
      },],
    }).catch(() => alert("error, change network to binance"));
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
          if (chainId == 56) {
            callback();
            return;
          }
          this.changeNetworkToBinance();
        }).catch(() => alert("error, chain id"));
      }).catch(() => alert("error, accounts"));
    }
  }
}