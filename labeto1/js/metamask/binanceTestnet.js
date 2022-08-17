"use strict";
export default function BinanceTestnet() {
  ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [{
      chainId: ethers.utils.hexValue(97),
      chainName: "binance testnet",
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
    },],
  }).catch(() => alert("error, change network to binance testnet"));
}