"use strict";
import Player from "./player/Parts.js";
export default class {
  setup() {
    this.assignLeaders();
  }
  assignLeaderPlayer() {
    metamask.database.getAccount(this.leaderAccount).then(_account => {
      let owner = _account.owner.toUpperCase();
      let leader = this.leaderAccount.toUpperCase();
      if (owner == leader) {
        let statistics = JSON.parse(_account.statistics);
        this.leaderPlayer = new Player(60, 65, 25, 50, statistics);
      } else {
        alert("leader not found");
        this.randomLeader();
      }
    }).catch(error => {
      console.error(error);
      alert("leader not found");
      this.randomLeader();
    });

  }
  randomLeader() {
    this.leaderAccount = engine.random(this.leaders);
    this.assignLeaderPlayer();
  }
  assignLeaders() {
    this.leaders = [];
    metamask.database.allAccounts().then(_accounts => {
      this.membership = {};
      for (let account of _accounts) {
        let owner = account.owner.toUpperCase();
        this.membership[owner] = 0;
      }
      for (let account of _accounts) {
        let leader = account.leader.toUpperCase();
        this.membership[leader]++;
      }
      let user = metamask.account.toUpperCase();
      for (let account of _accounts) {
        let owner = account.owner.toUpperCase();
        if (owner != user && this.membership[owner] < 5) {
          this.leaders.push(account.owner);
        }
      }
      this.randomLeader();
    });
  }
  writeLeader() {
    this.leaderAccount = prompt("leader address");
    if (ethers.utils.isAddress(this.leaderAccount) == true) {
      this.assignLeaderPlayer();
    } else {
      this.randomLeader();
    }
  }
  joinGroup() {
    let statistics = localStorage.getItem("statistics");
    if (statistics == null) {
      alert("character not found");
    } else {
      metamask.database.createAccount(this.leaderAccount, statistics).then(() => {
        localStorage.removeItem("statistics");
        let interval = setInterval(() => {
          metamask.database.getAccount(metamask.account).then(_account => {
            let owner = _account.owner.toUpperCase();
            let account = metamask.account.toUpperCase();
            if (owner == account) {
              clearInterval(interval);
              location.reload();
            } else {
              alert("wait 10 more seconds");
            }
          });
        }, 10000);
      });
    }
  }
  touchEnded() {
    if (utils.verifyClick(50, 13, 83, 19)) {
      this.randomLeader();
    } else if (utils.verifyClick(54, 23, 80, 30)) {
      this.writeLeader();
    } else if (utils.verifyClick(6, 78, 28, 86)) {
      this.joinGroup();
    }
  }
  draw() {
    utils.text(`total leaders ${this.leaders.length}`, 5, 15, 5, "#fff");
    utils.text("leaders - members", 5, 25, 5, "#fff");
    for (let i = 0; i <= 3; i++) {
      let leader = this.leaders[i];
      if (leader == undefined) {
        break;
      }
      let top = 35;
      let y = top + (10 * i);
      let members = this.membership[leader.toUpperCase()];
      let _text = `${leader.slice(0, 6)} - ${members}`;
      utils.text(_text, 5, y, 5, "#fff");
    }
    utils.textRect(" random leader", 50, 15, 35);
    utils.textRect(" write leader", 53, 25, 29);
    if (this.leaderAccount != undefined) {
      utils.text(`leader ${this.leaderAccount.slice(0, 7)}`, 350, 165, 30, "#fff");
    }
    if (this.leaderPlayer != undefined) {
      this.leaderPlayer.draw();
    }
    utils.textRect(" join group", 5, 80, 25);
  }
}