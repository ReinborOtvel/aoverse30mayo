"use strict";
let statistics = JSON.parse(localStorage.getItem("statistics"));
let information = JSON.parse(localStorage.getItem("information"));
let interfaceEmpty;
let provider;
let signer;
let account;
let leader;
let head;
let armor;
let weapon;
function electGroupLeader() {
    leader = prompt("leader direction:");
    if (leader == null || leader.length == 0) {
        alert("empty leader");
        return;
    }
    leader = leader.toUpperCase();
    if (information.groups[leader].length <= 4) {
        information.leaders[account.toUpperCase()] = leader;
        information.groups[leader].push(account.toUpperCase());
        information.groups[account.toUpperCase()] = [];
    } else {
        alert("the group is full");
    }
}
function defaultGroup() {
    for (leader in information.leaders) {
        if (information.groups[leader].length <= 4) {
            information.leaders[account.toUpperCase()] = leader;
            information.groups[leader].push(account.toUpperCase());
            information.groups[account.toUpperCase()] = [];
            break;
        }
    }
    if (information.leaders[account.toUpperCase()] == undefined) {
        alert("no groups available");
    }
}
function canvasClick() {
    let canvas = document.querySelector("canvas");
    canvas.addEventListener("click", ({ x, y }) => {
        console.log(x, y);
        let verifyClick = (xInitial, yInitial, xEnd, yEnd) => {
            return x > xInitial && y > yInitial && x < xEnd && y < yEnd;
        };
    });
}
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
                    defaultGroup();
                    canvasClick();
                } else {
                    changeNetworkToBinanceTestnet();
                }
            }).catch(error => errorAlert(error, "chain id"));
        }).catch(error => errorAlert(error, "accounts"));
    }
}
function preload() {
    interfaceEmpty = loadImage("../assets/interfaceEmpty.png");
    loadImage(`../assets/player/head/${statistics.head}.png`, (img) => {
        head = img.get(0, 0, 17, 17);
    });
    loadImage(`../assets/player/armor/${statistics.armor}.png`, (img) => {
        armor = img.get(0, 0, 25, 45);
    });
    loadImage(`../assets/player/weapon/${statistics.weapon}.png`, (img) => {
        weapon = img.get(0, 0, 25, 45);
    });
}
function setup() {
    createCanvas(640, 360);
    frameRate(4);
    startMetamask();
}
function draw() {
    noSmooth();
    textAlign(LEFT);
    textWrap(WORD);
    fill("#fff");
    textSize(30);
    image(interfaceEmpty, 0, 0, 640, 360);
    text("group", 30, 60);
    text(`leader ${leader}`, 30, 90);
    image(armor, 300, 40, 200, 200);
    image(head, 350, 40, 100, 100);
    image(weapon, 300, 40, 200, 200);
}