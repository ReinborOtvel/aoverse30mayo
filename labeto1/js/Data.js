import CreateCharacter from "./CreateCharacter.js";
import SelectLeader from "./SelectLeader.js";
import Game from "./Game.js";
export default {
  setPage(name) {
    switch (name) {
      case "createCharacter":
        window.data.page = CreateCharacter;
        break;
      case "selectLeader":
        window.data.page = SelectLeader;
        break;
      case "game":
        window.data.page = Game;
        break;
    }
    window.data.page.setup();
  },
  draw() {
    window.data.background.draw();
    if (window.data.page) {
      window.data.page.draw();
    } else {
      window.data.alert.draw(window.data.message);
    }
  },
  setup() {
    window.data.message = "Loading";
    window.data.key.setup();
    window.data.touch.setup();
    window.data.engine.createCanvas(852, 480);
    window.data.engine.frameRate(20);
    window.data.background = new window.data.objects.Rect(0, 0, 100, 100, "#2B2B2B");
    window.data.alert = new window.data.objects.ChangingText(5, 30, 10, "#fff");
    window.data.metamask.setup();
  }
}