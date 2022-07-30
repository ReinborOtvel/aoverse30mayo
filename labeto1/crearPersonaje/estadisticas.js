class Estadisticas {
    constructor() {
        this.vocales = "aeiou";
        this.letras = "qwrtypsdfghjklzxcvbnm";
    }
    crear() {
        let rango = (minimo, maximo) => {
            return Math.round(random(minimo, maximo));
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
        text("Personaje / 0.01 BNB", 30, 50);
        text(`Nombre ${this.nombre}`, 30, 80);
        text(`Ataque ${this.ataque}`, 30, 110);
        text(`Magia ${this.magia}`, 30, 140);
        text(`Salud ${this.salud}`, 30, 170);
        text(`Inteligencia ${this.inteligencia}`, 30, 200);
        text(`Nuevas Estadisticas`, 30, 250);
        text(`Crear Personaje`, 30, 290);
    }
}