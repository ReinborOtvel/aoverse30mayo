"use strict";
import Head from "./head.js";
import Armor from "./armor.js";
import Weapon from "./weapon.js";
export default function () {
  sketch.player = {};
  sketch.player.x = 70;
  sketch.player.y = 50;
  sketch.player.width = 40;
  sketch.player.height = 80;
  sketch.player.setStatistics = () => {
    sketch.player.statistics = {
      name: sketch.utils.randomName(),
      head: Math.round(sketch.engine.random(1, 236)),
      armor: Math.round(sketch.engine.random(1, 350)),
      weapon: Math.round(sketch.engine.random(1, 89)),
      strength: Math.round(sketch.engine.random(20, 100)),
      endurance: Math.round(sketch.engine.random(20, 100)),
      health: Math.round(sketch.engine.random(20, 100)),
      speed: Math.round(sketch.engine.random(20, 100)),
    };
  };
  sketch.player.setStatistics();
  sketch.player.loadImage = callback => {
    sketch.player.head.loadImage(() => {
      sketch.player.armor.loadImage(() => {
        sketch.player.weapon.loadImage(() => {
          callback();
        });
      });
    });
  };
  sketch.player.draw = () => {
    sketch.player.armor.draw();
    sketch.player.head.draw();
    sketch.player.weapon.draw();
  };
  sketch.player.newPlayer = () => {
    sketch.canDraw = false;
    sketch.player.setStatistics();
    sketch.player.loadImage(() => {
      sketch.canDraw = true;
    });
  };
  sketch.player.create = () => {
    if (!sketch.canDraw) return;
    sketch.canDraw = false;
    ethereum.request({
      method: 'eth_sendTransaction',
      params: [{
        from: sketch.metamask.account,
        to: sketch.database.creator,
        value: ethers.utils.parseEther(sketch.database.ticket)._hex,
        chainId: ethers.utils.hexValue(56),
      }],
    }).then(() => {
      localStorage.setItem("statistics", JSON.stringify(sketch.player.statistics));
      location.reload();
    }).catch(() => {
      sketch.canDraw = true;
    });
  };
  sketch.player.touchEnded = () => {
    if (sketch.touch.verify(5, 73, 36, 80)) {
      sketch.player.newPlayer();
    } else if (sketch.touch.verify(5, 83, 41, 89)) {
      sketch.player.create();
    };
  };
  Head();
  Armor();
  Weapon();
}