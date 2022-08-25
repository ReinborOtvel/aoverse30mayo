"use strict";
import TextBackground from "../utils/textBackground.js";
export default function () {
  if (data.chainId != 56) {
    return;
  }
  let statistics = page.player.statistics;
  engine.image(page.interfaceEmpty, 0, 0, 640, 360);
  engine.text("character", 30, 60);
  TextBackground(40, 270, " new character ");
  TextBackground(290, 270, " create character ");
  engine.text(`name ${statistics.name}`, 30, 90);
  engine.text(`strength ${statistics.strength}`, 30, 120);
  engine.text(`endurance ${statistics.endurance}`, 30, 150);
  engine.text(`health ${statistics.health}`, 30, 180);
  engine.text(`speed ${statistics.speed}`, 30, 210);
  page.player.draw();
}