export default class Sprite {
    constructor(main, url, ancho, alto) {
        this.main = main;
        this.imagen = this.main.loadImage(url);
        this.ancho = ancho;
        this.alto = alto;
        this.animaciones = {
            quieto: [this.imagen.get(0, 0, this.ancho, this.alto)],
        };
    }
    nuevaAnimacionAlto(nombreAnimacion, longitudAncho, indiceAlto) {
        let y = indiceAlto * this.alto;
        this.animaciones[nombreAnimacion] = [];
        for (let indiceAncho = 0; indiceAncho < longitudAncho; indiceAncho++) {
            let x = indiceAncho * this.ancho;
            this.animaciones[nombreAnimacion][indiceAncho] = this.imagen.get(x, y, this.ancho, this.alto);
        }
    }
    nuevaAnimacionAncho(nombreAnimacion, longitudAlto, indiceAncho) {
        let x = indiceAncho * this.ancho;
        this.animaciones[nombreAnimacion] = [];
        for (let indiceAlto = 0; indiceAlto < longitudAlto; indiceAlto++) {
            let y = indiceAlto * this.alto;
            this.animaciones[nombreAnimacion][indiceAlto] = this.imagen.get(x, y, this.ancho, this.alto);
        }

    }
}