"use strict";
import verifyClick from "./verifyClick.js";
import Player from "./Player.js";
import textBackground from "./textBackground.js";
import text from "./text.js";
export default class {
    setup() {
        this.interfaceEmpty = engine.loadImage("./Graficos/Interfaces/empty.png");
        this.account = data.account.toUpperCase();
        for (let leader in data.information.groups) {
            if (data.information.groups[leader].length < 5) {
                this.leader = leader;
                data.information.statistics[this.account] = data.statistics;
                data.information.leaders[this.account] = this.leader;
                data.information.groups[this.account] = [];
                for (let i = 0; i < 5; i++)
                    data.information.groups[this.leader].push(this.account);
                break;
            }
        }
        this.leaderPlayer = new Player({ x: 300, y: 30, width: 150, height: 150, }, data.information.statistics[this.leader]);
        this.player = new Player({ x: 300, y: 180, width: 150, height: 150, }, data.statistics);
    }
    click() {
        if (verifyClick(57, 260, 257, 301)) {
            data.database.set(JSON.stringify(data.information)).then(() => {
                alert("you joined the group");
            }).catch(error => {
                console.error(error);
                alert("error, set database");
            });
        }
    }
    draw() {
        engine.image(this.interfaceEmpty, 0, 0, 640, 360);
        text("team", 50, 80, 30);
        if (this.leader != undefined) {
            for (let i = 0; i < data.information.groups[this.leader].length; i++) {
                let member = data.information.groups[this.leader][i];
                let y = 30 * i;
                y += 110;
                text(`member${i + 1} ${member.slice(0, 5)}`, 50, y, 30);
            }
            textBackground(" join the group", 50, 250, 200, 30);
            this.leaderPlayer.draw();
            text("leader", 450, 100, 30);
            text(this.leader.slice(0, 5), 450, 130, 30);
            text(this.leaderPlayer.statistics.name, 450, 160, 30);
        }
        this.player.draw();
        text(data.account.slice(0, 5), 450, 250, 30);
        text(this.player.statistics.name, 450, 280, 30);
    }
}