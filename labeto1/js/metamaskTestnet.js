"use strict";
export default function () {
  ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [{
      chainId: ethers.utils.hexValue(97),
      chainName: "binance testnet",
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
    },],
  }).catch(error => {
    console.error(error);
    alert("error, change network to binance testnet");
  });
}