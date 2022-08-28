"use strict";
import text from "./text.js";
import textBackground from "./textBackground.js";
import Player from "./Player.js";
import verifyClick from "./verifyClick.js";
export default class {
  setup() {
    this.interfaceEmpty = engine.loadImage("./Graficos/Interfaces/empty.png");
    this.assignLeaders();
  }
  assignLeaderPlayer() {
    let transform = { x: 370, y: 170, width: 150, height: 150 };
    data.database.indexAccounts(this.leaderAccount).then(index => {
      data.database.accounts(index).then(account => {
        if (this.leaderAccount != account.owner) {
          alert("leader not found");
          this.randomLeader();
        } else if (account.group.length >= 5) {
          alert("full group");
          this.randomLeader();
        } else {
          let statistics = JSON.parse(account.statistics);
          this.leaderPlayer = new Player(transform, statistics, () => {
            data.canDraw = true;
          });
        }
      });
    }).catch(error => {
      console.error(error);
      alert("error, leader account");
      this.randomLeader();
    })
  }
  randomLeader() {
    data.canDraw = false;
    this.leaderAccount = engine.random(this.leaders);
    this.assignLeaderPlayer();
  }
  assignLeaders() {
    this.leaders = [];
    data.database.accountsLength().then(length => {
      let indexAccounts = 0;
      let nextGroup = () => {
        if (indexAccounts < length) {
          data.database.accounts(indexAccounts).then(account => {
            if (account.group == undefined) {
              this.leaders.push(account.owner);
            } else if (account.group.length < 5) {
              this.leaders.push(account.owner);
            }
            nextGroup();
          });
        } else {
          this.randomLeader();
        }
        indexAccounts++;
      }
      nextGroup();
    });
  }
  click() {
    if (verifyClick(358, 38, 568, 79)) {
      this.randomLeader();
    } else if (verifyClick(357, 98, 568, 139)) {
      data.canDraw = false;
      this.leaderAccount = prompt("leader address");
      this.assignLeaderPlayer();
    } else if (verifyClick(56, 288, 288, 330)) {
      localStorage.setItem("leader", this.leaderAccount);
      data.page("enterGroup", 1);
    }
  }
  draw() {
    engine.image(this.interfaceEmpty, 0, 0, 640, 360);
    text("groups available", 50, 50, 30);
    for (let i = 0; i <= 5; i++) {
      let leader = this.leaders[i];
      if (leader == undefined) {
        break;
      } else {
        let y = 30 * i;
        y += 90;
        let _text = `leader${i + 1} ${leader.slice(0, 5)}`;
        if (i == 5) {
          _text = `total leaders ${this.leaders.length}`;
        }
        text(_text, 50, y, 30);
      }
    }
    textBackground(" random leader", 350, 30, 210, 40, 30);
    textBackground("   write leader", 350, 90, 210, 40, 30);
    if (this.leaderAccount != undefined) {
      text(`leader ${this.leaderAccount.slice(0, 5)}`, 350, 165, 30);
    }
    if (this.leaderPlayer != undefined) {
      this.leaderPlayer.draw();
    }
    textBackground(" watch members", 50, 280, 230, 40, 30);
  }
}