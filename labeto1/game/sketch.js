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
function Image(image, x, y, width, height) {
  x = Percentage(window.width, x);
  y = Percentage(window.height, y);
  width = Percentage(window.width, width);
  height = Percentage(window.height, height);
  window.image(image, x, y, width, height);
}
function newMetamask(callback) {
  let Metamask = {};
  if (!window.navigator.onLine) return alert("connect to the internet");
  if (window.ethereum == undefined) return alert("download metamask");
  window.ethereum.on('chainChanged', () => {
    window.location.reload();
  });
  Metamask.provider = new window.ethers.providers.Web3Provider(window.ethereum);
  Metamask.provider.send("eth_requestAccounts", []).then(accounts => {
    Metamask.account = accounts[0];
    Metamask.signer = Metamask.provider.getSigner();
    Metamask.signer.getChainId().then(chainId => {
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
        Metamask.database = new window.ethers.Contract(database.address, database.abi, Metamask.signer);
        callback(Metamask);
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
function newMap() {
  let Map = {};
  Map.collision = (x, y) => {
    for (let tree of Map.trees) {
      if (tree.collision(x, y)) return true;
    }
    return false;
  }
  Map.entityPosition = (x, y) => {
    for (let tree of Map.trees) {
      if (tree.collision(x, y)) return tree;
    }
    return false;
  }
  Map.draw = () => {
    for (let land of Map.lands) land.draw();
    for (let tree of Map.trees) tree.draw();
  }
  Map.lands = [];
  for (let v = 0; v < 10; v++) {
    for (let h = 0; h < 10; h++) {
      Map.lands.push(newLand(579, h, v, 10, 10));
    }
  }
  Map.trees = [
    newTree(1, 1, 10, 20),
    newTree(2, 1, 10, 20),
    newTree(3, 1, 10, 20),
    newTree(4, 1, 10, 20),
    newTree(1, 2, 10, 20),
    newTree(2, 2, 10, 20),
    newTree(3, 2, 10, 20),
    newTree(4, 2, 10, 20),
  ];
  return Map;
}
function newLand(index, h, v, width, height) {
  let Land = {};
  Land.x = h * width;
  Land.y = v * height;
  return Land;
}
function newTree() {
  let Tree = {};
  return Tree;
}
function newPlayer(x, y) {
  let Player = {};
  Player.loadImage = callback => {
    Player.parts.loadImage(callback);
  }
  Player.transform = (x, y, width, height) => {
    Player.x = x;
    Player.y = y;
    Player.width = width;
    Player.height = height;
    Player.parts.transform();
  }
  Player.draw = () => {
    Player.parts.draw();
    Player.move.draw();
    Player.movementWheel.draw();
  }
  Player.keyTyped = () => {
    Player.move.keyTyped();
    Player.movementWheel.mouseReleased();
  }
  Player.keyReleased = () => {
    Player.move.keyReleased();
    Player.movementWheel.mouseReleased();
  }
  Player.mouseReleased = () => {
    Player.movementWheel.mouseReleased();
  }
  Player.parts = newPlayerParts();
  Player.move = newPlayerMove();
  Player.movementWheel = newPlayerMovementWheel();
  Player.transform(x, y, 5, 5);
  return Player;
}
function newPlayerParts() {
  let Parts = {};
  Parts.draw = () => {
    Parts.armor.draw();
    Parts.head.draw();
    Parts.weapon.draw();
  }
  Parts.loadImage = callback => {
    Parts.head.loadImage(() => {
      Parts.armor.loadImage(() => {
        Parts.weapon.loadImage(() => {
          callback();
        });
      });
    });
  }
  Parts.transform = () => {
    Parts.head.transform();
    Parts.armor.transform();
    Parts.weapon.transform();
  }
  Parts.animation = "down";
  Parts.sprite = 0;
  player.parts = Parts;
  PlayerPartsHead();
  PlayerPartsArmor();
  PlayerPartsWeapon();
  return Parts;
}
function newPlayerPartsHead(index) {
  let Head = {};
  Head.loadImage = callback => {
    window.loadImage(`../img/player/head/${index}.png`, img => {
      let animations = ["down", "right", "left", "up"];
      Head.images = [];
      let width = 17;
      for (let h in animations) {
        let animation = animations[h];
        let x = h * width;
        Head.images[animation] = img.get(x, 0, width, 17);
      }
      callback();
    });
  }
  Head.draw = () => {
    Image(Head.images[player.parts.animation], x, y, width, height);
  }
  Head.transform = () => {
    Head.width = player.width / 2;
    Head.height = player.height / 2;
    Head.x = player.x - (Head.width / 2);
    Head.y = player.y - Head.height;
  }
  return Head;
}
function newPlayerPartsArmor() {
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
    Image(player.parts.armor.images[player.parts.animation][player.parts.sprite], x, y, width, height);
  }
  player.parts.armor.transform = () => {
    player.parts.armor.x = player.x - (player.width / 2);
    player.parts.armor.y = player.y - (player.height / 2);
  }
}
function newPlayerPartsWeapon() {
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
    Image(player.parts.weapon.images[player.parts.animation][player.parts.sprite], x, y, width, height);
  }
  player.parts.weapon.transform = () => {
    player.parts.weapon.x = player.x - (player.width / 2);
    player.parts.weapon.y = player.y - (player.height / 2);
  }
}
function newPlayerMove() {
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
function newPlayerMovementWheel() {
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
  map = newMap();
  player = newPlayer(5, 5);
  newMetamask(Metamask => {
    metamask = Metamask;
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