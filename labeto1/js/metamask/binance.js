export default function Binance() {
  ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [{
      chainId: ethers.utils.hexValue(56),
      chainName: "binance",
      rpcUrls: ['https://bsc-dataseed.binance.org/'],
    },],
  }).catch(() => alert("error, change network to binance"));
}