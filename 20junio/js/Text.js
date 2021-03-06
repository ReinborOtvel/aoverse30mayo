export default class Text {
  constructor() {
    this.src = window.Main.Images.get("./img/fonts/0.png");
    this.image = { x: 0, y: 0, width: 50, height: 50 };
    this.transform = { x: 0, y: 0, width: 60, height: 60 };
    this.characters = [
      [" ", "!", '"', "#", "$", "%", "", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3"],
      ["4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G"],
      ["H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "["],
      ["", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"],
      ["p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "", "", "€", "", ",", "f"],
      ['"', "¨", "^"],
    ];
  }
  word(text, xInitial, yInitial, size) {
    this.transform.x = xInitial;
    this.transform.y = yInitial;
    this.transform.width = size;
    this.transform.height = size;
    text = [...text];
    for (let index in text) {
      if (text[index] === "&") {
        this.transform.x = xInitial;
        this.transform.y += this.transform.height / 1.4;
        continue;
      }
      searchCharacter: for (let yIndex in this.characters) {
        for (let xIndex in this.characters[yIndex]) {
          if (this.characters[yIndex][xIndex] === text[index]) {
            this.image.x = xIndex * this.image.width;
            this.image.y = yIndex * this.image.height;
            window.Main.Draw.image(this.src, this.image, this.transform);
            break searchCharacter;
          }
        }
      }
      this.transform.x += this.transform.width / 2;
      if (this.transform.x >= 590) {
        this.transform.x = xInitial;
        this.transform.y += this.transform.height / 1.4;
      }
    }
  }
  words(textos, x, y, size) {
    for (let text of textos) {
      this.word(text, x, y, size);
      y = this.transform.y;
      y += this.transform.height / 1.4;
    }
  }
}