"use strict";
import text from "./text.js";
import Player from "./Player.js";
import verifyClick from "./verifyClick.js";
export default class {
  setup() {
    this.interfaceEmpty = engine.loadImage("./Graficos/Interfaces/empty.png");
    this.assignLeaders();
  }
  assignLeaderPlayer() {
    data.database.allAccounts().then(_accounts => {
      let index = _accounts.indexOf(this.leaderAccount);
      if (index == -1) {
        alert("leader not found");
        this.randomLeader();
      } else {
        data.database.statistics(index).then(_statistics => {
          let transform = { x: 370, y: 170, width: 150, height: 150 };
          this.leaderPlayer = new Player(transform, JSON.parse(_statistics), () => {
            data.canDraw = true;
          });
        })
      }
    });
  }
  randomLeader() {
    data.canDraw = false;
    this.leaderAccount = engine.random(this.leaders);
    this.assignLeaderPlayer();
  }
  assignLeaders() {
    this.leaders = [];
    data.database.allAccounts().then(_accounts => {
      this.membership = {};
      for (let account of _accounts) {
        this.membership[account] = 0;
      }
      data.database.allLeaders().then(_leaders => {
        for (let leader of _leaders) {
          this.membership[leader]++;
        }
        for (let account in this.membership) {
          if (this.membership[account] < 5) {
            this.leaders.push(account);
          }
        }
        this.randomLeader();
      });
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
    text(`total leaders ${this.leaders.length}`, 50, 50, 30);
    text("leaders - members", 50, 90, 30);
    for (let i = 0; i <= 5; i++) {
      let leader = this.leaders[i];
      if (leader == undefined) {
        break;
      }
      let y = 30 * i;
      y += 120;
      let _text = `${leader.slice(0, 6)} - ${this.membership[leader]}`;
      text(_text, 50, y, 30);
    }
    textBackground(" random leader", 350, 30, 210, 40, 30);
    textBackground("   write leader", 350, 90, 210, 40, 30);
    if (this.leaderAccount != undefined) {
      text(`leader ${this.leaderAccount.slice(0, 7)}`, 350, 165, 30);
    }
    if (this.leaderPlayer != undefined) {
      this.leaderPlayer.draw();
    }
    textBackground("   join group", 50, 280, 230, 40, 30);
  }
}