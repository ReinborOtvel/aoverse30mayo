
"use strict";
let provider;
let account;
let signer;
let interfaceEmpty;
let statistics;
let head;
let armor;
let weapon;
function saveStatistics() {
    localStorage.setItem("statistics", JSON.stringify(statistics));
    location.href = location.href.replace("createCharacter", "chargingScreen");
}
function errorAlert(error, message) {
    console.error(error);
    alert(`Error, ${message}`);
}
function changeNetworkToBinance() {
    ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
            chainId: ethers.utils.hexValue(56),
            chainName: "binance",
            rpcUrls: ['https://bsc-dataseed.binance.org/'],
        },],
    }).catch(error => {
        console.error(error);
        alert("Error, change network to binance");
    });
    alert("network switch to binance testnet");
}
function randomName() {
    let name = "";
    for (let i = 0; i < 4; i++) {
        if (i % 2 == 0) {
            let letters = [..."qwrtypsdfghjklzxcvbnm"];
            let index = Math.floor(random(0, letters.length));
            name += letters[index];
        } else {
            let vowels = [..."aeiou"];
            let index = Math.floor(random(0, vowels.length));
            name += vowels[index];
        }
    }
    return name;
}
function createCharacter() {
    ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
            from: account,
            to: database.creator,
            value: ethers.utils.parseEther(database.ticket)._hex,
            chainId: ethers.utils.hexValue(56),
        }],
    })
        .then(() => saveStatistics())
        .catch(error => errorAlert(error, "create character"));
}
function preloadCharacter() {
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
function rollDice() {
    statistics = {
        name: randomName(),
        head: Math.round(random(0, 235)),
        armor: Math.round(random(0, 10)),
        weapon: Math.round(random(0, 6)),
        strength: Math.round(random(20, 100)),
        endurance: Math.round(random(20, 100)),
        health: Math.round(random(20, 100)),
        speed: Math.round(random(20, 100)),
    };
}
function canvasClick() {
    let canvas = document.querySelector("canvas");
    canvas.addEventListener("click", ({ x, y }) => {
        console.log(x, y);
        let verifyClick = (xInitial, yInitial, xEnd, yEnd) => {
            return x > xInitial && y > yInitial && x < xEnd && y < yEnd;
        };
        if (verifyClick(50, 278, 157, 304)) {
            rollDice();
            preloadCharacter();
        } else if (verifyClick(300, 276, 518, 304)) {
            createCharacter();
        }
    });
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
                if (chainId == 56) {
                    canvasClick();
                } else {
                    changeNetworkToBinance();
                }
            }).catch(error => errorAlert(error, "chain id"));
        }).catch(error => errorAlert(error, "accounts"));
    }
}
function preload() {
    rollDice();
    preloadCharacter();
    interfaceEmpty = loadImage("../assets/interfaceEmpty.png");
}
function setup() {
    createCanvas(640, 360);
    frameRate(30);
    startMetamask();
}
function draw() {
    noSmooth();
    textAlign(LEFT);
    textWrap(WORD);
    fill("#fff");
    textSize(30);
    image(interfaceEmpty, 0, 0, 640, 360);
    text("character", 30, 60);
    text(`name ${statistics.name}`, 30, 90);
    text(`strength ${statistics.strength}`, 30, 120);
    text(`endurance ${statistics.endurance}`, 30, 150);
    text(`health ${statistics.health}`, 30, 180);
    text(`speed ${statistics.speed}`, 30, 210);
    image(armor, 300, 40, 200, 200);
    image(head, 350, 40, 100, 100);
    image(weapon, 300, 40, 200, 200);
    text("roll dice", 50, 300);
    text("create character", 300, 300);
}