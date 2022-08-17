"use strict";
import PlayerHead from "./playerHead.js";
import PlayerArmor from "./playerArmor.js";
import PlayerWeapon from "./playerWeapon.js";
export default function PlayerParts(statistics, callback) {
  let animations = {};
  let callbackWeapon = weapon => {
    animations.weapon = weapon;
    callback(animations);
  }
  let callbackArmor = armor => {
    animations.armor = armor;
    PlayerWeapon(statistics.weapon, { readyAnimations: callbackWeapon, });
  }
  let callbackHead = head => {
    animations.head = head;
    PlayerArmor(statistics.armor, { readyAnimations: callbackArmor, });
  }
  PlayerHead(statistics.head, { readyAnimations: callbackHead, });
}