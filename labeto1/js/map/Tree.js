export default class {
  constructor(transform, index, fullLoad) {
    this.transform = transform;
    this.index = index;
    this.fullLoad = fullLoad;
    this.img();
  }
  img() {
    let url = `./Graficos/nature/${this.index}.png`;
    loadImage(url, img => {
      this.img = img;
    })
  }
}