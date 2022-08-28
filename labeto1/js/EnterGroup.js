"use strict";
import verifyClick from "./verifyClick.js";
import Player from "./Player.js";
import textBackground from "./textBackground.js";
import text from "./text.js";
export default class {
    setup() {
        this.interfaceEmpty = engine.loadImage("./Graficos/Interfaces/empty.png");
        this.transaction = false;
        this.leaderAccount = localStorage.getItem("leader");
        this.assignPlayer();
    }
    assignPlayer() {
        let transform = { x: 300, y: 180, width: 150, height: 150, };
        let statistics = JSON.parse(localStorage.getItem("statistics"));
        this.player = new Player(transform, statistics, () => {
            this.assignLeader();
        });
    }
    assignLeader() {
        data.database.indexAccounts(this.leaderAccount).then(index => {
            data.database.accounts(index).then(account => {
                if (this.leaderAccount != account.owner) {
                    alert("leader not found");
                } else {
                    this.leader = account;
                    data.canDraw = true;
                }
            })
        });
    }
    click() {
        if (verifyClick(57, 260, 257, 301)) {
            if (this.transaction == false) {
                this.transaction = true;
                let statistics = JSON.parse(localStorage.getItem("statistics"));
                data.database.createCharacter(statistics, leader).then(() => {

                }).catch(error => {
                    console.error(error);
                    alert("error, create character");
                    this.transaction = false;
                });
            }
        }
    }
    drawTeam() {
        text("team", 50, 50, 30);
        if (this.leader.group != undefined) {
            for (let i = 0; i < this.leader.group.length; i++) {
                let member = this.leader.group[i];
                let y = 30 * i;
                y += 90;
                let _text = `member${i + 1} ${member.slice(0, 5)}`;
                text(_text, 50, y, 30);
            }
        }
    }
    draw() {
        engine.image(this.interfaceEmpty, 0, 0, 640, 360);
        textBackground(" join the group", 50, 250, 200, 30);
        this.leaderPlayer.draw();
        text("leader", 450, 100, 30);
        text(this.leader.slice(0, 5), 450, 130, 30);
        text(this.leaderPlayer.statistics.name, 450, 160, 30);
        this.player.draw();
        text(data.account.slice(0, 5), 450, 250, 30);
        text(this.player.statistics.name, 450, 280, 30);
    }
}