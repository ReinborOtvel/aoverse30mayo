class Keydown {
  constructor() {
    this.used = true;
    window.document.addEventListener("keydown", event => {
      this.key = event.key.toUpperCase();
      this.used = false;
    });
  }
  verify(key) {
    if (this.used === true) {
      return false;
    }
    if (this.key !== key) {
      return false;
    }
    this.used = true;
    return true;
  }
}
class Keyup {
  constructor() {
    this.used = true;
    window.document.addEventListener("keyup", event => {
      this.key = event.key.toUpperCase();
      this.used = false;
    });
  }
  verify(key) {
    if (this.used === true) {
      return false;
    }
    if (this.key !== key) {
      return false;
    }
    this.used = true;
    return true;
  }
}
export default class Keyboard {
  constructor() {
    this.keydown = new Keydown();
    this.keyup = new Keyup();
  }
}