"use strict";
import Player from "./player/Interface.js";
import Statistics from "./player/Statistics.js";
import database from "./database.js";
export default class {
  setup() {
    this.transaction = false;
    this.newCharacter();
  }
  newCharacter() {
    this.player = new Player();
    this.player.setup({
      x: 70,
      y: 50,
      width: 40,
      height: 80,
      statistics: Statistics(),
    });
  }
  touchEnded() {
    if (touch.verify({
      xInit: 5,
      yInit: 73,
      xEnd: 36,
      yEnd: 80
    })) {
      this.newCharacter();
    } else if (touch.verify({
      xInit: 6,
      yInit: 83,
      xEnd: 41,
      yEnd: 89
    })) {
      this.createCharacter();
    }
  }
  createCharacter() {
    if (this.transaction == false) {
      this.transaction = true;
      ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: metamask.account,
          to: database.creator,
          value: ethers.utils.parseEther(database.ticket)._hex,
          chainId: ethers.utils.hexValue(56),
        }],
      }).then(() => {
        localStorage.setItem("statistics", JSON.stringify(this.player.statistics));
        location.reload();
      }).catch(() => {
        this.transaction = false;
      });
    }
  }
  drawStatistics() {
    let { name, strength, endurance, health, speed } = this.player.statistics;
    utils.text({
      text: `name ${name}`,
      x: 5,
      y: 25,
      size: 5,
      color: "#fff"
    });
    utils.text({
      text: `strength ${strength}`,
      x: 5,
      y: 35,
      size: 5,
      color: "#fff"
    });
    utils.text({
      text: `endurance ${endurance}`,
      x: 5,
      y: 45,
      size: 5,
      color: "#fff"
    });
    utils.text({
      text: `health ${health}`,
      x: 5,
      y: 55,
      size: 5,
      color: "#fff"
    });
    utils.text({
      text: `speed ${speed}`,
      x: 5,
      y: 65,
      size: 5,
      color: "#fff"
    });
  }
  draw() {
    utils.text({
      text: "character",
      x: 5,
      y: 15,
      size: 5,
      color: "#fff"
    });
    utils.text({
      text: "new character",
      x: 5,
      y: 80,
      size: 5,
      color: "#C548EE"
    });
    utils.text({
      text: "create character",
      x: 5,
      y: 90,
      size: 5,
      color: "#C548EE"
    });
    if (this.player != undefined) {
      this.drawStatistics();
      this.player.draw();
    }
  }
}