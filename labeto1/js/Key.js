export default {
  setup() {
    window.data.engine.keyTyped = window.data.key.keyTyped;
    window.data.engine.keyReleased = window.data.key.keyReleased;
  },
  keyTyped({ key }) {
    window.data.key.key = key;
    if (window.data.page) {
      if (window.data.page.keyTyped) {
        window.data.page.keyTyped();
      }
    }
  },
  keyReleased({ key }) {
    window.data.key.key = key;
    if (window.data.page) {
      if (window.data.page.keyReleased) {
        window.data.page.keyReleased();
      }
    }
  }
}