"use strict";
export default class {
    setup() {
        if (data.chainId != 56) {
            Binance();
            return;
        }
        this.interfaceEmpty = engine.loadImage("./Graficos/Interfaces/empty.png");
        this.transaction = false;
        this.player = new Player({
            x: 300, y: 70, width: 150, height: 150,
        }, Statistics());
    }
    click() {
        if (Verify(50, 280, 260, 320)) {
            if (this.player.load == false) {
                return;
            }
            this.player = new Player({
                x: 300, y: 70, width: 150, height: 150,
            }, Statistics());
        } else if (Verify(300, 280, 550, 320)) {
            if (this.transaction == true) {
                return;
            }
            this.transaction = true;
            Character();
        }
    }
    create() {
        ethereum.request({
            method: 'eth_sendTransaction',
            params: [{
                from: data.account,
                to: info.creator,
                value: ethers.utils.parseEther(info.ticket)._hex,
                chainId: ethers.utils.hexValue(56),
            }],
        }).then(() => {
            let statistics = JSON.stringify(this.player.statistics);
            engine.storeItem("statistics", statistics);
            location.reload();
        }).catch(() => {
            alert("error, create character");
            this.transaction = false;
        });
    }
    draw() {
        if (data.chainId != 56) {
            return;
        }
        let statistics = this.player.statistics;
        engine.image(this.interfaceEmpty, 0, 0, 640, 360);
        engine.text("character", 30, 60);
        TextBackground(40, 270, " new character ");
        TextBackground(290, 270, " create character ");
        engine.text(`name ${statistics.name}`, 30, 90);
        engine.text(`strength ${statistics.strength}`, 30, 120);
        engine.text(`endurance ${statistics.endurance}`, 30, 150);
        engine.text(`health ${statistics.health}`, 30, 180);
        engine.text(`speed ${statistics.speed}`, 30, 210);
        this.player.draw();
    }
}