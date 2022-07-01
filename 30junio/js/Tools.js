export default class Tools {
  randomRange(maximum) {
    let random = Math.random() * maximum;
    return Math.round(random);
  }
  randomStatistics(name) {
    return {
      name,
      head: this.randomRange(235),
      armor: this.randomRange(25),
      weapon: this.randomRange(6),
      attack: this.randomRange(5),
      magic: this.randomRange(5),
      defense: this.randomRange(5),
      health: this.randomRange(5),
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