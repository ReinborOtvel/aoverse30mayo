export default function agregarRed(chainId) {
    let chainName = "Binance";
    let rpcUrls = ['https://bsc-dataseed.binance.org/'];
    if (chainId === 97) {
        chainName = "BinanceTestnet";
        rpcUrls = ['https://data-seed-prebsc-1-s1.binance.org:8545/'];
    }
    ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
            chainId: ethers.utils.hexValue(chainId),
            chainName,
            rpcUrls,
        },],
    }).catch(e => {
        console.error(e);
        alert("Error, agregar red");
    });
}