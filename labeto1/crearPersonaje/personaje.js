import agregarRed from "../ethers/agregarRed.js";
import blockchain from "../ethers/blockchain.js";
export default class Personaje {
    constructor(graf) {
        this.graf = graf;
    }
    preload({ cabeza, arma, armadura }) {
        this.graf.loadImage(`../assets/personajeCabeza${cabeza}.png`, (imagen) => {
            this.cabeza = imagen.get(0, 0, 17, 17);
        });
        this.graf.loadImage(`../assets/personajeArmadura${armadura}.png`, (imagen) => {
            this.armadura = imagen.get(0, 0, 25, 45);
        });
        this.graf.loadImage(`../assets/personajeArma${arma}.png`, (imagen) => {
            this.arma = imagen.get(0, 0, 25, 45);
        });
    }
    draw() {
        this.graf.image(this.armadura, 370, 170, 150, 150);
        this.graf.image(this.cabeza, 370, 80, 150, 150);
        this.graf.image(this.arma, 370, 170, 150, 150);
    }
    crear({ nombre, armadura, arma, cabeza, ataque, magia, salud, inteligencia }) {
        blockchain(({ provedor, signer, chainId, direccion }) => {
            if (chainId == 56) {
                let estadisticas = JSON.stringify({
                    nombre,
                    cabeza,
                    armadura,
                    arma,
                    ataque,
                    magia,
                    inteligencia,
                    salud,
                });
                let transaccion = {
                    to: "0xa846fb7c4E50a1dbf23c9AEF49e3Fd7B9c7A9343",
                    value: window.ethers.utils.parseEther("0.01"),
                };
                signer.sendTransaction(transaccion).then(() => {
                    window.localStorage.setItem("estadisticas", estadisticas);
                    window.location.reload();
                }).catch((error) => {
                    console.error(error);
                    alert("Error, crear personaje");
                });
            } else {
                agregarRed(56);
            }
        });
    }
}