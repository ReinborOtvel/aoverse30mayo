import Mensaje from "./mensaje.js";
import Sprite from "./sprite.js";
export default class CrearPersonaje {
    constructor(main) {
        this.main = main;
    }
    preload() {
        this.interfazVacia = this.main.loadImage("assets/interfazVacia.png");
        this.nuevoPersonaje();
    }
    nuevoPersonaje() {
        let nombre = prompt("nombre para tu personaje:");
        if (nombre == null) {
            this.main.pagina = new Mensaje(this.main, "nombre no valido");
        } else if (nombre.length < 2) {
            this.main.pagina = new Mensaje(this.main, "nombre minimo 2 caracteres");
        } else if (nombre.length > 8) {
            this.main.pagina = new Mensaje(this.main, "nombre maximo 8 caracteres");
        } else {
            let rango = (minimo, maximo) => {
                let contador = maximo - minimo;
                let random = Math.round(Math.random() * contador);
                return minimo + random;
            }
            this.estadisticas = {
                nombre,
                ataque: rango(10, 25),
                magia: rango(10, 25),
                salud: rango(10, 25),
                inteligencia: rango(10, 25),
                cabeza: rango(0, 235),
                armadura: rango(0, 10),
                arma: rango(0, 6),
            };
            this.personaje = {
                cabeza: new Sprite(this.main, `assets/personajeCabeza${this.estadisticas.cabeza}.png`, 50, 50),
                armadura: new Sprite(this.main, `assets/personajeArmadura${this.estadisticas.armadura}.png`, 25, 45),
                arma: new Sprite(this.main, `assets/personajeArma${this.estadisticas.arma}.png`, 25, 45),
            };
            this.personaje.cabeza.nuevaAnimacionAncho("abajo", 1, 0);
            this.personaje.cabeza.nuevaAnimacionAncho("derecha", 1, 1);
            this.personaje.cabeza.nuevaAnimacionAncho("izquierda", 1, 2);
            this.personaje.cabeza.nuevaAnimacionAncho("arriba", 1, 3);
            this.personaje.armadura.nuevaAnimacionAlto("abajo", 6, 0);
            this.personaje.armadura.nuevaAnimacionAlto("arriba", 6, 1);
            this.personaje.armadura.nuevaAnimacionAlto("izquierda", 5, 2);
            this.personaje.armadura.nuevaAnimacionAlto("derecha", 5, 3);
            this.personaje.arma.nuevaAnimacionAlto("abajo", 6, 0);
            this.personaje.arma.nuevaAnimacionAlto("arriba", 6, 1);
            this.personaje.arma.nuevaAnimacionAlto("izquierda", 5, 2);
            this.personaje.arma.nuevaAnimacionAlto("derecha", 5, 3);
        }
    }
    dibujarPersonaje() {
        this.main.image(this.personaje.cabeza.animaciones["abajo"][0], 0, 0, 500, 500);
        this.main.image(this.personaje.armadura.animaciones["abajo"][0], 0, 0, 500, 500);
        this.main.image(this.personaje.arma.animaciones["abajo"][0], 0, 0, 500, 500);
        this.main.image(this.personaje.arma.abajo0, 0, 0, 500, 500);
    }
    dibujarTextos() {
        this.main.textAlign(this.main.CENTER);
        this.main.textWrap(this.main.WORD);
        this.main.fill("#fff");
        this.main.textSize(30);
        this.main.text("Crear Personaje", 10, 30, 280, 100);
        this.main.text(`Nombre ${this.estadisticas.nombre}`, 10, 70, 300, 100);
        this.main.text(`Ataque ${this.estadisticas.ataque}`, 10, 110, 280, 100);
        this.main.text(`Magia ${this.estadisticas.magia}`, 10, 150, 280, 100);
        this.main.text(`Salud ${this.estadisticas.salud}`, 10, 190, 280, 100);
        this.main.text(`Inteligencia ${this.estadisticas.inteligencia}`, 10, 230, 280, 100);
        this.main.text(`Nuevas Estadisticas`, 10, 290, 350, 100);
    }
    draw() {
        this.main.image(this.interfazVacia, 0, 0, 640, 360);
        this.dibujarTextos();
        this.dibujarPersonaje();
    }
}