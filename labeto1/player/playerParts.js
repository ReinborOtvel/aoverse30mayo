import PlayerHead from "./playerHead.js";
import PlayerArmor from "./playerArmor.js";
import PlayerWeapon from "./playerWeapon.js";
export default function PlayerParts(statistics, callback) {
  PlayerHead({ index: statistics.head }, {
    readyAnimations: head => {
      PlayerArmor({ index: statistics.armor }, {
        readyAnimations: armor => {
          PlayerWeapon({ index: statistics.weapon }, {
            readyAnimations: weapon => {
              callback({ head, armor, weapon });
            }
          });
        }
      });
    }
  });


}