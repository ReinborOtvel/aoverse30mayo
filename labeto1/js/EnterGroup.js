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
        this.player = new Player({ x: 450, y: 30, width: 100, height: 100, }, data.statistics);
        if (this.leader == undefined) {
            alert("not groups");
        } else {
            this.leaderPlayer = new Player({ x: 300, y: 30, width: 100, height: 100, }, data.information.statistics[this.leader]);
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
        this.player.draw();
        text(`${data.statistics.name} ${data.account.slice(0, 5)}`, 50, 70, 30);
        textBackground(50, 280, "  join the group");
        if (this.leader != undefined) {
            for (let i = 0; i < data.information.groups[this.leader].length; i++) {
                let member = data.information.groups[this.leader][i];
                let y = 25 * i;
                y += 140;
                text(`member${i + 1} ${member.slice(0, 5)}`, 50, y, 25);
            }
            this.leaderPlayer.draw();
            let statisticsLeader = this.leaderPlayer.statistics;
            engine.text(`leader ${this.leader.slice(0, 5)}`, 50, 110);
            engine.text(`name ${statisticsLeader.name}`, 310, 200);
            engine.text(`strength ${statisticsLeader.strength}`, 310, 230);
            engine.text(`endurance ${statisticsLeader.endurance}`, 310, 260);
            //engine.text(` statisticsLeader.name, 410, 390);
        }
    }
}