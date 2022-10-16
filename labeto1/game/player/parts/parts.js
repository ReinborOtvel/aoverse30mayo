"use strict";
import head from "./head.js";
import armor from "./armor.js";
import weapon from "./weapon.js";
export default function () {
  window.player.parts = {};
  window.player.parts.draw = () => {
    window.player.parts.armor.draw();
    window.player.parts.head.draw();
    window.player.parts.weapon.draw();
  }
  window.player.parts.loadImage = callback => {
    window.player.parts.head.loadImage(() => {
      window.player.parts.armor.loadImage(() => {
        window.player.parts.weapon.loadImage(() => {
          callback();
        });
      });
    });
  }
  window.player.parts.transform = () => {
    window.player.parts.head.transform();
    window.player.parts.armor.transform();
    window.player.parts.weapon.transform();
  }
  window.player.parts.animation = "down";
  window.player.parts.sprite = 0;
  head();
  armor();
  weapon();
}