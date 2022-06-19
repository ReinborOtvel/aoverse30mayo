import Image from "../Animation/Image.js";
class Head {
  constructor(transform, index) {
    this.Image = new Image(`./img/head/${index}.png`, {
      x: 0, y: 0, width: 17, height: 17,
    }, transform);
    this.Image.Transform.width /= 2;
    this.Image.Transform.height /= 2;
    this.Image.Transform.x += this.Image.Transform.width / 2;
  }
  animation(name) {
    if (name === "up") {
      this.Image.x = this.Image.width * 3;
    } else if (name === "down") {
      this.Image.x = 0;
    } else if (name === "right") {
      this.Image.x = this.Image.width;
    } else if (name === "left") {
      this.Image.x = this.Image.width * 2;
    }
  }
  update() {
    this.Image.update();
  }
}
class Armor {
  constructor(transform, index) {
    this.Image = new Image(`./img/armor/${index}.png`, {
      x: 0, y: 0, width: 25, height: 45,
    }, transform);
  }
  sprite(sprite) {
    this.Image.x = this.Image.width * sprite;
  }
  animation(name) {
    if (name === "up") {
      this.Image.y = this.Image.height;
    } else if (name === "down") {
      this.Image.y = 0;
    } else if (name === "right") {
      this.Image.y = this.Image.height * 3;
    } else if (name === "left") {
      this.Image.y = this.Image.height * 2;
    }
  }
  update() {
    this.Image.update();
  }
}
class Weapon {
  constructor(transform, index) {
    this.Image = new Image(`./img/weapon/${index}.png`, {
      x: 0, y: 0, width: 25, height: 45
    }, transform);
  }
  sprite(sprite) {
    this.Image.x = this.Image.width * sprite;
  }
  animation(name) {
    if (name === "up") {
      this.Image.y = this.Image.height;
    } else if (name === "down") {
      this.Image.y = 0;
    } else if (name === "right") {
      this.Image.y = this.Image.height * 3;
    } else if (name === "left") {
      this.Image.y = this.Image.height * 2;
    }
  }
  update() {
    this.Image.update();
  }
}
export default class AnimationCharacter {
  constructor(transform, statistics) {
    transform.x -= transform.width / 2;
    transform.y -= transform.height / 2;
    this.Head = new Head(transform, statistics.head);
    this.Armor = new Armor(transform, statistics.armor);
    this.Weapon = new Weapon(transform, statistics.weapon);
  }
  animation(name, sprite) {
    this.Head.animation(name);
    this.Armor.animation(name);
    this.Weapon.animation(name);
    this.Armor.sprite(sprite);
    this.Weapon.sprite(sprite);
  }
  update() {
    this.Armor.update();
    this.Head.update();
    this.Weapon.update();
  }
}