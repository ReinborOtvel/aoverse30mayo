export default class Mapa {
    constructor(graf, personaje) {
        this.graf = graf;
        this.personaje = personaje;
        this.terrenos = [];
    }
    preload() {
        this.graf.loadImage("../assets/mapaTerreno0.png", (imagen) => {
            this.terrenos[0] = [];
            this.terrenos[0][0] = imagen;
        });
        this.graf.loadImage("../assets/mapaTerreno1.png", (imagen) => {
            this.terrenos[1] = [];
            for (let i = 0; i < 4; i++) {
                let ancho = 128;
                let x = i * ancho;
                this.terrenos[1][i] = imagen.get(x, 0, ancho, ancho);
            }
        });
        this.graf.loadImage("../assets/mapaTerreno2.png", (imagen) => {
            this.terrenos[2] = [];
            for (let i = 0; i < 4; i++) {
                let ancho = 128;
                let x = i * ancho;
                this.terrenos[2][i] = imagen.get(x, 0, ancho, ancho);
            }
        });
        this.graf.loadImage("../assets/mapaTerreno3.png", (imagen) => {
            this.terrenos[3] = [];
            for (let i = 0; i < 4; i++) {
                let ancho = 128;
                let x = i * ancho;
                this.terrenos[3][i] = imagen.get(x, 0, ancho, ancho);
            }
        });
    }
    mapa1Draw() {
        let casillas = [
            [[2, 0], [3, 0], [3, 0], [3, 0], [3, 0], [3, 0], [3, 0]],
            [[3, 2], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
            [[3, 2], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
            [[3, 2], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
            [[3, 2], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
            [[3, 2], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
            [[3, 2], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
        ]
        casillas.map((casillasX, y) => {
            casillasX.map((indices, x) => {
                this.graf.image(
                    this.terrenos[indices[0]][indices[1]],
                    x * this.personaje.ancho,
                    y * this.personaje.alto,
                    this.personaje.ancho,
                    this.personaje.alto
                );
            });
        });
    }
    draw() {
        this.mapa1Draw();
    }
}