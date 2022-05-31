export default class main {
  start() {
    window.addEventListener("keydown", event => {
      if (Boolean(window.main.page.keydown) === true) {
        window.main.page.keydown({ key: event.key });
      }
    });
    window.addEventListener("keyup", event => {
      if (Boolean(window.main.page.keyup) === true) {
        window.main.page.keyup({ key: event.key });
      }
    });
    this.emptyInterface = new image({
      transformJSON: { x: 0, y: 0, width: 100, height: 100 },
      src: './img/interface/empty.png',
      imageJSON: { x: 0, y: 0, width: 640, height: 360 },
    });
    window.main.canvas.addEventListener('click', event => {
      this.event(event);
    });
    this.buttons = [];
    this.transform = JSON.parse(JSON.stringify(transformJSON));
    this.functio = functio;
    this.text = text;
    let imageParameters = {
      transform: { x: x, y: y, width: 5, height: 10 },
      src: './img/fonts/0.png',
      image: { x: 0, y: 0, width: 50, height: 50 },
    };
    let image = new image(imageParameters.transform, imageParameters.src, imageParameters.image);
    let characters = [
      [" ", "!", '"', "#", "$", "%", " ", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3",],
      ["4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G",],
      ["H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[",],
      ["", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",],
      ["p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "", "", "€", "", ",", "",],
    ];
    this.intervalDraw();
  }
  intervalDraw() {
    let ms = 1000 / 30;
    let deltaTime = ms / 100;
    setInterval(() => {
      this.draw.erase();
      this.page.draw({ ms, deltaTime });
      this.buttons.draw();
    }, ms);
  }
  width(percentage) {
    let size = window.main.canvas.width;
    return this.percentage(size, percentage);
  }
  height(percentage) {
    let size = window.main.canvas.height;
    return this.percentage(size, percentage);
  }
  percentage(size, percentage) {
    let aPercentage = size / 100;
    return aPercentage * percentage;
  }
  measure(totalSize, size) {
    let aSize = size / totalSize;
    let percentage = aSize * 100;
    return parseInt(percentage);
  }
  transform({ transform }) {
    let { x, y, width, height } = transform;
    x = parseInt(this.width(x));
    y = parseInt(this.height(y));
    width = parseInt(this.width(width));
    height = parseInt(this.height(height));
    return { x, y, width, height };
  }
  keepWidth(width, height, percentage) {
    let maximum = window.main.tools.percentage.width(percentage);
    percentage = maximum / width;
    width *= percentage;
    height *= percentage;
    return { width, height };
  }
  keepHeight(width, height, percentage) {
    let maximum = window.main.tools.percentage.height(percentage);
    percentage = maximum / height;
    width *= percentage;
    height *= percentage;
    return { width, height };
  }
  copyJSON({ JSON }) {
    return JSON.parse(JSON.stringify(JSON));
  }
  valuesJSON({ JSON }) {
    return Object.values(JSON);
  }

  erase() {
    window.canvas.width = window.canvas.width;
    window.canvas.height = window.canvas.height;
  }
  image({ src, image, transform, percentage }) {
    window.canvasCtx.imageSmoothingEnabled = false;
    if (percentage === true) {
      transform = window.tools.percentage.transform({ transform });
      window.canvasCtx.drawImage(src, ...Object.values(image), ...Object.values(transform));
    } else {
      window.canvasCtx.drawImage(src, image.x, image.y, image.width, image.height, transform.x, transform.y, transform.width, transform.height);
    }
  }
  rectangle(color, transform) {
    window.canvasCtx.fillStyle = color;
    transform = this.percentage(transform);
    window.canvasCtx.fillRect(transform.x, transform.y, transform.width, transform.height);
  }
  shadow(transform) {
    window.canvasCtx.fillStyle = this.color(9);
    transform = this.percentage(transform);
    window.canvasCtx.fillRect(transform.x, transform.y, transform.width, transform.height);
  }
  color(number) {
    let color = "#";
    for (let i = 0; i < 3; i++) {
      color += window.tools.random.range(number);
    }
    return color;
  }
  add({ transformJSON, functio, text }) {
    let _button = new button(transformJSON, functio, text);
    this.buttons.push(_button);
  }
  remove() {
    this.buttons = [];
  }
  click() {
    for (let index in this.buttons) {
      this.buttons[index].click();
    }
  }
  draw() {
    for (let index in this.buttons) {
      this.buttons[index].draw();
    }
  }
  click() {
    if (window.main.click.verify(this.transform) === true) {
      this.functio();
    }
  }
  draw() {
    window.main.text.word(this.text, this.transform);
  }
  word(text, { x, y }) {
    this.character = new character();
    this.space = this.character.image.transform.width / 2;
    this.maximum = 90;
    this.character.image.transform.x = x;
    this.character.image.transform.y = y;
    text = text.toUpperCase();
    let characters = [...text];
    for (let character of characters) {
      this.character.draw(character);
      this.character.image.transform.x += this.space;
      if (this.character.image.transform.x >= this.maximum) {
        this.character.image.transform.x = x;
        this.character.image.transform.y += this.character.image.transform.height;
      } else if (character === "&") {
        this.character.image.transform.x = x;
        this.character.image.transform.y += this.character.image.transform.height;
      }
    }
  }
  shortAddress(address, characters) {
    let shortAddress = address.slice(0, characters);
    shortAddress += address.slice(address.length - characters, address.length);
    return shortAddress;
  }

  randomArray(array) {
    let maximum = array.length - 1;
    let index = randomRange(maximum);
    return array[index];
  }
  percentageWidth(percentage) {
    let size = window.canvas.width;
    return this.percentage(size, percentage);
  }
  drawCharacter(character) {
    for (let y = 0; y < this.characters.length; y++) {
      for (let x = 0; x < this.characters[y].length; x++) {
        if (character === this.characters[y][x]) {
          image.x = x * image.width;
          image.y = y * image.height;
          image.draw(true);
          break;
        }
      }
    }
  }
}