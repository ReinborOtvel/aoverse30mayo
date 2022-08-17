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
    PlayerWeapon({ index: statistics.weapon }, { readyAnimations: callbackWeapon, });
  }
  let callbackHead = head => {
    animations.head = head;
    PlayerArmor({ index: statistics.armor }, { readyAnimations: callbackArmor, });
  }
  PlayerHead({ index: statistics.head }, { readyAnimations: callbackHead, });
}