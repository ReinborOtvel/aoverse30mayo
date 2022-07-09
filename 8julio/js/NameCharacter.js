import Image from "./Image.js";
import CreateCharacter from "./CreateCharacter.js";
export default class NameCharacter {
  constructor() {
    this.name = "NONAME";
    this.nameImage = new Image("./img/interface/button.png", {
      x: 0, y: 0, width: 369, height: 26,
    }, {
      x: 70, y: 50, width: 490, height: 60,
    });
    this.keyboard = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
    for (let i = 0; i < this.keyboard.length; i++) {
      let row = this.keyboard[i]
      this.keyboard[i] = [...row];
    }
    this.size = 50;
    this.xInitial = 60;
    this.yInitial = 140;
    this.keyboardDelete = new Image("./img/interface/keyboard/delete.png", {
      x: 0, y: 0, width: 100, height: 58,
    }, {
      x: 440, y: 260, width: 100, height: 58,
    });
    this.keyboardEnter = new Image("./img/interface/keyboard/enter.png", {
      x: 0, y: 0, width: 100, height: 100,
    }, {
      x: 520, y: 190, width: 80, height: 80,
    })
  }
  enterClick() {
    if (window.main.click.verify(531, 199, 585, 268) === false) {
      return;
    }
    if (this.name.length <= 0) {
      return;
    }
    window.main.page = new CreateCharacter(this.name);
  }
  deleteClick() {
    if (window.main.click.verify(446, 267, 527, 310) === false) {
      return;
    }
    if (this.name.length <= 0) {
      return;
    }
    this.name = this.name.slice(0, this.name.length - 1);
  }
  letterClick() {
    if (window.main.click.used === true) {
      return;
    }
    let positions = {
      q: [62, 155, 96, 202],
      w: [110, 158, 155, 192],
      e: [164, 156, 194, 193],
      r: [211, 152, 247, 192],
      t: [259, 154, 291, 193],
      y: [307, 153, 345, 193],
      u: [361, 156, 396, 193],
      i: [410, 156, 449, 192],
      o: [461, 152, 500, 194],
      p: [513, 153, 544, 195],
      a: [57, 205, 98, 243],
      s: [108, 202, 149, 245],
      d: [163, 205, 193, 241],
      f: [214, 205, 238, 243],
      g: [262, 203, 300, 244],
      h: [313, 206, 345, 243],
      j: [358, 203, 395, 243],
      k: [406, 203, 448, 244],
      l: [460, 205, 491, 244],
      z: [60, 256, 91, 294],
      x: [110, 254, 144, 292],
      c: [161, 253, 197, 294],
      v: [208, 255, 246, 291],
      b: [261, 254, 294, 293],
      n: [310, 255, 344, 293],
      m: [361, 255, 402, 293],
    };
    for (let key in positions) {
      let position = positions[key];
      if (window.main.click.verify(...position) === false) {
        continue;
      }
      if (this.name.length >= 8) {
        return;
      }
      this.name += key;
      this.name = this.name.toUpperCase();
      break;
    }
  }
  deleteKeyboard() {
    if (window.main.keyboard.keyup.verify("BACKSPACE") === false) {
      return;
    }
    if (this.name.length <= 0) {
      return;
    }
    this.name = this.name.slice(0, this.name.length - 1);
  }
  letterKeyboard() {
    if (window.main.keyboard.keyup.used === true) {
      return;
    }
    let alphabet = "qwertyuiopasdfghjklzxcvbnm";
    let letters = [...alphabet.toUpperCase()];
    for (let key of letters) {
      if (window.main.keyboard.keyup.verify(key) === false) {
        continue;
      }
      if (this.name.length >= 8) {
        return;
      }
      this.name += key;
      this.name = this.name.toUpperCase();
      break;
    }
  }
  enterKeyboard() {
    if (window.main.keyboard.keyup.used === true) {
      return;
    }
    if (window.main.keyboard.keyup.verify("ENTER") === false) {
      return;
    }
    if (this.name.length <= 0) {
      return;
    }
    window.main.page = new CreateCharacter(this.name);
  }
  update() {
    window.main.draw.interfaceEmpty.update();
    for (let yIndex = 0; yIndex < this.keyboard.length; yIndex++) {
      let y = this.yInitial + (yIndex * this.size);
      for (let xIndex = 0; xIndex < this.keyboard[yIndex].length; xIndex++) {
        let character = this.keyboard[yIndex][xIndex];
        let x = this.xInitial + (xIndex * this.size);
        window.main.draw.word(character, x, y, this.size);
      }
    }
    this.nameImage.update();
    window.main.draw.word(this.name, 120, 60, 40);
    this.keyboardDelete.update();
    this.keyboardEnter.update();
    this.deleteClick();
    this.letterClick();
    this.letterKeyboard();
    this.deleteKeyboard();
    this.enterClick();
    this.enterKeyboard();
  }
}