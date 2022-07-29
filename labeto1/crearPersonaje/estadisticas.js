export default class Estadisticas {
    constructor(graf) {
        this.graf;
        this.vocales = "aeiou";
        this.letras = "qwrtypsdfghjklzxcvbnm";
    }
    crear() {
        let rango = (minimo, maximo) => {
            return Math.round(this.graf.random(minimo, maximo));
        }
        this.nombre = "";
        for (let i = 0; i < 5; i++) {
            if (i % 2 == 0) {
                let indice = rango(0, this.letras.length - 1);
                this.nombre += this.letras[indice];
            } else {
                let indice = rango(0, this.vocales.length - 1);
                this.nombre += this.vocales[indice];
            }
        }
        this.cabeza = rango(0, 235);
        this.armadura = rango(0, 10);
        this.arma = rango(0, 6);
        this.ataque = rango(10, 20);
        this.magia = rango(10, 20);
        this.salud = rango(10, 20);
        this.inteligencia = rango(10, 20);
    }
    draw() {
        graf.text("Crear Personaje", 10, 30, 280, 100);
        graf.text(`Nombre ${this.nombre}`, 10, 70, 300, 100);
        graf.text(`Ataque ${this.ataque}`, 10, 110, 280, 100);
        graf.text(`Magia ${this.magia}`, 10, 150, 280, 100);
        graf.text(`Salud ${this.salud}`, 10, 190, 280, 100);
        graf.text(`Inteligencia ${this.inteligencia}`, 10, 230, 280, 100);
        graf.text(`Nuevas Estadisticas`, 10, 290, 350, 100);
        graf.text(`Crear Personaje`, 280, 40, 350, 100);
    }
}