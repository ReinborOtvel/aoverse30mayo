"use strict";
let canDraw = false;
let player = {};
let metamask = {};
let database = {
  creator: "0xbEc5681e49DDD4FB40873b353E78206FC71709F0",
  ticket: "0.01",
};
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
function RandomStatistics() {
  return {
    name: RandomName(),
    head: Math.round(window.random(1, 236)),
    armor: Math.round(window.random(1, 350)),
    weapon: Math.round(window.random(1, 89)),
    strength: Math.round(window.random(20, 100)),
    endurance: Math.round(window.random(20, 100)),
    health: Math.round(window.random(20, 100)),
    speed: Math.round(window.random(20, 100)),
  };
}
function Player() {
  player.x = 70;
  player.y = 50;
  player.width = 40;
  player.height = 80;
  player.statistics = RandomStatistics();
  player.loadImage = callback => {
    player.head.loadImage(() => {
      player.armor.loadImage(() => {
        player.weapon.loadImage(() => {
          callback();
        });
      });
    });
  }
  player.draw = () => {
    player.armor.draw();
    player.head.draw();
    player.weapon.draw();
  }
  PlayerHead();
  PlayerArmor();
  PlayerWeapon();
}
function PlayerHead() {
  player.head = {};
  player.head.width = player.width / 2;
  player.head.height = player.height / 2;
  player.head.x = player.x - (player.head.width / 2);
  player.head.y = player.y - player.head.height;
  player.head.loadImage = callback => {
    window.loadImage(`../img/player/head/${player.statistics.head}.png`, img => {
      player.head.image = img.get(0, 0, 17, 17);
      callback();
    });
  }
  player.head.draw = () => {
    let x = Percentage(window.width, player.head.x);
    let y = Percentage(window.height, player.head.y);
    let width = Percentage(window.width, player.head.width);
    let height = Percentage(window.height, player.head.height);
    window.image(player.head.image, x, y, width, height);
  }
}
function PlayerArmor() {
  player.armor = {};
  player.armor.x = player.x - (player.width / 2);
  player.armor.y = player.y - (player.height / 2);
  player.armor.loadImage = callback => {
    window.loadImage(`../img/player/armor/${player.statistics.armor}.png`, img => {
      player.armor.image = img.get(0, 0, 25, 45);
      callback();
    });
  }
  player.armor.draw = () => {
    let x = Percentage(window.width, player.armor.x);
    let y = Percentage(window.height, player.armor.y);
    let width = Percentage(window.width, player.width);
    let height = Percentage(window.height, player.height);
    window.image(player.armor.image, x, y, width, height);
  }
}
function PlayerWeapon() {
  player.weapon = {};
  player.weapon.x = player.x - (player.width / 2);
  player.weapon.y = player.y - (player.height / 2);
  player.weapon.loadImage = callback => {
    window.loadImage(`../img/player/weapon/${player.statistics.weapon}.png`, img => {
      player.weapon.image = img.get(0, 0, 25, 45);
      callback();
    });
  }
  player.weapon.draw = () => {
    let x = Percentage(window.width, player.weapon.x);
    let y = Percentage(window.height, player.weapon.y);
    let width = Percentage(window.width, player.width);
    let height = Percentage(window.height, player.height);
    window.image(player.weapon.image, x, y, width, height);
  }
}
function setup() {
  window.createCanvas(852, 480);
  window.frameRate(15);
  Metamask(() => {
    player.loadImage(() => {
      canDraw = true;
    });
  });
}
function draw() {
  if (!canDraw) return;
  window.noSmooth();
  Rect(0, 0, 100, 100, "#111");
  player.draw();
  Text(5, 15, 5, "character", "#fff");
  Text(5, 80, 5, "new character", "#C548EE");
  Text(5, 90, 5, "create character", "#C548EE");
  Text(5, 25, 5, `name ${player.statistics.name}`, "#fff");
  Text(5, 35, 5, `strength ${player.statistics.strength}`, "#fff");
  Text(5, 45, 5, `endurance ${player.statistics.endurance}`, "#fff");
  Text(5, 55, 5, `health ${player.statistics.health}`, "#fff");
  Text(5, 65, 5, `speed ${player.statistics.speed}`, "#fff");
}
function NewPlayer() {
  canDraw = false;
  player.statistics = RandomStatistics();
  player.loadImage(() => {
    canDraw = true;
  });
}
function CreatePlayer() {
  if (!canDraw) return;
  canDraw = false;
  window.ethereum.request({
    method: 'eth_sendTransaction',
    params: [{
      from: metamask.account,
      to: database.creator,
      value: window.ethers.utils.parseEther(database.ticket)._hex,
      chainId: window.ethers.utils.hexValue(56),
    }],
  }).then(() => {
    window.localStorage.setItem("statistics", JSON.stringify(player.statistics));
    window.location.reload();
  }).catch(() => {
    canDraw = true;
  });
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
  console.log(x, y);
  if (Verify(5, 73, 36, 80)) {
    NewPlayer();
  } else if (Verify(5, 83, 41, 89)) {
    CreatePlayer();
  }
}
let Metamask = callback => {
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
      if (chainId != 56) {
        alert("switch to binance");
        window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: window.ethers.utils.hexValue(56),
            chainName: "binance",
            rpcUrls: ['https://bsc-dataseed.binance.org/'],
          },],
        });
      } else {
        let statistics = window.localStorage.getItem("statistics");
        if (statistics == null) {
          callback();
        } else {
          window.location.href = window.location.href.replace("createCharacter", "selectLeader");
        }
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