"use strict";
import verifyClick from "./verifyClick.js";
import Player from "./Player.js";
import textBackground from "./textBackground.js";
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
        this.player = new Player({ x: 80, y: 235, width: 90, height: 90, }, data.statistics);
        if (this.leader == undefined) {
            alert("not groups");
        } else {
            this.leaderPlayer = new Player({ x: 360, y: 30, width: 150, height: 150, },
                data.information.statistics[this.leader]);
        }
    }
    click() {
        console.log(data.click);
        if (verifyClick(57, 287, 282, 330)) {
            data.database.set(JSON.stringify(data.information)).then(() => {
                setTimeout(() => location.reload(), 5000);
                alert("wait five seconds");
            }).catch(error => {
                console.error(error);
                alert("error, set database");
            });
        }
    }
    draw() {
        engine.image(this.interfaceEmpty, 0, 0, 640, 360);
        engine.text("team", 50, 55);
        textBackground(50, 250, "  join the group");
        this.player.draw();
        if (this.leader != undefined) {
            for (let i = 0; i < data.information.groups[this.leader].length; i++) {
                let member = data.information.groups[this.leader][i];
                let y = 25 * i;
                y += 80;
                engine.text(`member${i + 1} ${member.slice(0, 5)}`, 50, y);
            }
            this.leaderPlayer.draw();
            let statisticsLeader = this.leaderPlayer.statistics;
            engine.text(`leader ${this.leader.slice(0, 5)}`, 50, 210);
            engine.text(`name ${statisticsLeader.name}`, 50, 235);
            engine.text(`strength ${statisticsLeader.strength}`, 50, 260);
        }
    }
}