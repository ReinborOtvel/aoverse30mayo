"use strict";
export default function () {
  if (!window.navigator.onLine) return window.alert("connect to the internet");
  if (window.ethereum == undefined) return window.alert("download metamask");
  window.ethereum.on('chainChanged', () => {
    window.location.reload();
  });
  window.metamask = {};
  window.metamask.provider = new window.ethers.providers.Web3Provider(window.ethereum);
  window.metamask.provider.send("eth_requestAccounts", []).then(accounts => {
    window.metamask.account = accounts[0];
    window.metamask.signer = window.metamask.provider.getSigner();
    window.metamask.signer.getChainId().then(chainId => {
      if (chainId != 56) {
        window.alert("switch to binance");
        window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: window.ethers.utils.hexValue(56),
            chainName: "binance",
            rpcUrls: ['https://bsc-dataseed.binance.org/'],
          },],
        });
      } else {
        let statistics = window.localStorage.getItem("statistics");
        if (statistics == null) {
          window.player.loadImage(() => {
            window.canDraw = true;
          });
        } else {
          window.location.href = window.location.href.replace("createCharacter", "selectLeader");
        }
      }
    }).catch(error => {
      console.error(error);
      window.alert("no chainId");
    });
  }).catch(error => {
    console.error(error);
    window.alert("connect account");
  })
}