export default class Personaje {
    constructor(graf, estadisticas, ancho, alto) {
        this.graf = graf;
        this.estadisticas = estadisticas;
        this.animacion = "abajo";
        this.ancho = ancho;
        this.alto = alto;
        this.x = 150;
        this.y = 150;
    }
    preload() {
        this.graf.loadImage(`../assets/personajeCabeza${this.estadisticas.cabeza}.png`, (imagen) => {
            this.cabeza = {
                abajo: [imagen.get(0, 0, 17, 17)],
                derecha: [imagen.get(17, 0, 17, 17)],
                izquierda: [imagen.get(34, 0, 17, 17)],
                arriba: [imagen.get(51, 0, 17, 17)],
            };
        });
        this.graf.loadImage(`../assets/personajeArmadura${this.estadisticas.armadura}.png`, (imagen) => {
            this.armadura = { abajo: [], derecha: [], izquierda: [], arriba: [], };
            for (let i = 0; i < 6; i++) {
                this.armadura.abajo[i] = imagen.get(25 * i, 0, 25, 45);
            }
            for (let i = 0; i < 6; i++) {
                this.armadura.arriba[i] = imagen.get(25 * i, 45, 25, 45);
            }
            for (let i = 0; i < 5; i++) {
                this.armadura.izquierda[i] = imagen.get(25 * i, 90, 25, 45);
            }
            for (let i = 0; i < 5; i++) {
                this.armadura.derecha[i] = imagen.get(25 * i, 135, 25, 45);
            }
        });
        this.graf.loadImage(`../assets/personajeArma${this.estadisticas.arma}.png`, (imagen) => {
            this.arma = { abajo: [], derecha: [], izquierda: [], arriba: [], };
            for (let i = 0; i < 6; i++) {
                this.arma.abajo[i] = imagen.get(25 * i, 0, 25, 45);
            }
            for (let i = 0; i < 6; i++) {
                this.arma.arriba[i] = imagen.get(25 * i, 45, 25, 45);
            }
            for (let i = 0; i < 5; i++) {
                this.arma.izquierda[i] = imagen.get(25 * i, 90, 25, 45);
            }
            for (let i = 0; i < 5; i++) {
                this.arma.derecha[i] = imagen.get(25 * i, 135, 25, 45);
            }
        });
    }
    draw() {
        let x = this.x - (this.ancho / 2);
        let y = this.y - (this.alto / 2);
        let xCabeza = x + (this.ancho / 4);
        this.graf.image(this.armadura[this.animacion][0], x, y, this.ancho, this.alto);
        this.graf.image(this.cabeza[this.animacion][0], xCabeza, y, this.ancho / 2, this.alto / 2);
        this.graf.image(this.arma[this.animacion][0], x, y, this.ancho, this.alto);
    }
}