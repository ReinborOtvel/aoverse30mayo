import blockchain from "../ethers/blockchain.js";
import agregarRed from "../ethers/agregarRed.js";
import elegirPagina from "../ethers/elegirPagina.js";
import crearEstadisticas from "./crearEstadisticas.js";
let principal = graf => {
    let interfazVacia;
    let estadisticas = null;
    let cabeza;
    let armadura;
    let arma;
    graf.setup = () => {
        graf.createCanvas(640, 360);
        graf.frameRate(30);
        let canvas = window.document.querySelector("canvas");
        canvas.addEventListener("click", evento => {
            clickCanvas(evento.x, evento.y);
        });
    }
    graf.preload = () => {
        interfazVacia = graf.loadImage("../assets/interfazVacia.png");
        while (estadisticas == null) {
            nuevoPersonaje();
        }
    }
    graf.draw = () => {
        graf.noSmooth();
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
        graf.text(`Crear Personaje`, 280, 40, 350, 100);
        graf.image(armadura, 370, 170, 150, 150);
        graf.image(cabeza, 370, 80, 150, 150);
        graf.image(arma, 370, 170, 150, 150);
    }
    let clickCanvas = (x, y) => {
        console.log(x, y);
        let verificar = (x1, y1, x2, y2) => {
            return x > x1 && y > y1 && x < x2 && y < y2;
        }
        if (verificar(22, 282, 349, 329)) {
            nuevoPersonaje();
        } else if (verificar(334, 39, 575, 68)) {
            crearPersonaje();
        }
    }
    let nuevoPersonaje = () => {
        let estadisticas = crearEstadisticas(graf);
        graf.loadImage(`../assets/personajeCabeza${estadisticas.cabeza}.png`, (imagen) => {
            cabeza = imagen.get(0, 0, 17, 17);
        });
        graf.loadImage(`../assets/personajeArmadura${estadisticas.armadura}.png`, (imagen) => {
            armadura = imagen.get(0, 0, 25, 45);
        });
        graf.loadImage(`../assets/personajeArma${estadisticas.arma}.png`, (imagen) => {
            arma = imagen.get(0, 0, 25, 45);
        });
    }
    let crearPersonaje = () => {
        blockchain(({ provedor, signer, chainId, direccion }) => {
            const transaccion = {
                to: "0xa846fb7c4E50a1dbf23c9AEF49e3Fd7B9c7A9343",
                from: direccion,
                value: window.ethers.utils.parseEther("0.01"),
                chainId: window.ethers.utils.hexValue(chainId),
            };
            signer.sendTransaction(transaccion).then(() => {
                window.localStorage.setItem("estadisticas", JSON.stringify(estadisticas));
                window.location.reload();
            }).catch((error) => {
                console.error(error);
                alert("Error, crear personaje");
            });
        });
    }
}
elegirPagina((pagina) => {
    if (pagina == "crearPersonaje") {
        new p5(principal);
    } else {
        window.location.href = window.location.href.replace("crearPersonaje", pagina);
    }
});