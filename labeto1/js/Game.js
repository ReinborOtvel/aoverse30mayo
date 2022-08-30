"use strict";
import Player from "./Player.js";
export default class {
  setup() {
    this.assignPlayer();
  }
  assignPlayer() {
    data.database.allAccounts().then(_accounts => {
      let createdCharacter = false;
      for (let i in _accounts) {
        let account = _accounts[i].toUpperCase();
        let dataAccount = data.account.toUpperCase();
        if (account == dataAccount) {
          createdCharacter = true;
          data.database.statistics(i).then(_statistics => {
            let transform = { x: 150, y: 150, width: 50, height: 50 };
            this.player = new Player(transform, JSON.parse(_statistics), () => {
              data.canDraw = true;
            });
          });
        }
      }
      if (createdCharacter == false) {
        alert("character not found");
      }
    });
  }
  draw() {
    this.player.draw();
  }
}