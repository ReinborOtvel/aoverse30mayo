import CrearPersonaje from "./crearPersonaje.js";
import Mensaje from "./mensaje.js";
export default class PantallaCarga {
    constructor(main) {
        this.main = main;
        this.imagenes = [];
        this.indice = 0;
        this.ms = 1000;
        this.temporizador = 0;
        this.blockchain = {};
    }
    preload() {
        for (let i = 0; i < 8; i++)
            this.imagenes[i] = this.main.loadImage(`assets/pantallaCarga${i}.png`);
        if (window.ethereum == undefined) {
            this.main.pagina = new Mensaje(this.main, "Descargar Metamask");
        }
        this.blockchain.provedor = new ethers.providers.Web3Provider(window.ethereum);
        window.ethereum.on('accountsChanged', () => {
            window.location.reload();
        });
        window.ethereum.on('chainChanged', () => {
            window.location.reload();
        });
        this.blockchain.provedor.send("eth_requestAccounts", []).then(direcciones => {
            this.blockchain.direccion = direcciones[0];
            this.blockchain.signer = this.provider.getSigner();
            this.signer.getChainId().then(chainId => {
                this.receiveChainId(chainId);
            }).catch(error => {
                console.error(error);
                this.main.pagina = new Mensaje(this.main, "ChainId no recibida");
            });
        }).catch(error => {
            console.error(error);
            this.main.pagina = new Mensaje(this.main, "Cuentas no recibidas");
        });
    }
    draw(ms) {
        if (this.temporizador <= 0) {
            this.temporizador = this.ms;
            this.cambiarImagen();
            this.main.image(this.imagenes[this.indice], 0, 0, 640, 360);
        } else {
            this.temporizador -= ms;
        }
    }
    cambiarImagen() {
        if (this.indice < this.imagenes.length - 1) {
            this.indice++;
        }
    }
};