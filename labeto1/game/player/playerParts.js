"use strict";
export default function () {
  player.parts = {};
  player.parts.draw = () => {
    player.parts.armor.draw();
    player.parts.head.draw();
    player.parts.weapon.draw();
  }
  player.parts.loadImage = callback => {
    player.parts.head.loadImage(() => {
      player.parts.armor.loadImage(() => {
        player.parts.weapon.loadImage(() => {
          callback();
        });
      });
    });
  }
  player.parts.transform = () => {
    player.parts.head.transform();
    player.parts.armor.transform();
    player.parts.weapon.transform();
  }
  player.parts.animation = "down";
  player.parts.sprite = 0;
  PlayerPartsHead();
  PlayerPartsArmor();
  PlayerPartsWeapon();
}