export default class Tools {
  randomRange(minimo, maximum) {
    let pasos = maximum - minimo;
    let random = Math.random() * pasos;
    random = Math.round(random);
    random += minimo;
    return random;
  }
  randomStatistics(nombre) {
    return {
      nombre,
      head: this.randomRange(0, 235),
      armor: this.randomRange(0, 10),
      weapon: this.randomRange(0, 6),
      ataque: this.randomRange(5, 20),
      magia: this.randomRange(5, 20),
      inteligencia: this.randomRange(5, 20),
      salud: this.randomRange(5, 20),
    };
  }
  shortAddress(address, characters) {
    let shortAddress = address.slice(0, characters);
    shortAddress += address.slice(address.length - characters, address.length);
    return shortAddress;
  }
  randomArray(array) {
    let maximum = array.length - 1;
    let index = this.randomRange(maximum);
    return array[index];
  }
}