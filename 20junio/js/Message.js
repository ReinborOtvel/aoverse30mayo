export default class Message {
  constructor(text) {
    this.text = text;
  }
  update() {
    if (window.Main.Click.use() === true) {
      window.location.reload();
    }
    window.Main.Draw.interfaceEmpty.update();
    window.Main.Text.word(this.text, 50, 30, 60);
  }
}