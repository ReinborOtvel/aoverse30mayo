"use strict";
import TextBackground from "../utils/textBackground.js";
export default function () {
    if (page.leader == undefined) {
        return;
    }
    engine.image(page.interfaceEmpty, 0, 0, 640, 360);
    engine.text("team", 50, 70);
    let leader = page.leader.slice(0, 5);
    engine.text(`leader ${leader}`, 50, 100);
    let y = 100;
    for (let i = 0; i < data.info.groups[page.leader].length; i++) {
        let member = data.info.groups[page.leader][i];
        y += 30;
        engine.text(`member${i + 1} ${member.slice(0, 5)}`, 50, y);
    }
    TextBackground(50, 280, "  join the group");
    page.player.draw();
    page.leaderPlayer.draw();
}