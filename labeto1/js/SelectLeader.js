"use strict";
import text from "./text.js";
import rect from "./rect.js";
import Player from "./Player.js";
import verifyClick from "./verifyClick.js";
export default class {
  setup() {
    this.interfaceEmpty = engine.loadImage("./Graficos/Interfaces/empty.png");
    this.assignLeaders();
  }
  assignLeaderPlayer() {
    data.database.allAccounts().then(_accounts => {
      let accountCreated = false;
      for (let i in _accounts) {
        let account = _accounts[i].toUpperCase();
        let leader = this.leaderAccount.toUpperCase();
        if (account == leader) {
          accountCreated = true;
          data.database.statistics(i).then(_statistics => {
            let transform = { x: 370, y: 180, width: 150, height: 150 };
            this.leaderPlayer = new Player(transform, JSON.parse(_statistics), () => {
              data.canDraw = true;
            });
          })
        }
      }
      if (accountCreated == false) {
        alert("leader not found");
        this.randomLeader();
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
        this.membership[account.toUpperCase()] = 0;
      }
      data.database.allLeaders().then(_leaders => {
        for (let leader of _leaders) {
          this.membership[leader.toUpperCase()]++;
        }
        for (let account of _accounts) {
          if (this.membership[account.toUpperCase()] < 5) {
            this.leaders.push(account);
          }
        }
        this.randomLeader();
      });
    });
  }
  click() {
    if (verifyClick(349, 30, 560, 71)) {
      this.randomLeader();
    } else if (verifyClick(349, 89, 525, 130)) {
      data.canDraw = false;
      this.leaderAccount = prompt("leader address");
      this.assignLeaderPlayer();
    } else if (verifyClick(49, 280, 200, 321)) {
      let statistics = localStorage.getItem("statistics");
      if (statistics == null) {
        alert("character not found");
      } else {
        console.log(this.leaderAccount, statistics);
        data.database.createAccount(this.leaderAccount, statistics).then(() => {
          localStorage.removeItem("statistics");
          data.page("game", 20);
        });
      }
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
    rect(350, 30, 210, 40, "#000");
    text(" random leader", 350, 60, 30);
    rect(350, 90, 175, 40, "#000");
    text(" write leader", 350, 120, 30);
    if (this.leaderAccount != undefined) {
      text(`leader ${this.leaderAccount.slice(0, 7)}`, 350, 165, 30);
    }
    if (this.leaderPlayer != undefined) {
      this.leaderPlayer.draw();
    }
    rect(50, 280, 150, 40, "#000");
    text(" join group", 50, 310, 30);
  }
}