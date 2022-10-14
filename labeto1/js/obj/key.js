export default {
  setup() {
    window.data.engine.keyTyped = window.data.events.key.keyTyped;
    window.data.engine.keyReleased = window.data.events.key.keyReleased;
  },
  keyTyped({ key }) {
    window.data.events.key.key = key;
    window.data.pages.call("keyTyped");
  },
  keyReleased({ key }) {
    window.data.events.key.key = key;
    window.data.pages.call("keyReleased");
  }
}