import blockchain from "../ethers/blockchain.js";
import agregarRed from "../ethers/agregarRed.js";
let principal = graf => {
    let interfazVacia;
    let estadisticas = null;
    let cabeza;
    let armadura;
    let arma;
    let nuevoPersonaje = () => {
        let nombre = prompt("nombre del personaje:");
        if (nombre == null) {
            alert("Nombre vacio");
        } else if (nombre.length < 2) {
            alert("Nombre minimo dos caracteres");
        } else if (nombre.length > 8) {
            alert("Nombre maximo ocho caracteres");
        } else {
            estadisticas = {
                nombre,
                cabeza: Math.round(Math.random() * 235),
                armadura: Math.round(Math.random() * 10),
                arma: Math.round(Math.random() * 6),
                ataque: Math.round(Math.random() * 20),
                magia: Math.round(Math.random() * 20),
                salud: Math.round(Math.random() * 20),
                inteligencia: Math.round(Math.random() * 20),
            }
            cabeza = graf.loadImage(`../assets/personajeCabeza${estadisticas.cabeza}.png`);
            armadura = graf.loadImage(`../assets/personajeArmadura${estadisticas.cabeza}.png`);
            arma = graf.loadImage(`../assets/personajeArma${estadisticas.cabeza}.png`);
        }
    }
    graf.setup = () => {
        graf.createCanvas(640, 360);
        graf.frameRate(30);
        while (estadisticas == null) {
            nuevoPersonaje();
        }
    }
    graf.preload = () => {
        interfazVacia = graf.loadImage("../assets/interfazVacia.png");
    }
    graf.draw = () => {
        graf.image(interfazVacia, 0, 0, graf.width, graf.height);
        graf.textAlign(graf.CENTER);
        graf.textWrap(graf.WORD);
        graf.fill("#fff");
        graf.textSize(30);
        graf.text("Crear Personaje", 10, 30, 280, 100);
        graf.text(`Nombre ${estadisticas.nombre}`, 10, 70, 300, 100);
        graf.text(`Ataque ${estadisticas.ataque}`, 10, 110, 280, 100);
        graf.text(`Magia ${estadisticas.magia}`, 10, 150, 280, 100);
        graf.text(`Salud ${estadisticas.salud}`, 10, 190, 280, 100);
        graf.text(`Inteligencia ${estadisticas.inteligencia}`, 10, 230, 280, 100);
        graf.text(`Nuevas Estadisticas`, 10, 290, 350, 100);
    }
}
blockchain(({ provedor, signer, chainId, direccion }) => {
    let informacion = window.localStorage.getItem("informacion");
    if (informacion == null) {
        window.location.href = window.location.href.replace("crearPersonaje", "pantallaCarga");
    } else {
        informacion = JSON.parse(informacion);
        let estadisticas = informacion.estadisticas[direccion.toUpperCase()];
        if (estadisticas == undefined) {
            estadisticas = window.localStorage.getItem("estadisticas");
            if (estadisticas == null) {
                if (chainId == 56) {
                    new p5(principal);
                } else {
                    agregarRed(56);
                }
            } else {
                window.location.href = window.location.href.replace("crearPersonaje", "entrarGrupo");
            }
        } else {
            window.location.href = window.location.href.replace("crearPersonaje", "juego");
        }
    }
});