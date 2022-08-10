class Metamask {
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
    preload(callback) {
        if (navigator.onLine == false) {
            alert("no internet");
        } else if (window.ethereum == undefined) {
            alert("download Metamask");
        } else {
            this.information = JSON.parse(getItem("information"));
            this.provider = new ethers.providers.Web3Provider(ethereum);
            ethereum.on('accountsChanged', () => location.reload());
            ethereum.on('chainChanged', () => location.reload());
            this.provider.send("eth_requestAccounts", []).then(accounts => {
                this.account = accounts[0];
                this.signer = this.provider.getSigner();
                this.signer.getChainId().then(chainId => {
                    if (chainId == 97) {
                        this.statistics = this.information.statistics[this.account.toUpperCase()];
                        callback();
                    } else {
                        this.changeNetworkToBinanceTestnet();
                    }
                }).catch(() => alert("error, chain id"));
            }).catch(() => alert("error, accounts"));
        }
    }
}