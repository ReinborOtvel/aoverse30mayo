export default class Interfaz {
    constructor(graf) {
        this.graf = graf;
    }
    draw({ nombre }, { lider, informacion }) {
        let liderCorto = lider.slice(0, 5);
        for (let indice in informacion.grupo[lider]) {
            let miembro = informacion.grupo[lider][indice];
            let espacioY = 30 * indice;
            let y = 140 + espacioY;
            let miembroCorto = miembro.slice(0, 6);
            this.graf.text(`miembro${indice} ${miembroCorto}`, 10, y, 350, 100);
        }
        this.graf.text("Entrar a un Grupo", 20, 30, 350, 100);
        this.graf.text(`Nombre ${nombre}`, 10, 60, 350, 100);
        this.graf.text(`Lider ${liderCorto}`, 10, 110, 350, 100);
        this.graf.text("Elegir grupo", 290, 280, 350, 100);
    }
}