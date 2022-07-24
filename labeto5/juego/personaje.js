class Mapa {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.velocidad = 1;
        this.moverse = { x: 0, y: 0 };
    }
    moverse(movimiento) {
        if (movimiento == "izquierda") {
            this.moverse.x = -1;
        } else if (movimiento == "derecha") {
            this.moverse.x = 1;
        } else if (movimiento == "arriba") {
            this.moverse.y = -1;
        } else if (movimiento == "abajo") {
            this.moverse.y = 1;
        }
    }
    detenerse(movimiento) {
        if (movimiento == "izquierda" || movimiento == "derecha") {
            this.moverse.x = 0;
        } else if (movimiento == "arriba" || movimiento == "abajo") {
            this.moverse.y = 0;
        }
    }
    mover() {
        let velocidad = {
            x: this.velocidad * this.moverse.x,
            y: this.velocidad * this.moverse.y,
        }
        let nueva = {
            x: this.x + velocidad.x,
            y: this.y + velocidad.y,
        }
        this.x = nueva.x;
        this.y = nueva.y;
    }
}
class Sprite {
    constructor(personaje) {
        this.personaje = personaje;
        this.estadisticas = this.personaje.estadisticas;
        this.configuracion = this.personaje.configuracion;
        this.animacion = "abajo";
        this.ancho = this.configuracion.ancho / 10;
        this.alto = this.configuracion.alto / 6;
        this.x = this.configuracion.ancho / 2;
        this.y = this.configuracion.alto / 2;
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
export default class Personaje {
    constructor(configuracion, estadisticas) {
        this.configuracion = configuracion;
        this.graf = this.configuracion.graf;
        this.estadisticas = estadisticas;
        this.sprite = new Sprite(this);
        this.mapa = new Mapa();
    }
    movimientoTecla(tecla) {
        if (tecla == "a") {
            return "izquierda";
        } else if (tecla == "w") {
            return "arriba";
        }
    }
    teclaAbajo(tecla) { }
    teclaArriba(tecla) {

    }
    click(x, y) {

    }
    preload() { }
    draw() { }
}