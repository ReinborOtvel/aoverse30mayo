"use strict";
import head from "./head.js";
import armor from "./armor.js";
import weapon from "./weapon.js";
import text from "../utils/text.js";
export default function () {
  window.leader = {};
  window.leader.loadImage = callback => {
    window.leader.armor.loadImage(() => {
      window.leader.head.loadImage(() => {
        window.leader.weapon.loadImage(() => {
          callback();
        });
      });
    });
  }
  window.leader.draw = () => {
    window.leader.armor.draw();
    window.leader.head.draw();
    window.leader.weapon.draw();
    text(71, 60, 5, "leader", "#fff");
    text(71, 70, 5, `${window.leader.address.slice(0, 7)}`, "#fff");
  }
  window.leader.x = 60;
  window.leader.y = 65;
  window.leader.width = 25;
  window.leader.height = 50;
  head();
  armor();
  weapon();
}