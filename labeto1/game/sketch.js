"use strict";
let information = JSON.parse(localStorage.getItem("information"));
let uploadedImages = false;

let errorAlert = (error, message) => {
    console.error(error);
    alert(`Error, ${message}`);
};

let metamask = {};
metamask.changeNetworkToBinanceTestnet = () => {
    ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
            chainId: ethers.utils.hexValue(97),
            chainName: "binance testnet",
            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
        },],
    }).catch(error => errorAlert(error, "change network to binance testnet"));
};
metamask.start = () => {
    if (navigator.onLine == false) {
        alert("no internet");
    } else if (window.ethereum == undefined) {
        alert("download Metamask");
    } else {
        metamask.provider = new ethers.providers.Web3Provider(ethereum);
        ethereum.on('accountsChanged', () => location.reload());
        ethereum.on('chainChanged', () => location.reload());
        metamask.provider.send("eth_requestAccounts", []).then(accounts => {
            metamask.account = accounts[0];
            metamask.capitalizedAccount = metamask.account.toUpperCase();
            metamask.signer = metamask.provider.getSigner();
            metamask.signer.getChainId().then(chainId => {
                if (chainId == 97) {
                    character.getStatistics();
                } else {
                    metamask.changeNetworkToBinanceTestnet();
                }
            }).catch(error => errorAlert(error, "chain id"));
        }).catch(error => errorAlert(error, "accounts"));
    }
};

let character = {};
character.x = 640 / 2;
character.y = 360 / 2;
character.width = 100;
character.height = 100;
character.head = {};
character.armor = {};
character.weapon = {};
character.head.preload = () => {
    loadImage(`../assets/player/head/${character.statistics.head}.png`, (image) => {
        let animations = ["down", "right", "left", "up"];
        let width = 17;
        let height = 17;
        for (let imageIndex in animations) {
            let animation = animations[imageIndex];
            let x = width * imageIndex;
            character.head[animation] = image.get(x, 0, width, height);
        }
    });
}
character.head.draw = () => {
    image(
        character.head[character.animation],
        character.x,
        character.y,
        character.width,
        character.height
    );
}
character.armor.preload = () => {
    character.armor = {};
    let directions = ["down", "up", "left", "right"];
    let numberOfSprites = [6, 6, 5, 5];
    let width = 25;
    let height = 45;
    for (let i in directions) {
        let direction = directions[i];
        let lengthSprites = numberOfSprites[i];
        let y = height * i;
        character.armor[direction] = [];
        for (let i1 = 0; i1 < lengthSprites; i1++) {
            let x = width * i1;
            character.armor[direction][i1] = image.get(x, y, width, height);
        }
    }
}
character.weapon.preload = () => {
    character.weapon = {};
    let directions = ["down", "up", "left", "right"];
    let numberOfSprites = [6, 6, 5, 5];
    let width = 25;
    let height = 45;
    for (let i in directions) {
        let direction = directions[i];
        let lengthSprites = numberOfSprites[i];
        let y = height * i;
        character.weapon[direction] = [];
        for (let i1 = 0; i1 < lengthSprites; i1++) {
            let x = width * i1;
            character.weapon[direction][i1] = image.get(x, y, width, height);
        }
    }
    uploadedImages = true;
}
character.getStatistics = () => {
    character.statistics = localStorage.getItem("statistics");
    if (character.statistics == null) {
        character.statistics = information.statistics[metamask.capitalizedAccount];
        if (character.statistics == undefined) {
            alert("your character is not in the database");
            location.href = location.href.replace("game", "chargingScreen");
        } else {
            character.statistics = JSON.stringify(character.statistics);
            localStorage.setItem("statistics", character.statistics);
            location.href = location.href.replace("game", "chargingScreen");
        }
    } else {
        character.statistics = JSON.parse(character.statistics);
    }
    character.preload();
};
character.preload = () => {
    loadImage(`../assets/player/armor/${character.statistics.armor}.png`, (image) => {
        character.armorLoadImage(image);
    });
};
character.draw = () => {
    image(character.armor[character.animation][character.spriteArmor], 0, 0, 200, 200);
    image(character.head[character.animation], 0, 0, 200, 200);
    image(character.weapon[character.animation][character.spriteWeapon], 0, 0, 200, 200);
}
function preload() {
    metamask.start();
}
function setup() {
    createCanvas(640, 360);
    frameRate(30);
}
function draw() {
    if (uploadedImages == true) {
        noSmooth();
        character.draw();
    }
}