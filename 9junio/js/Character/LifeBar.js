import Image from "../Animation/Image.js";
export default class LifeBar {
  constructor(EntityPlayer) {
    this.EntityPlayer = EntityPlayer;
    this.src = "./img/lifeBar/${index}.png";
    this.timer = 0;
    this.timerEnd = 1000;
    this.Images = [];
  }
  updateImages() {
    let length = Math.ceil(this.EntityPlayer.Entity.statistics.life / 25);
    console.log(length);
    this.Images = [];
    let transform = {
      x: 0, y: 50, width: 200, height: 200,
    };
    for (let index = 0; index < length; index++) {
      let src = this.src.replace("${index}", 2);
      this.Images.push(
        new Image(src, {
          x: 0, y: 0, width: 200, height: 200,
        }, transform)
      );
      transform.x += transform.width;
    }
  }

  update() {
    if (this.timer <= 0) {
      this.timer = this.timerEnd;
      this.updateImages();
    } else {
      this.timer -= window.Main.ms;
    }
    for (let index = 0; index < this.Images.length; index++) {
      this.Images[index].update();
    }
  }
}