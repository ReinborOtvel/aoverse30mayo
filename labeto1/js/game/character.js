class Character {
  constructor(callback) {
    this.graphics = new CharacterGraphics(() => {
      this.graphics.setup();
      callback();
    });
    this.map = new CharacterMap();
  }
}