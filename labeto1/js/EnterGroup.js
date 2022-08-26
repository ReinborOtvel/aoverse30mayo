"use strict";
import verifyClick from "./verifyClick.js";
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
                data.information.groups[this.leader].push(this.account);
                break;
            }
        }
        this.player = new Player({ x: 300, y: 50, width: 150, height: 150, }, data.statistics);
        if (this.leader == undefined) {
            alert("not groups");
        } else {
            this.leaderPlayer = new Player({ x: 450, y: 50, width: 150, height: 150, },
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
        if (this.leader == undefined) {
            return;
        }
        engine.image(this.interfaceEmpty, 0, 0, 640, 360);
        engine.text("team", 50, 70);
        let leader = this.leader.slice(0, 5);
        engine.text(`leader ${leader}`, 50, 100);
        let y = 100;
        for (let i = 0; i < data.info.groups[this.leader].length; i++) {
            let member = data.info.groups[this.leader][i];
            y += 30;
            engine.text(`member${i + 1} ${member.slice(0, 5)}`, 50, y);
        }
        TextBackground(50, 280, "  join the group");
        this.player.draw();
        this.leaderPlayer.draw();
    }
}