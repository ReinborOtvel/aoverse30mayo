export default class Images {
  constructor() {
    this.images = {};
    this.urls = [
      "./img/interface/empty.png",
      "./img/interface/button.png",
      "./img/interface/keyboard/delete.png",
      "./img/interface/keyboard/enter.png",
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
    window.caches.open('images').then(cache => {
      cache.keys().then(keys => {
        if (keys.length >= this.urls.length) {
          this.load();
        } else {
          console.log("changed");
          cache.addAll(this.urls).then(() => {
            this.load();
          });
        }
      });
    });
  }
  load() {
    let aPercentage = this.urls.length / 100;
    window.caches.open('images').then(cache => {
      let i = 0;
      let loadImage = () => {
        let url = this.urls[i];
        cache.match(url).then(file => file.blob())
          .then(blob => {
            this.loadPercentage = parseInt(i / aPercentage);
            let src = URL.createObjectURL(blob);
            let image = new Image();
            image.src = src;
            this.images[url] = image;
            i++;
            if (i < this.urls.length) {
              loadImage();
            } else {
              window.main.loadImages();
            }
          });
      };
      loadImage();
    });
  }
  addIndex(url, length) {
    for (let i = 0; i <= length; i++) {
      let urlI = url.replace("${index}", i);
      this.urls.push(urlI)
    }
  }
  get(url) {
    return this.images[url];
  }
}