"use strict";
import databaseInformation from "./databaseInformation.js";
export default class {
    start() {
        if (navigator.onLine == false) {
            alert(" no internet ");
        } else if (window.ethereum == undefined) {
            alert(" download metamask ");
        } else {
            this.getAccount(() => {
                this.getChainId(() => {
                    if (data.chainId == 97) {
                        this.verify();
                    } else {
                        this.testnet(() => location.reload());
                    }
                });
            });
        }
    }
    getAccount(callback) {
        data.provider = new ethers.providers.Web3Provider(ethereum);
        data.provider.send("eth_requestAccounts", []).then(accounts => {
            data.account = accounts[0];
            callback();
        }).catch(error => {
            console.error(error);
            alert(" error, accounts ");
        });
    }
    getChainId(callback) {
        data.signer = data.provider.getSigner();
        data.signer.getChainId().then(chainId => {
            data.chainId = chainId;
            callback();
        }).catch(error => {
            console.error(error);
            alert(" error, chain id ");
        });
    }
    createDatabase() {
        let information = { statistics: {}, leaders: {}, groups: {} };
        let creator = databaseInformation.creator.toUpperCase();
        information.statistics[creator] = Statistics();
        information.leaders[creator] = creator;
        information.groups[creator] = [];
        let text = JSON.stringify(information);
        let factory = new ethers.ContractFactory(databaseInformation.abi, databaseInformation.bytecode, data.signer);
        factory.deploy(text).then(contract => {
            console.log(contract);
        }).catch(error => {
            console.error(error);
            alert("error, create database");
        });
    }
    database(callback) {
        if (databaseInformation.address == "") {
            this.createDatabase();
        } else {
            data.database = new ethers.Contract(databaseInformation.address, databaseInformation.abi, data.signer);
            data.database.get().then(text => {
                engine.storeItem("information", text);
                callback();
            }).catch(error => {
                console.error(error);
                alert("error, database information");
            });
        }
    }
    binance(callback) {
        ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: ethers.utils.hexValue(56),
                chainName: "binance",
                rpcUrls: ['https://bsc-dataseed.binance.org/'],
            },],
        }).then(() => {
            callback();
        }).catch(error => {
            console.error(error);
            alert("error, change network to binance");
        });
    }
    testnet(callback) {
        ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: ethers.utils.hexValue(97),
                chainName: "binance testnet",
                rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
            },],
        }).then(() => {
            callback();
        }).catch(error => {
            console.error(error);
            alert("error, change network to binance testnet");
        });
    }
    verify() {
        this.database(() => {
            data.information = JSON.parse(engine.getItem("information"));
            let account = data.account.toUpperCase();
            data.statistics = data.information.statistics[account];
            if (data.statistics == undefined) {
                data.statistics = engine.getItem("statistics");
                if (data.statistics == null) {
                    this.binance(() => {
                        data.page("createCharacter", 1);
                    });
                } else {
                    data.statistics = JSON.parse(data.statistics);
                    data.page("enterGroup", 1);
                }
            } else {
                data.page("game", 20);
            }
        });
    }

}