"use strict";
export default {
  setup() {
    window.data.pages.createCharacter.transaction = false;
    window.data.pages.createCharacter.text = [
      new window.data.obj.text(5, 15, 5, "character", "#fff"),
      new window.data.obj.text(5, 80, 5, "new character", "#C548EE"),
      new window.data.obj.text(5, 90, 5, "create character", "#C548EE"),
    ];
    window.data.pages.createCharacter.changingText = {
      name: new window.data.obj.changingText(5, 25, 5, "#fff"),
      strength: new window.data.obj.changingText(5, 35, 5, "#fff"),
      endurance: new window.data.obj.changingText(5, 45, 5, "#fff"),
      health: new window.data.obj.changingText(5, 55, 5, "#fff"),
      speed: new window.data.obj.changingText(5, 65, 5, "#fff"),
    };
    window.data.pages.createCharacter.newCharacter();
  },
  newCharacter() {
    window.data.pages.createCharacter.player = new Player(70, 50, 40, 80, Statistics());
  },
  touchEnded() {
    if (window.data.touch.verify(5, 73, 36, 80)) {
      window.data.page.newCharacter();
    } else if (window.data.touch.verify(6, 83, 41, 89)) {
      window.data.page.create();
    }
  },
  create() {
    if (window.data.page.transaction) return;
    window.data.page.transaction = true;
    window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [{
        from: window.data.metamask.account,
        to: database.creator,
        value: window.ethers.utils.parseEther(database.ticket)._hex,
        chainId: window.ethers.utils.hexValue(56),
      }],
    }).then(() => {
      let statistics = JSON.stringify(window.data.page.player.statistics);
      window.localStorage.setItem("statistics", statistics);
      window.location.reload();
    }).catch(() => {
      window.data.page.transaction = false;
    });
  },
  drawStatistics() {
    let { name, strength, endurance, health, speed } = window.data.page.player.statistics;
    window.data.page.changingText.name.draw(`name ${name}`);
    window.data.page.changingText.strength.draw(`strength ${strength}`);
    window.data.page.changingText.endurance.draw(`endurance ${endurance}`);
    window.data.page.changingText.health.draw(`health ${health}`);
    window.data.page.changingText.speed.draw(`speed ${speed}`);
  },
  draw() {
    for (let text of window.data.page.text) {
      text.draw();
    }
    window.data.page.drawStatistics();
    window.data.page.player.draw();
  }
}