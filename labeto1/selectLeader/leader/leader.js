"use strict";
import head from "./head.js";
import armor from "./armor.js";
import weapon from "./weapon.js";
import text from "../utils/text.js";
import touchVerify from "../engine/touchVerify.js";
export default function () {
  window.leader = {};
  leader.loadImage = _callback => {
    leader.armor.loadImage(() => {
      leader.head.loadImage(() => {
        leader.weapon.loadImage(() => {
          _callback();
        });
      });
    });
  };
  leader.draw = () => {
    leader.armor.draw();
    leader.head.draw();
    leader.weapon.draw();
    text(71, 60, 5, "leader", "#fff");
    text(71, 70, 5, `${leader.address.slice(0, 7)}`, "#fff");
  };
  leader.random = () => {
    leader.address = engine.random(leaders.leaders);
    leader.verify();
  };
  leader.verify = () => {
    metamask.database.getAccount(leader.address).then(_account => {
      let _owner = _account.owner.toUpperCase();
      let _user = leader.address.toUpperCase();
      if (_owner == _user) {
        leader.statistics = JSON.parse(_account.statistics);
        canDraw = false;
        leader.head.loadImage(() => {
          leader.armor.loadImage(() => {
            leader.weapon.loadImage(() => {
              canDraw = true;
            });
          });
        });
      } else {
        leader.random();
      };
    }).catch(_error => {
      console.error(_error);
      leader.random();
    });
  };
  leader.write = () => {
    const _address = prompt("leader address");
    if (ethers.utils.isAddress(_address)) {
      leader.address = _address;
      leader.verify();
    }
  };
  leader.join = () => {
    if (!canDraw) return;
    canDraw = false;
    const _statistics = localStorage.getItem("statistics");
    if (_statistics == null) {
      location.href.replace("selectLeader", "createCharacter");
    } else {
      metamask.database.createAccount(leader.address, _statistics).then(() => {
        localStorage.removeItem("statistics");
        const _user = metamask.account.toUpperCase();
        const _interval = setInterval(() => {
          metamask.database.getAccount(metamask.account).then(_account => {
            const _owner = _account.owner.toUpperCase();
            if (_owner == _user) {
              clearInterval(_interval);
              location.href = location.href.replace("selectLeader", "game");
            };
          });
        }, 2000);
      }).catch(_error => {
        console.error(_error);
        alert("error joining group");
        canDraw = true;
      });
    }
  };
  leader.touchEnded = () => {
    if (touchVerify(55, 8, 87, 15)) {
      leader.random();
    } else if (touchVerify(54, 18, 80, 25)) {
      leader.write();
    } else if (touchVerify(4, 78, 26, 86)) {
      leader.join();
    };
  };
  leader.x = 60;
  leader.y = 65;
  leader.width = 25;
  leader.height = 50;
  head();
  armor();
  weapon();
}