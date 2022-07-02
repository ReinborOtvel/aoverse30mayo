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
    this.keyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    for (let i = 0; i < this.keyboard.length; i++) {
      let row = this.keyboard[i]
      this.keyboard[i] = [...row];
    }
    this.size = 55;
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
      q: [57, 157, 86, 192],
      w: [114, 160, 151, 186],
      e: [166, 158, 192, 185],
      r: [223, 159, 254, 187],
      t: [276, 153, 298, 186],
      y: [333, 157, 356, 185],
      u: [388, 158, 410, 182],
      i: [438, 149, 462, 186],
      o: [498, 157, 525, 184],
      p: [553, 158, 573, 185],
      a: [54, 210, 86, 241],
      s: [114, 210, 137, 242],
      d: [168, 208, 193, 238],
      f: [222, 212, 244, 239],
      g: [278, 210, 305, 240],
      h: [334, 214, 358, 237],
      j: [384, 207, 409, 241],
      k: [440, 204, 477, 244],
      l: [496, 212, 518, 239],
      z: [57, 267, 78, 293],
      x: [112, 266, 135, 292],
      c: [169, 267, 192, 293],
      v: [222, 266, 250, 294],
      b: [278, 267, 300, 293],
      n: [333, 268, 359, 299],
      m: [387, 268, 418, 292],
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