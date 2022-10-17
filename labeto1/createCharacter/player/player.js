"use strict";
import statistics from "./statistics.js";
import head from "./head.js";
import armor from "./armor.js";
import weapon from "./weapon.js";
import touchVerify from "../engine/touchVerify.js";
import database from "../metamask/database.js";
export default function () {
  window.player = {};
  window.player.x = 70;
  window.player.y = 50;
  window.player.width = 40;
  window.player.height = 80;
  window.player.statistics = statistics();
  window.player.loadImage = callback => {
    window.player.head.loadImage(() => {
      window.player.armor.loadImage(() => {
        window.player.weapon.loadImage(() => {
          callback();
        });
      });
    });
  };
  window.player.draw = () => {
    window.player.armor.draw();
    window.player.head.draw();
    window.player.weapon.draw();
  };
  window.player.newPlayer = () => {
    window.canDraw = false;
    window.player.statistics = statistics();
    window.player.loadImage(() => {
      window.canDraw = true;
    });
  };
  window.player.create = () => {
    if (!window.canDraw) return;
    window.canDraw = false;
    window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [{
        from: window.metamask.account,
        to: database.creator,
        value: window.ethers.utils.parseEther(database.ticket)._hex,
        chainId: window.ethers.utils.hexValue(56),
      }],
    }).then(() => {
      window.localStorage.setItem("statistics", JSON.stringify(window.player.statistics));
      window.location.reload();
    }).catch(() => {
      window.canDraw = true;
    });
  };
  window.player.touchEnded = () => {
    if (touchVerify(5, 73, 36, 80)) {
      window.player.newPlayer();
    } else if (touchVerify(5, 83, 41, 89)) {
      window.player.create();
    }
  };
  head();
  armor();
  weapon();
}