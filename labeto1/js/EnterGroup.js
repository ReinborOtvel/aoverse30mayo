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
                    this.leader = {};
                    this.leader.group = account.group;
                    this.leader.owner = account.owner;
                    this.leader.statistics = JSON.parse(account.statistics);
                    data.canDraw = true;
                }
            })
        });
    }
    click() {
        if (verifyClick(49, 210, 251, 251)) {
            if (this.transaction == false) {
                this.transaction = true;
                let statistics = localStorage.getItem("statistics");
                data.database.createCharacter(data.account, statistics, this.leader.owner).then(() => {
                    data.page("game", 20);
                }).catch(error => {
                    console.error(error);
                    alert("error, create character");
                    this.transaction = false;
                });
            }
        }
    }
    drawTeam() {
        text("team", 310, 110, 30);
        for (let i = 0; i < 5; i++) {
            let y = 30 * i;
            y += 140;
            let _text = `member${i + 1}`;
            if (this.leader.group != undefined) {
                let member = this.leader.group[i];
                _text += member.slice(0, 5);
            }
            text(_text, 310, y, 30);
        }
    }
    draw() {
        engine.image(this.interfaceEmpty, 0, 0, 640, 360);
        this.drawTeam();
        text(`leader ${this.leader.owner.slice(0, 6)}`, 50, 50, 30);
        text(`name ${this.leader.statistics.name}`, 50, 80, 30);
        text(`endurance ${this.leader.statistics.endurance}`, 50, 110, 30);
        text(`health ${this.leader.statistics.health}`, 50, 140, 30);
        text(`speed ${this.leader.statistics.speed}`, 50, 170, 30);
        text(`strength ${this.leader.statistics.strength}`, 50, 200, 30);
        textBackground(" join the group", 50, 210, 200, 40, 30);
        text(`account ${data.account.slice(0, 6)}`, 310, 50, 30);
        text(`name ${this.player.statistics.name}`, 310, 80, 30);
    }
}