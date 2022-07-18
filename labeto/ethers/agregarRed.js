import cambiarRed from "./cambiarRed.js";
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
    }).then(() => cambiarRed(chainId))
        .catch(e => {
            console.error(e);
            alert("Error, agregar red");
        });
}