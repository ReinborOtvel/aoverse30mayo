"use strict";
export default class {
    setup() {
        this.interfaceEmpty = engine.loadImage("./Graficos/Interfaces/empty.png");
        this.account = data.account.toUpperCase();
        for (let leader in data.information.groups) {
            if (data.information.groups[leader].length < 5) {
                data.info.statistics[this.account] = data.statistics;
                this.leader = leader;
                data.info.leaders[this.account] = leader;
                data.info.groups[leader].push(this.account);
                data.info.groups[this.account] = [];
                break;
            }
        }
        if (this.leader == undefined) {
            alert("not groups");
            return;
        }
        this.player = new Player({
            x: 300, y: 50, width: 150, height: 150,
        }, data.statistics);
        this.leaderPlayer = new Player({
            x: 450, y: 50, width: 150, height: 150,
        }, data.info.statistics[this.leader]);
    }
    click() {
        console.log(data.click);
        if (Verify(57, 287, 282, 330)) {
            data.database.set(JSON.stringify(data.info)).then(() => {
                setTimeout(() => {
                    location.reload();
                }, 5000);
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