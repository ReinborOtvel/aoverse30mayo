export default class Message {
  constructor(text) {
    this.text = text;
  }
  draw() {
    window.Main.Draw.interfaceEmpty.draw();
    window.Main.Text.word(this.text, 30, 30);
  }
}