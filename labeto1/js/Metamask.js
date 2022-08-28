"use strict";
import databaseInformation from "./databaseInformation.js";
export default class {
    start() {
        if (navigator.onLine == false) {
            this.noInternet();
        } else if (window.ethereum == undefined) {
            alert(" download metamask ");
        } else {
            this.getAccount(() => {
                this.getChainId(() => {
                    this.load();
                });
            });
        }
    }
    noInternet() {
        data.account = localStorage.getItem("account");
        data.information = JSON.parse(localStorage.getItem("information"));
        if (data.account == null || data.information == null) {
            alert("no internet");
        } else {
            data.statistics = data.information.statistics[data.account.toUpperCase()];
            data.page("game", 20);
        }
    }
    getAccount(callback) {
        data.provider = new ethers.providers.Web3Provider(ethereum);
        data.provider.send("eth_requestAccounts", []).then(accounts => {
            data.account = accounts[0];
            localStorage.setItem("account", data.account);
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
            callback();
        }
    }
    getInformation(callback) {
        data.database.get().then(text => {
            localStorage.setItem("information", text);
            callback();
        }).catch(error => {
            console.error(error);
            alert("error, database information");
        });
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
    date(callback) {
        let date = new Date();
        let old = localStorage.getItem("date")
        if (old == null) callback(true);
        else {
            old = new Date(old);
            let get = old.getDay() == date.getDay() && old.getHours() == date.getHours();
            callback(!get);
        }
    }
    load() {
        this.date(get => {
            if (data.chainId == 97) {
                this.database(() => {
                    if (get == true) {
                        this.getInformation(() => {
                            localStorage.setItem("date", new Date());
                            this.verify();
                        });
                    } else this.verify();
                })
            } else if (get == true) this.testnet(() => location.reload());
            else {
                this.verify();
            }
        });
    }
    verify() {
        data.information = JSON.parse(localStorage.getItem("information"));
        data.statistics = data.information.statistics[data.account.toUpperCase()];
        let statistics = JSON.parse(localStorage.getItem("statistics"));
        if (data.statistics != undefined) this.testnet(() => data.page("game", 20));
        else if (statistics == null) this.binance(() => data.page("createCharacter", 1));
        else {
            data.statistics = statistics;
            this.testnet(() => data.page("enterGroup", 1));
        }
    }

}