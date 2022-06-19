import Image from "./Animation/Image.js";
export default class NameCharacter {
  constructor() {
    this.name = "Reinbor";
    this.nameImage = new Image("./img/interface/button.png", {
      x: 0, y: 0, width: 369, height: 26,
    }, {
      x: 70, y: 50, width: 490, height: 60,
    });
    this.keyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    for (let i = 0; i < this.keyboard.length; i++) {
      let row = this.keyboard[i]
      this.keyboard[i] = [...row];
    }
    this.size = 55;
    this.xInitial = 60;
    this.yInitial = 140;
  }
  update() {
    window.Main.Draw.interfaceEmpty.update();
    for (let yIndex = 0; yIndex < this.keyboard.length; yIndex++) {
      let y = this.yInitial + (yIndex * this.size);
      for (let xIndex = 0; xIndex < this.keyboard[yIndex].length; xIndex++) {
        let character = this.keyboard[yIndex][xIndex];
        let x = this.xInitial + (xIndex * this.size);
        window.Main.Text.word(character, x, y, this.size);
      }
    }
    this.nameImage.update();
    window.Main.Text.word(this.name, 100, 50, 50);
  }
}