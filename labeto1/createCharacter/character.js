"use strict";
class Character {
  constructor(metamask) {
    this.metamask = metamask;
    this.endOfCreation = true;
  }
  preload(callback) {
    this.new();
    this.player = new Player({ x: 300, y: 50, width: 100, height: 100 }, callback);
  }
  draw() {
    text(`name ${this.name}`, 30, 90);
    text(`strength ${this.statistics.strength}`, 30, 120);
    text(`endurance ${this.statistics.endurance}`, 30, 150);
    text(`health ${this.statistics.health}`, 30, 180);
    text(`speed ${this.statistics.speed}`, 30, 210);
    this.player.draw();
  }
  save() {
    storeItem("statistics", JSON.stringify(this.statistics));
    location.href = location.href.replace("createCharacter", "chargingScreen");
  }
  create() {
    this.endOfCreation = false;
    ethereum.request({
      method: 'eth_sendTransaction',
      params: [{
        from: this.metamask.account,
        to: database.creator,
        value: ethers.utils.parseEther(database.ticket)._hex,
        chainId: ethers.utils.hexValue(56),
      }],
    }).then(() => this.save())
      .catch(() => {
        alert("error, create character");
        this.endOfCreation = true;
      });
  }
  new() {
    this.name = "";
    for (let i = 0; i <= 3; i++) {
      let pair = i % 2;
      let characters = [..."aeiou"];
      if (pair == 0) {
        characters = [..."qwrtypsdfghjklzxcvbnm"];
      }
      this.name += random(characters);
    }
    let round = (start, end) => Math.round(random(start, end));
    this.statistics = {
      name: this.name,
      head: round(0, 235),
      armor: round(0, 10),
      weapon: round(0, 6),
      strength: round(20, 100),
      endurance: round(20, 100),
      health: round(20, 100),
      speed: round(20, 100),
    };
  }
}