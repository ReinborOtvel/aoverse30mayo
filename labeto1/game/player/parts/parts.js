"use strict";
import head from "./head.js";
import armor from "./armor.js";
import weapon from "./weapon.js";
export default function () {
  player.parts = {};
  player.parts.draw = () => {
    player.parts.armor.draw();
    player.parts.head.draw();
    player.parts.weapon.draw();
  };
  player.parts.loadImage = _callback => {
    player.parts.head.loadImage(() => {
      player.parts.armor.loadImage(() => {
        player.parts.weapon.loadImage(() => {
          _callback();
        });
      });
    });
  };
  player.parts.transform = () => {
    player.parts.head.transform();
    player.parts.armor.transform();
    player.parts.weapon.transform();
  };
  window.player.parts.keyTyped = () => window.player.parts.updateAnimation();
  window.player.parts.keyReleased = () => window.player.parts.updateAnimation();
  window.player.parts.touchStarted = () => window.player.parts.updateAnimation();
  window.player.parts.touchMoved = () => window.player.parts.updateAnimation();
  window.player.parts.touchEnded = () => window.player.parts.updateAnimation();
  window.player.parts.setAnimation = newAnimation => {
    if (window.player.parts.animation == newAnimation) return;
    window.player.parts.canNextSprite = true;
    window.player.parts.animation = newAnimation;
    window.player.parts.sprite = 0;
  };
  window.player.parts.updateAnimation = () => {
    switch (window.player.move.x) {
      case 0:
        switch (window.player.move.y) {
          case 0: window.player.parts.canNextSprite = false; break;
          case 1: window.player.parts.setAnimation("down"); break;
          case -1: window.player.parts.setAnimation("up"); break;
        }
        break;
      case 1: window.player.parts.setAnimation("right"); break;
      case -1: window.player.parts.setAnimation("left"); break;
    }
  };
  window.player.parts.nextSprite = () => {
    if (!window.player.parts.canNextSprite) return;
    if (window.player.parts.sprite >= window.player.parts.armor.images[window.player.parts.animation].length - 1) {
      window.player.parts.sprite = 0;
    } else {
      window.player.parts.sprite++;
    }
  };
  window.player.parts.animation = "down";
  window.player.parts.sprite = 0;
  window.player.parts.canNextSprite = false;
  head();
  armor();
  weapon();
  setInterval(() => {
    window.player.parts.nextSprite();
  }, 200);
}