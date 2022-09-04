"use strict";
import text from "./text.js";
import rect from "./rect.js";
import Player from "./Player.js";
import verifyClick from "./verifyClick.js";
import statisticsRandom from "./statisticsRandom.js";
export default class {
  setup() {
    this.assignLeaders();
  }
  assignLeaderPlayer() {
    if (data.database != undefined) {
      data.database.getAccount(this.leaderAccount).then(_account => {
        let owner = _account.owner.toUpperCase();
        let leader = this.leaderAccount.toUpperCase();
        if (owner == leader) {
          let transform = { x: 370, y: 180, width: 150, height: 150 };
          let statistics = JSON.parse(_account.statistics);
          this.leaderPlayer = new Player(transform, statistics, () => {
            data.canDraw = true;
          });
        } else {
          alert("leader not found");
          this.randomLeader();
        }
      }).catch(error => {
        console.error(error);
        alert("leader not found");
        this.randomLeader();
      });
    } else {
      let transform = { x: 370, y: 180, width: 150, height: 150 };
      this.leaderPlayer = new Player(transform, statisticsRandom(), () => {
        data.canDraw = true;
      });
    }
  }
  randomLeader() {
    data.canDraw = false;
    this.leaderAccount = engine.random(this.leaders);
    this.assignLeaderPlayer();
  }
  assignLeaders() {
    this.leaders = [];
    if (data.database != undefined) {
      data.database.allAccounts().then(_accounts => {
        this.membership = {};
        for (let account of _accounts) {
          let owner = account.owner.toUpperCase();
          this.membership[owner] = 0;
        }
        for (let account of _accounts) {
          let leader = account.leader.toUpperCase();
          this.membership[leader]++;
        }
        let user = data.account.toUpperCase();
        for (let account of _accounts) {
          let owner = account.owner.toUpperCase();
          if (owner != user && this.membership[owner] < 5) {
            this.leaders.push(account.owner);
          }
        }
        this.randomLeader();
      });
    } else {
      for (let i = 0; i < 10; i++) {
        let statistics = statisticsRandom();
        let hash = ethers.utils.namehash(statistics.name);
        this.leaders.push(hash);
      }
      this.randomLeader();
    }
  }
  writeLeader() {
    data.canDraw = false;
    this.leaderAccount = prompt("leader address");
    this.assignLeaderPlayer();
  }
  joinGroup() {
    let statistics = localStorage.getItem("statistics");
    if (statistics == null) {
      alert("character not found");
    } else {
      data.database.createAccount(this.leaderAccount, statistics).then(() => {
        localStorage.removeItem("statistics");
        data.page("databaseChanges", 1);
      });
    }
  }
  click() {
    if (verifyClick(349, 30, 560, 71)) {
      this.randomLeader();
    } else if (verifyClick(349, 89, 525, 130)) {
      this.writeLeader();
    } else if (verifyClick(49, 280, 200, 321)) {
      this.joinGroup();
    }
  }
  draw() {
    text(`total leaders ${this.leaders.length}`, 50, 50, 30, "#fff");
    text("leaders - members", 50, 90, 30, "#fff");
    for (let i = 0; i <= 5; i++) {
      let leader = this.leaders[i];
      if (leader == undefined) {
        break;
      }
      let top = 120;
      let y = top + (30 * i);
      let members = this.membership[leader.toUpperCase()];
      let _text = `${leader.slice(0, 6)} - ${members}`;
      text(_text, 50, y, 30, "#fff");
    }
    rect(350, 30, 210, 40, "#000");
    text(" random leader", 350, 60, 30, "#fff");
    rect(350, 90, 175, 40, "#000");
    text(" write leader", 350, 120, 30, "#fff");
    if (this.leaderAccount != undefined) {
      text(`leader ${this.leaderAccount.slice(0, 7)}`, 350, 165, 30, "#fff");
    }
    if (this.leaderPlayer != undefined) {
      this.leaderPlayer.draw();
    }
    rect(50, 280, 150, 40, "#000");
    text(" join group", 50, 310, 30, "#fff");
  }
}