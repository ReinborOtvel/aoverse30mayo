export default {
  setup(x, y, width, height, statistics, map) {
    window.data.pages.game.player.transform = new window.data.obj.transform(x, y, width, height);
    window.data.pages.game.player.parts = new window.data.obj.player.parts(x, y, width, height, statistics);
    window.data.pages.game.player.move = new window.data.obj.player.move(x, y, map);
    window.data.pages.game.player.interaction = new window.data.obj.player.interaction(x, y, map);
    window.data.pages.game.player.movementWheel = new window.data.obj.player.movementWheel();
  },
  afterY(y, height) {
    let yEnd = y + height;
    return yEnd > window.data.pages.game.player.y;
  },
  touchStarted() {
    window.data.pages.game.player.move.touchMoved();
  },
  touchMoved() {
    window.data.pages.game.player.move.touchMoved();
  },
  touchEnded() {
    window.data.pages.game.player.move.touchEnded();
    window.data.pages.game.player.interaction.touchEnded();
  },
  keyTyped() {
    window.data.pages.game.player.move.keyTyped();
  },
  keyReleased() {
    window.data.pages.game.player.move.keyReleased();
  },
  draw() {
    window.data.pages.game.player.move.move();
    window.data.pages.game.player.parts.draw();
    window.data.pages.game.player.movementWheel.draw();
    window.data.pages.game.player.interaction.draw();
  }
}
