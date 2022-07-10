import Message from "./Message.js";
import AnimationCharacter from "./Character/Animation.js";
export default class EnterGroup {
  constructor() {
    this.informacion = JSON.parse(window.localStorage.getItem("information"));
    let direccion = window.ethereum.selectedAddress;
    let estadisticas = JSON.parse(window.localStorage.getItem("statistics"));
    let direccionMayuscula = direccion.toUpperCase();
    this.informacion.estadisticas[direccionMayuscula] = estadisticas;
    for(let lider in this.informacion.grupo){
      let miembros = this.informacion.grupo[lider];
      if(miembros.length<5){
        this.informacion.lider[direccionMayuscula]=lider;
        this.estadisticasLider = this.informacion.estadisticas[lider];
        this.informacion.grupo[direccionMayuscula]=[];
        miembros.push(direccionMayuscula);
        this.numeroMiembros = miembros.length;
        break;
      }
    }
    this.usuarioPersonaje = new AnimationCharacter({x:400,y:120,width:100,height:100},estadisticas);
    this.liderPersonaje = new AnimationCharacter({x:200,y:100,width:100,height:100},this.estadisticasLider);
    this.guardarEntrada=true;
  }
  saveStats() {
    let jsonInformation = JSON.stringify(this.informacion);
    window.main.database.contract.set(jsonInformation).then(() => {
      window.localStorage.clear();
      window.main.page = new Message(["Saved character", "wait a few minutes", "for it to refresh", "on the blockchain"]);
    }).catch(() => {
      window.main.page = new Message(["stats not saved"]);
    });
  }
  update() {
    window.main.draw.interfaceEmpty.update();
    this.usuarioPersonaje.update();
    this.liderPersonaje.update();
    window.main.draw.paragraph([
      `lider ${this.estadisticasLider.nombre}`,
      `ataque ${this.estadisticasLider.ataque}`,
      `magia ${this.estadisticasLider.magia}`,
      `inteligencia ${this.estadisticasLider.inteligencia}`,
      `salud ${this.estadisticasLider.salud}`,
    ],50,160,30);
    window.main.draw.text("#fff",`numero de miembros ${this.numeroMiembros}`,230,220,`30px Arial`);
    window.main.draw.text("#fff",`crear grupo`,280,290,`60px Arial`);
    if(this.guardarEntrada==true){
      if(window.main.click.verify(280,255,592,308)){
        this.guardarEntrada=false;
        this.saveStats();
      }
    }
  }
}