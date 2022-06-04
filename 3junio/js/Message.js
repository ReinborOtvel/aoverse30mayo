export default class Message {
  constructor(text) {
    this.text = text;
  }
  click() {
    window.location.reload();
  }
  draw() {
    window.Main.Draw.interfaceEmpty.draw();
    window.Main.Text.word(this.text, 50, 30, 60);
  }
}