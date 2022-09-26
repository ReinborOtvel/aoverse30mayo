"use strict";
import Player from "./player/Parts.js";
export default class {
  setup() {
    this.joinGroupTransaction = false;
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
        this.randomLeader();
      }
    }).catch(() => {
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
    if (ethers.utils.isAddress(this.leaderAccount)) {
      this.assignLeaderPlayer();
    } else {
      this.randomLeader();
    }
  }
  joinGroup() {
    if (this.joinGroupTransaction == true) {
      return;
    }
    this.joinGroupTransaction = true;
    let statistics = localStorage.getItem("statistics");
    if (statistics != null) {
      metamask.database.createAccount(this.leaderAccount, statistics).then(() => {
        localStorage.removeItem("statistics");
        let interval = setInterval(() => {
          metamask.database.getAccount(metamask.account).then(_account => {
            let owner = _account.owner.toUpperCase();
            let account = metamask.account.toUpperCase();
            if (owner == account) {
              clearInterval(interval);
              location.reload();
            }
          });
        }, 10000);
      });
    }
  }
  touchEnded() {
    if (touch.verify(55, 8, 87, 15)) {
      this.randomLeader();
    } else if (touch.verify(54, 18, 80, 25)) {
      this.writeLeader();
    } else if (touch.verify(4, 78, 26, 86)) {
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
    utils.text("random leader", 55, 15, 5, "#C548EE");
    utils.text("write leader", 55, 25, 5, "#C548EE");
    if (this.leaderAccount != undefined) {
      utils.text("leader", 71, 60, 5, "#fff");
      utils.text(`${this.leaderAccount.slice(0, 7)}`, 71, 70, 5, "#fff");
    }
    if (this.leaderPlayer != undefined) {
      this.leaderPlayer.draw();
    }
    utils.text("join group", 5, 85, 5, "#C548EE");
  }
}