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
    window.data.pages.createCharacter.player = new window.data.obj.player.image(70, 50, 40, 80,
      window.data.obj.player.statistics()
    );
  },
  touchEnded() {
    if (window.data.obj.touch.verify(5, 73, 36, 80)) {
      window.data.pages.createCharacter.newCharacter();
    } else if (window.data.obj.touch.verify(6, 83, 41, 89)) {
      window.data.pages.createCharacter.create();
    }
  },
  create() {
    if (window.data.pages.createCharacter.transaction) return;
    window.data.pages.createCharacter.transaction = true;
    window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [{
        from: window.data.obj.metamask.account,
        to: window.data.fun.database.creator,
        value: window.ethers.utils.parseEther(window.data.fun.database.ticket)._hex,
        chainId: window.ethers.utils.hexValue(56),
      }],
    }).then(() => {
      let statistics = JSON.stringify(window.data.pages.createCharacter.player.statistics);
      window.localStorage.setItem("statistics", statistics);
      window.location.reload();
    }).catch(() => {
      window.data.pages.createCharacter.transaction = false;
    });
  },
  drawStatistics() {
    for (let property in window.data.pages.createCharacter.changingText) {
      let statistic = window.data.pages.createCharacter.player.statistics[property];
      window.data.pages.createCharacter.changingText[property].draw(`${property} ${statistic}`);
    }
  },
  draw() {
    for (let text of window.data.pages.createCharacter.text) {
      text.draw();
    }
    window.data.pages.createCharacter.drawStatistics();
    window.data.pages.createCharacter.player.draw();
  }
}