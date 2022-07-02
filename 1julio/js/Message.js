export default class Message {
  constructor(texts) {
    this.texts = texts;
  }
  update() {
    if (window.main.click.use() === true) {
      window.location.reload();
    }
    window.main.draw.interfaceEmpty.update();
    window.main.draw.paragraph(this.texts, 50, 30, 60);
  }
}