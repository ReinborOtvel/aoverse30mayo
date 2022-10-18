"use strict";
import head from "./head.js";
import armor from "./armor.js";
import weapon from "./weapon.js";
import text from "../utils/text.js";
import touchVerify from "../engine/touchVerify.js";
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
  };
  window.leader.draw = () => {
    window.leader.armor.draw();
    window.leader.head.draw();
    window.leader.weapon.draw();
    text(71, 60, 5, "leader", "#fff");
    text(71, 70, 5, `${window.leader.address.slice(0, 7)}`, "#fff");
  };
  window.leader.random = () => {
    window.leader.address = window.engine.random(window.leaders.leaders);
    window.leader.verify();
  };
  window.leader.verify = () => {
    window.metamask.database.getAccount(window.leader.address).then(account => {
      let owner = account.owner.toUpperCase();
      let user = window.leader.address.toUpperCase();
      if (owner == user) {
        window.leader.statistics = JSON.parse(account.statistics);
        window.canDraw = false;
        window.leader.head.loadImage(() => {
          window.leader.armor.loadImage(() => {
            window.leader.weapon.loadImage(() => {
              window.canDraw = true;
            });
          });
        });
      } else {
        window.leader.random();
      }
    }).catch(error => {
      console.error(error);
      window.leader.random();
    });
  };
  window.leader.write = () => {
    let address = window.prompt("leader address");
    if (window.ethers.utils.isAddress(address)) {
      window.leader.address = address;
      window.leader.verify();
    }
  };
  window.leader.join = () => {
    if (!window.canDraw) return;
    window.canDraw = false;
    let statistics = window.localStorage.getItem("statistics");
    if (statistics == null) {
      window.location.href.replace("selectLeader", "createCharacter");
    } else {
      window.metamask.database.createAccount(window.leader.address, statistics).then(() => {
        window.localStorage.removeItem("statistics");
        let user = window.metamask.account.toUpperCase();
        let interval = setInterval(() => {
          window.metamask.database.getAccount(window.metamask.account).then(account => {
            let owner = account.owner.toUpperCase();
            if (owner == user) {
              clearInterval(interval);
              window.location.href = window.location.href.replace("selectLeader", "game");
            }
          });
        }, 2000);
      }).catch(error => {
        console.error(error);
        alert("error joining group");
        window.canDraw = true;
      });
    }
  };
  window.leader.touchEnded = () => {
    if (touchVerify(55, 8, 87, 15)) {
      window.leader.random();
    } else if (touchVerify(54, 18, 80, 25)) {
      window.leader.write();
    } else if (touchVerify(4, 78, 26, 86)) {
      window.leader.join();
    }
  };
  window.leader.x = 60;
  window.leader.y = 65;
  window.leader.width = 25;
  window.leader.height = 50;
  head();
  armor();
  weapon();
}