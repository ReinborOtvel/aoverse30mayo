export default class Personaje {
    constructor(graf) {
        this.graf = graf;
    }
    preload({ cabeza, armadura, arma }) {
        this.graf.loadImage(`../assets/personajeCabeza${cabeza}.png`, (img) => {
            this.cabeza = img.get(0, 0, 17, 17);
        });
        this.graf.loadImage(`../assets/personajeArmadura${armadura}.png`, (img) => {
            this.armadura = img.get(0, 0, 25, 45);
        });
        this.graf.loadImage(`../assets/personajeArma${arma}.png`, (img) => {
            this.arma = img.get(0, 0, 25, 45);
        });
    }
    draw() {
        this.graf.image(this.armadura, 390, 110, 150, 150);
        this.graf.image(this.cabeza, 390, 50, 150, 150);
        this.graf.image(this.arma, 390, 110, 150, 150);
    }
}