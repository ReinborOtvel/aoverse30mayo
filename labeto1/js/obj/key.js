export default {
  setup() {
    window.data.engine.keyTyped = window.data.obj.key.keyTyped;
    window.data.engine.keyReleased = window.data.obj.key.keyReleased;
  },
  keyTyped({ key }) {
    window.data.obj.key.key = key;
    window.data.pages[window.data.pages.name].keyTyped();
  },
  keyReleased({ key }) {
    window.data.obj.key.key = key;
    window.data.pages[window.data.pages.name].keyReleased();
  }
}