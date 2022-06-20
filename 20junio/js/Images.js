export default class Images {
  constructor() {
    this.images = {};
    this.urls = [
      "./img/interface/empty.png",
      "./img/interface/button.png",
      "./img/interface/keyboard/delete.png",
      "./img/interface/keyboard/enter.png",
      "./img/fonts/0.png",
    ];
    this.addIndex("./img/loadingScreen/${index}.png", 13);
    this.addIndex("./img/armor/${index}.png", 25);
    this.addIndex("./img/head/${index}.png", 235);
    this.addIndex("./img/weapon/${index}.png", 6);
    this.addIndex("./img/enemy/${index}.png", 9);
    this.addIndex("./img/effect/${index}.png", 16);
    this.addIndex("./img/heart/${index}.png", 8);
    this.addIndex("./img/boxes/${index}.png", 21);
    this.loadPercentage = 0;
    this.load();
  }
  load() {
    let i = 0;
    let percentage1 = this.urls.length / 100;
    let next = () => {
      this.loadPercentage = parseInt(i / percentage1);
      if (i >= this.urls.length) {
        window.Main.loadImages();
        return;
      }
      let url = this.urls[i];
      this.set(url).then(() => {
        next();
      });
      i++;
    }
    next();
  }
  addIndex(url, length) {
    for (let i = 0; i <= length; i++) {
      let urlI = url.replace("${index}", i);
      this.urls.push(urlI)
    }
  }
  set(url) {
    return new Promise((resolve, reject) => {
      if (url === undefined) {
        reject(url);
      } if (this.images[url] !== undefined) {
        reject(url);
      }
      this.images[url] = new Image();
      this.images[url].addEventListener("load", () => {
        resolve();
      });
      this.images[url].src = url;
    });
  }
  get(url) {
    return this.images[url];
  }
}