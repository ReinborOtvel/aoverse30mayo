import informationDatabase from "./informationDatabase.js";
import Message from "./Message.js";
import AnimationCharacter from "./Character/Animation.js";
export default class CreateCharacter {
  constructor() {
    this.newCharacter();
  }
  newName(){
    let letraRandom=()=>{
      let letras = "qwrtypsdfghjklzxcvbnm";
      let indice = Math.random()*letras.length;
      return letras[Math.floor(indice)];
    }
    let vocalRandom =()=>{
      let vocales = "aeiou";
      let indice = Math.random()*vocales.length;
      return vocales[Math.floor(indice)];
    }
    this.name = "";
    for(let i=0,vocal=false;i<8;i++){
      this.name+=(vocal)?vocalRandom():letraRandom();
      vocal=!vocal;
    }
  }
  newCharacter() {
    this.newName();
    this.statistics = window.main.tools.randomStatistics(this.name);
    this.animationCharacter = new AnimationCharacter({
      x: 440, y: 160, width: 200, height: 230
    }, this.statistics);
  }
  save() {
    window.localStorage.setItem("statistics", JSON.stringify(this.statistics));
    window.main.database.changeNetwork(97);
  }
  create() {
    let { ticketValue, creator, } = informationDatabase;
    let transaction = {
      to: creator,
      value: ethers.utils.parseEther(ticketValue),
    };
    window.main.database.signer.sendTransaction(transaction).then(() => {
      this.save();
    }).catch(() => {
      window.main.page = new Message([
        "Ticket value",
        `${ticketValue} BNB`,
        "The character",
        "was not created",
      ]);
    });
  }
  update() {
    window.main.draw.interfaceEmpty.update();
    window.main.draw.paragraph([
      `nombre ${this.name}`,
      `ataque ${this.statistics.ataque} / 20`,
      `magia ${this.statistics.magia} / 20`,
      `inteligencia ${this.statistics.inteligencia} / 20`,
      `salud ${this.statistics.salud} / 20`,
    ], 50, 50, 30);
    window.main.draw.text("#fff", "nuevo personaje", 53, 250, "30px Arial");
    window.main.draw.text("#fff", "crear personaje", 53, 300, "30px Arial");
    this.animationCharacter.update();
    if(window.main.click.verify(54, 233,278, 254)){
      this.newCharacter();
    } else if(window.main.click.verify(52, 283,265, 301)){
      this.create();
    }
  }
}