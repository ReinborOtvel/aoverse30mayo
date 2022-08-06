"use strict";
let provider;
let account;
let signer;
let information;
let loadingScreens = [];
let index = 0;
function errorAlert(error, message) {
    console.error(error);
    alert(`Error, ${message}`);
}
function changeNetworkToBinanceTestnet() {
    ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
            chainId: ethers.utils.hexValue(97),
            chainName: "binance testnet",
            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
        },],
    }).catch(error => errorAlert(error, "change network to binance testnet"));
}
function createDatabase() {
    let newInformation = { statistics: {}, leaders: {}, groups: {} };
    let uppercaseCreator = database.creator.toUpperCase();
    newInformation.statistics[uppercaseCreator] = {
        name: "creator",
        head: Math.round(random(0, 235)),
        armor: Math.round(random(0, 10)),
        weapon: Math.round(random(0, 6)),
        strength: Math.round(random(20, 100)),
        endurance: Math.round(random(20, 100)),
        health: Math.round(random(20, 100)),
        speed: Math.round(random(20, 100)),
    };
    newInformation.leaders[uppercaseCreator] = uppercaseCreator;
    newInformation.groups[uppercaseCreator] = [];
    let informationJSON = JSON.stringify(newInformation);
    let factoryContractDatabase = new ethers.ContractFactory(database.abi, database.bytecode, signer);
    factoryContractDatabase.deploy(informationJSON).then(contract => {
        console.log(contract);
    }).catch(error => errorAlert(error, "create database"));
}
function verifyInformation() {
    let informationJSON = localStorage.getItem("information");
    if (informationJSON == null) {
        changeNetworkToBinanceTestnet();
    } else {
        information = JSON.parse(informationJSON);
        let capitalAccount = account.toUpperCase();
        if (information.statistics[capitalAccount] == undefined) {
            let statisticsJSON = localStorage.getItem("statistics");
            if (statisticsJSON == null) {
                location.href = location.href.replace("chargingScreen", "createCharacter");
            } else {
                location.href = location.href.replace("chargingScreen", "enterGroup");
            }
        } else {
            location.href = location.href.replace("chargingScreen", "game");
        }
    }
}
function getInformation() {
    if (database.address == "") {
        createDatabase();
    } else {
        database.contract = new ethers.Contract(database.address, database.abi, signer);
        database.contract.get().then(informationJSON => {
            localStorage.setItem("information", informationJSON);
            verifyInformation();
        }).catch(error => errorAlert(error, "database information"));
    }
}
function startMetamask() {
    if (navigator.onLine == false) {
        alert("no internet");
    } else if (window.ethereum == undefined) {
        alert("download Metamask");
    } else {
        provider = new ethers.providers.Web3Provider(ethereum);
        ethereum.on('accountsChanged', () => location.reload());
        ethereum.on('chainChanged', () => location.reload());
        provider.send("eth_requestAccounts", []).then(accounts => {
            account = accounts[0];
            signer = provider.getSigner();
            signer.getChainId().then(chainId => {
                if (chainId == 97) {
                    getInformation();
                } else if (chainId == 56) {
                    verifyInformation();
                } else {
                    changeNetworkToBinanceTestnet();
                }
            }).catch(error => errorAlert(error, "chain id"));
        }).catch(error => errorAlert(error, "accounts"));
    }
}
function preload() {
    for (let i = 0; i <= 7; i++) {
        let src = `../assets/loadingScreens/${i}.png`;
        let chargingScreen = loadImage(src);
        loadingScreens[i] = chargingScreen;
    }
}
function setup() {
    createCanvas(640, 360);
    frameRate(4);
    setInterval(() => {
        if (index < loadingScreens.length - 1) {
            index++;
        }
        if (index == 2) {
            startMetamask();
        }
    }, 2000);
}
function draw() {
    noSmooth();
    image(loadingScreens[index], 0, 0, 640, 360);
}