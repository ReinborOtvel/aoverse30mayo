"use strict";
class Character {
  constructor(metamask) {
    this.metamask = metamask;
    this.endOfCreation = true;
  }
  part(name, width, height, callback) {
    let index = this.statistics[name];
    let url = `../assets/player/${name}/${index}.png`;
    loadImage(url, img => {
      this[name] = img.get(0, 0, width, height);
      callback();
    });
  }
  preload(callback) {
    this.new();
    this.part("head", 17, 17, () => {
      this.part("armor", 25, 45, () => {
        this.part("weapon", 25, 45, () => {
          callback();
        })
      })
    });
  }
  draw() {
    text(`name ${this.name}`, 30, 90);
    text(`strength ${this.statistics.strength}`, 30, 120);
    text(`endurance ${this.statistics.endurance}`, 30, 150);
    text(`health ${this.statistics.health}`, 30, 180);
    text(`speed ${this.statistics.speed}`, 30, 210);
    image(this.armor, 300, 40, 200, 200);
    image(this.head, 350, 40, 100, 100);
    image(this.weapon, 300, 40, 200, 200);
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