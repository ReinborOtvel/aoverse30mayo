"use strict";
export default class {
    start() {
        if (navigator.onLine == false) {
            alert(" no internet ");
        } else if (window.ethereum == undefined) {
            alert(" download metamask ");
        } else {
            data.provider = new ethers.providers.Web3Provider(ethereum);
            data.provider.send("eth_requestAccounts", []).then(accounts => {
                data.account = accounts[0];
                data.signer = data.provider.getSigner();
                ethereum.on('accountsChanged', () => location.reload());
                ethereum.on('chainChanged', () => location.reload());
                data.signer.getChainId().then(chainId => {
                    data.chainId = chainId;
                    if (chainId == 97) {
                        getInfo(() => {

                        });
                    }
                }).catch(error => {
                    console.error(error);
                    alert(" error, chain id ");
                });
            }).catch(error => {
                console.error(error);
                alert(" error, accounts ");
            });
        }
    }
    create() {
        if (data.chainId != 97) {
            Testnet();
        } else {
            let information = { statistics: {}, leaders: {}, groups: {} };
            let creator = info.creator.toUpperCase();
            information.statistics[creator] = Statistics();
            information.leaders[creator] = creator;
            information.groups[creator] = [];
            let text = JSON.stringify(information);
            let factory = new ethers.ContractFactory(info.abi, info.bytecode, data.signer);
            factory.deploy(text).then(contract => {
                console.log(contract);
            }).catch(error => {
                console.error(error);
                data.alert = " error, create database ";
            });
        }
    }
    get(callback) {
        if (info.address == "") {
            Create();
            return;
        }
        data.database = new ethers.Contract(info.address, info.abi, data.signer);
        data.database.get().then(text => {
            engine.storeItem("info", text);
            Verify();
        }).catch(error => {
            console.error(error);
            alert("error, database information");
        });
    }
    verify() {
        let text = engine.getItem("info");
        if (text == null) {
            Testnet();
            return;
        }
        data.info = JSON.parse(text);
        let account = data.account.toUpperCase();
        data.statistics = data.info.statistics[account];
        if (data.statistics != undefined) {
            Page("game");
            return;
        }
        data.statistics = engine.getItem("statistics");
        if (data.statistics == null) {
            Page("createCharacter");
            return;
        }
        data.statistics = JSON.parse(data.statistics);
        Page("enterGroup");
    }
    binance() {
        ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: ethers.utils.hexValue(56),
                chainName: "binance",
                rpcUrls: ['https://bsc-dataseed.binance.org/'],
            },],
        }).catch(error => {
            console.error(error);
            alert("error, change network to binance");
        });
    }
    testnet() {
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
}