"use strict";
let canDraw = false;
let leaders = [];
let membership = {};
let leader = {};
let metamask = {};
function draw() {
  if (!canDraw) return;
  window.noSmooth();
  Rect(0, 0, 100, 100, "#111");
  leader.draw();
  Text(5, 15, 5, `total leaders ${leaders.length}`, "#fff");
  Text(5, 25, 5, "leaders - members", "#fff");
  Text(55, 15, 5, "random leader", "#C548EE");
  Text(55, 25, 5, "write leader", "#C548EE");
  Text(5, 85, 5, "join group", "#C548EE");
  for (let i in leaders) {
    if (i >= 3) break;
    let address = leaders[i];
    let top = 35;
    let y = top + (10 * i);
    let members = membership[address.toUpperCase()];
    Text(5, y, 5, `${address.slice(0, 6)} - ${members}`, "#fff");
  }
  Text(71, 60, 5, "leader", "#fff");
  Text(71, 70, 5, `${leader.address.slice(0, 7)}`, "#fff");
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
  if (Verify(55, 8, 87, 15)) {
    RandomLeader();
  } else if (Verify(54, 18, 80, 25)) {
    Write();
  } else if (Verify(4, 78, 26, 86)) {
    JoinGroup();
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
function CountMembers(accounts) {
  for (let account of accounts) {
    let owner = account.owner.toUpperCase();
    membership[owner] = 0;
  }
  for (let account of accounts) {
    let _leader = account.leader.toUpperCase();
    membership[_leader]++;
  }
}
function AvailableLeaders(accounts) {
  let user = metamask.account.toUpperCase();
  for (let account of accounts) {
    let owner = account.owner.toUpperCase();
    if (owner == user) continue;
    if (membership[owner] > 4) continue;
    leaders.push(account.owner);
  }
  RandomLeader();
}
function RandomLeader() {
  leader.address = window.random(leaders);
  VerifyLeader();
}
function VerifyLeader() {
  metamask.database.getAccount(leader.address).then(account => {
    let owner = account.owner.toUpperCase();
    let address = leader.address.toUpperCase();
    if (owner == address) {
      leader.statistics = JSON.parse(account.statistics);
      canDraw = false;
      leader.head.loadImage(() => {
        leader.armor.loadImage(() => {
          leader.weapon.loadImage(() => {
            canDraw = true;
          });
        });
      });
    } else {
      RandomLeader();
    }
  }).catch(error => {
    console.error(error);
    RandomLeader();
  });
}
function Write() {
  let address = window.prompt("leader address");
  if (window.ethers.utils.isAddress(address)) {
    leader.address = address;
    VerifyLeader();
  }
}
function JoinGroup() {
  if (!canDraw) return;
  canDraw = false;
  let statistics = window.localStorage.getItem("statistics");
  if (statistics == null) {
    window.location.href.replace("selectLeader", "createCharacter");
  } else {
    metamask.database.createAccount(leader.address, statistics).then(() => {
      window.localStorage.removeItem("statistics");
      let interval = setInterval(() => {
        metamask.database.getAccount(metamask.account).then(account => {
          let owner = account.owner.toUpperCase();
          let user = metamask.account.toUpperCase();
          if (owner == user) {
            clearInterval(interval);
            window.location.href = window.location.href.replace("selectLeader", "game");
          }
        });
      }, 2000);
    }).catch(error => {
      console.error(error);
      alert("error joining group");
      canDraw = true;
    });
  }
}