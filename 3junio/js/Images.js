export default class Images {
  constructor() {
    this.images = {};
    this.set("./img/interface/empty.png");
    this.addIndex("./img/loadingScreen/${index}.png", 13);
    this.set("./img/fonts/0.png");
    this.addIndex("./img/armor/${index}.png", 25);
    this.addIndex("./img/head/${index}.png", 235);
    this.addIndex("./img/weapon/${index}.png", 6);
    this.addIndex("./img/enemy/${index}.png", 9);
  }
  addIndex(url, length) {
    for (let index = 0; index <= length; index++) {
      let urlIndex = url.replace("${index}", index)
      this.set(urlIndex);
    }
  }
  set(url) {
    if (Boolean(url) === true) {
      if (Boolean(this.images[url]) === false) {
        this.images[url] = new Image();
        this.images[url].src = url;
      }
    }
  }
  get(url) {
    this.set(url);
    return this.images[url];
  }
}