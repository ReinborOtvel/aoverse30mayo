"use strict";
let canDraw = false;
let database = {
  address: "0x4FF2048170F04785c01137980a61C29d75195cE6",
  abi: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_creator",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_statistics",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "accountIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "accounts",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "leader",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "statistics",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "allAccounts",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "leader",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "statistics",
              "type": "string"
            }
          ],
          "internalType": "struct database.Account[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_leader",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_statistics",
          "type": "string"
        }
      ],
      "name": "createAccount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        }
      ],
      "name": "getAccount",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "leader",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "statistics",
              "type": "string"
            }
          ],
          "internalType": "struct database.Account",
          "name": "account",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
};
let metamask;
let map;
let player;
function GetPercentage(size, percentage) {
  let one = size / 100;
  return parseInt(percentage / one);
}
function Percentage(size, number) {
  let one = size / 100;
  return one * number;
}
function Rect(x, y, width, height, color) {
  x = Percentage(window.width, x);
  y = Percentage(window.height, y);
  width = Percentage(window.width, width);
  height = Percentage(window.height, height);
  window.fill(color);
  window.rect(x, y, width, height);
}
function Text(x, y, size, text, color) {
  x = Percentage(window.width, x);
  y = Percentage(window.height, y);
  size = Percentage(window.width, size);
  window.textSize(size);
  window.fill(color);
  window.text(text, x, y);
}
function RandomName() {
  let name = "";
  for (let i = 0; i <= 5; i++) {
    let characters = "aeiou";
    if (i % 2 == 0) characters = "qwrtypsdfghjklzxcvbnm";
    name += window.random([...characters]);
  }
  return name;
}
function Circle(x, y, width) {
  x = Percentage(window.width, x);
  y = Percentage(window.height, y);
  width = Percentage(window.width, width);
  window.circle(x, y, width);
}
function Metamask(callback) {
  metamask = {};
  if (!window.navigator.onLine) return alert("connect to the internet");
  if (window.ethereum == undefined) return alert("download metamask");
  window.ethereum.on('chainChanged', () => {
    window.location.reload();
  });
  metamask.provider = new window.ethers.providers.Web3Provider(window.ethereum);
  metamask.provider.send("eth_requestAccounts", []).then(accounts => {
    metamask.account = accounts[0];
    metamask.signer = metamask.provider.getSigner();
    metamask.signer.getChainId().then(chainId => {
      if (chainId != 97) {
        alert("switch to binance testnet");
        window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: window.ethers.utils.hexValue(97),
            chainName: "binance testnet",
            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
          },],
        });
      } else {
        metamask.database = new window.ethers.Contract(database.address, database.abi, metamask.signer);
        callback();
      }
    }).catch(error => {
      console.error(error);
      alert("no chainId");
    });
  }).catch(error => {
    console.error(error);
    alert("connect account");
  })
}
function Map() {
  map = {};
  map.collision = (x, y) => {
    return false;
  }
}
function Player(x, y) {
  player = {};
  player.loadImage = callback => {
    player.parts.loadImage(callback);
  }
  player.transform = (x, y, width, height) => {
    player.x = x;
    player.y = y;
    player.width = width;
    player.height = height;
    player.parts.transform();
  }
  player.draw = () => {
    player.parts.draw();
    player.move.draw();
    player.movementWheel.draw();
  }
  player.keyTyped = () => {
    player.move.keyTyped();
    player.movementWheel.mouseReleased();
  }
  player.keyReleased = () => {
    player.move.keyReleased();
    player.movementWheel.mouseReleased();
  }
  player.mouseReleased = () => {
    player.movementWheel.mouseReleased();
  }
  PlayerParts();
  PlayerMove();
  PlayerMovementWheel();
  player.transform(x, y, 5, 5);
}
function PlayerParts() {
  player.parts = {};
  player.parts.draw = () => {
    player.parts.armor.draw();
    player.parts.head.draw();
    player.parts.weapon.draw();
  }
  player.parts.loadImage = callback => {
    player.parts.head.loadImage(() => {
      player.parts.armor.loadImage(() => {
        player.parts.weapon.loadImage(() => {
          callback();
        });
      });
    });
  }
  player.parts.transform = () => {
    player.parts.head.transform();
    player.parts.armor.transform();
    player.parts.weapon.transform();
  }
  player.parts.animation = "down";
  player.parts.sprite = 0;
  PlayerPartsHead();
  PlayerPartsArmor();
  PlayerPartsWeapon();
}
function PlayerPartsHead() {
  player.parts.head = {};
  player.parts.head.loadImage = callback => {
    window.loadImage(`../img/player/head/${player.statistics.head}.png`, img => {
      let animations = ["down", "right", "left", "up"];
      player.parts.head.images = [];
      let width = 17;
      for (let h in animations) {
        let animation = animations[h];
        let x = h * width;
        player.parts.head.images[animation] = img.get(x, 0, width, 17);
      }
      callback();
    });
  }
  player.parts.head.draw = () => {
    let x = Percentage(window.width, player.parts.head.x);
    let y = Percentage(window.height, player.parts.head.y);
    let width = Percentage(window.width, player.parts.head.width);
    let height = Percentage(window.height, player.parts.head.height);
    window.image(player.parts.head.images[player.parts.animation], x, y, width, height);
  }
  player.parts.head.transform = () => {
    player.parts.head.width = player.width / 2;
    player.parts.head.height = player.height / 2;
    player.parts.head.x = player.x - (player.parts.head.width / 2);
    player.parts.head.y = player.y - player.parts.head.height;
  }
}
function PlayerPartsArmor() {
  player.parts.armor = {};
  player.parts.armor.loadImage = callback => {
    window.loadImage(`../img/player/armor/${player.statistics.armor}.png`, img => {
      player.parts.armor.images = {};
      let animations = ["down", "up", "left", "right"];
      let lengths = [6, 6, 5, 5];
      let width = 25;
      let height = 45;
      for (let v in animations) {
        let animation = animations[v];
        player.parts.armor.images[animation] = [];
        let length = lengths[v];
        let y = v * height;
        for (let h = 0; h < length; h++) {
          let x = h * width;
          player.parts.armor.images[animation][h] = img.get(x, y, width, height);
        }
      }
      callback();
    });
  }
  player.parts.armor.draw = () => {
    let x = Percentage(window.width, player.parts.armor.x);
    let y = Percentage(window.height, player.parts.armor.y);
    let width = Percentage(window.width, player.width);
    let height = Percentage(window.height, player.height);
    window.image(player.parts.armor.images[player.parts.animation][player.parts.sprite], x, y, width, height);
  }
  player.parts.armor.transform = () => {
    player.parts.armor.x = player.x - (player.width / 2);
    player.parts.armor.y = player.y - (player.height / 2);
  }
}
function PlayerPartsWeapon() {
  player.parts.weapon = {};
  player.parts.weapon.loadImage = callback => {
    window.loadImage(`../img/player/weapon/${player.statistics.weapon}.png`, img => {
      player.parts.weapon.images = {};
      let animations = ["down", "up", "left", "right"];
      let lengths = [6, 6, 5, 5];
      let width = 25;
      let height = 45;
      for (let v in animations) {
        let animation = animations[v];
        player.parts.weapon.images[animation] = [];
        let length = lengths[v];
        let y = v * height;
        for (let h = 0; h < length; h++) {
          let x = h * width;
          player.parts.weapon.images[animation][h] = img.get(x, y, width, height);
        }
      }
      callback();
    });
  }
  player.parts.weapon.draw = () => {
    let x = Percentage(window.width, player.parts.weapon.x);
    let y = Percentage(window.height, player.parts.weapon.y);
    let width = Percentage(window.width, player.width);
    let height = Percentage(window.height, player.height);
    window.image(player.parts.weapon.images[player.parts.animation][player.parts.sprite], x, y, width, height);
  }
  player.parts.weapon.transform = () => {
    player.parts.weapon.x = player.x - (player.width / 2);
    player.parts.weapon.y = player.y - (player.height / 2);
  }
}
function PlayerMove() {
  player.move = {};
  player.move.keyTyped = () => {
    switch (window.key) {
      case "w":
        player.move.y = -1;
        break;
      case "s":
        player.move.y = 1;
        break;
      case "a":
        player.move.x = -1;
        break;
      case "d":
        player.move.x = 1;
        break;
    }
  }
  player.move.keyReleased = () => {
    switch (window.key) {
      case "w":
      case "s":
        player.move.y = 0;
        break;
      case "a":
      case "d":
        player.move.x = 0;
        break;
    }
  }
  player.move.draw = () => {
    let speedX = player.move.x * player.move.speed;
    let speedY = player.move.y * player.move.speed;
    let x = player.x + speedX;
    let y = player.y + speedY;
    if (!map.collision(x, y)) {
      player.transform(x, y, player.width, player.height);
    }
  }
  player.move.x = 0;
  player.move.y = 0;
  player.move.speed = 3;
}
function PlayerMovementWheel() {
  player.movementWheel = {};
  player.movementWheel.mouseReleased = () => {
    switch (player.move.x) {
      case 0:
        player.movementWheel.x = 13;
        switch (player.move.y) {
          case 0:
            player.movementWheel.y = 78;
            break;
          case -1:
            player.movementWheel.y = 66;
            break;
          case 1:
            player.movementWheel.y = 90;
            break;
        }
        break;
      case -1:
        switch (player.move.y) {
          case 0:
            player.movementWheel.x = 6;
            player.movementWheel.y = 78;
            break;
          case -1:
            player.movementWheel.x = 8;
            player.movementWheel.y = 69;
            break;
          case 1:
            player.movementWheel.x = 8;
            player.movementWheel.y = 86;
            break;
        }
        break;
      case 1:
        switch (player.move.y) {
          case 0:
            player.movementWheel.x = 20;
            player.movementWheel.y = 78;
            break;
          case -1:
            player.movementWheel.x = 17;
            player.movementWheel.y = 68;
            break;
          case 1:
            player.movementWheel.x = 17;
            player.movementWheel.y = 88;
            break;
        }
        break;
    }
  }
  player.movementWheel.draw = () => {
    window.stroke("#fff");
    window.noFill();
    Circle(player.movementWheel.x, player.movementWheel.y, 5);
    Circle(13, 78, 20);
  }
  player.movementWheel.x = 13;
  player.movementWheel.y = 78;
}
function setup() {
  window.createCanvas(852, 480);
  window.frameRate(15);
  Map();
  Player(5, 5);
  Metamask(() => {
    metamask.database.allAccounts().then(accounts => {
      let user = metamask.account.toUpperCase();
      for (let account of accounts) {
        let address = account.owner.toUpperCase();
        if (user != address) continue;
        player.statistics = JSON.parse(account.statistics);
        player.loadImage(() => {
          canDraw = true;
        });
        break;
      }
    });
  });
}
function draw() {
  if (!canDraw) return;
  window.noSmooth();
  Rect(0, 0, 100, 100, "#111");
  player.draw();
}
function mouseReleased() {
  if (!canDraw) return;
  let x = GetPercentage(window.width, window.mouseX);
  let y = GetPercentage(window.height, window.mouseY);
  let Verify = (xInit, yInit, xEnd, yEnd) => {
    return x >= xInit &&
      y >= yInit &&
      x <= xEnd &&
      y <= yEnd;
  }
  player.mouseReleased();
  console.log(x, y);
}
function keyTyped() {
  player.keyTyped();
}
function keyReleased() {
  player.keyReleased();
}