export default function cambiarRed(chainId) {
    ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{
            chainId: ethers.utils.hexValue(chainId),
        }],
    }).then(window.location.reload)
        .catch(e => {
            console.error(e);
            alert("Error, cambiar red");
        });
}