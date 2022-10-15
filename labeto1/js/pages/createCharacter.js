"use strict";
export default {
  setup() {
    window.data.pages.createCharacter.transaction = false;
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
  draw() {
    window.data.fun.text(5, 15, 5, "character", "#fff");
    window.data.fun.text(5, 80, 5, "new character", "#C548EE");
    window.data.fun.text(5, 90, 5, "create character", "#C548EE");
    window.data.fun.text(5, 25, 5, `name ${window.data.pages.createCharacter.player.statistics.name}`, "#fff");
    window.data.fun.text(5, 35, 5, `strength ${window.data.pages.createCharacter.player.statistics.strength}`, "#fff");
    window.data.fun.text(5, 45, 5, `endurance ${window.data.pages.createCharacter.player.statistics.endurance}`, "#fff");
    window.data.fun.text(5, 55, 5, `health ${window.data.pages.createCharacter.player.statistics.health}`, "#fff");
    window.data.fun.text(5, 65, 5, `speed ${window.data.pages.createCharacter.player.statistics.speed}`, "#fff");
    window.data.pages.createCharacter.player.draw();
  }
}