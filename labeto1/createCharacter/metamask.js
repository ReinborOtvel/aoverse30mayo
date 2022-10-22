"use strict";
export default function () {
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
  sketch.metamask = {};
  sketch.metamask.provider = new ethers.providers.Web3Provider(ethereum);
  sketch.metamask.provider.send("eth_requestAccounts", []).then(accounts => {
    sketch.metamask.account = accounts[0];
    sketch.metamask.signer = sketch.metamask.provider.getSigner();
    sketch.metamask.signer.getChainId().then(chainId => {
      if (chainId != 56) {
        alert("switch to binance");
        ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: ethers.utils.hexValue(56),
            chainName: "binance",
            rpcUrls: ['https://bsc-dataseed.binance.org/'],
          },],
        });
      } else {
        const statistics = localStorage.getItem("statistics");
        if (statistics == null) {
          sketch.player.loadImage(() => {
            sketch.canDraw = true;
          });
        } else {
          location.href = location.href.replace("createCharacter", "selectLeader");
        };
      };
    }).catch(error => {
      console.error(error);
      alert("no chainId");
    });
  }).catch(error => {
    console.error(error);
    alert("connect account");
  });
};