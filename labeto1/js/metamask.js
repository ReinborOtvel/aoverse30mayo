class Metamask {
    agregarRed(chainId) {
        let chainName = "Binance";
        let rpcUrls = ['https://bsc-dataseed.binance.org/'];
        if (this.chainId == 97) {
            chainName = "BinanceTestnet";
            rpcUrls = ['https://data-seed-prebsc-1-s1.binance.org:8545/'];
        }
        window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: ethers.utils.hexValue(chainId),
                chainName,
                rpcUrls,
            },],
        }).catch(error => {
            console.error(error);
            alert("Error, agregar red");
        });
    }
    verificarInformacion(callback) {
        let informacion = window.localStorage.getItem("informacion");
        if (informacion == null) {
            this.agregarRed(97);
            return;
        }
        informacion = JSON.parse(informacion);
        let estadisticas = informacion.estadisticas[this.direccion.toUpperCase()];
        if (estadisticas != undefined) {
            if (this.chainId == 97) {
                callback("juego");
                return;
            }
            this.agregarRed(97);
            return;
        }
        estadisticas = window.localStorage.getItem("estadisticas");
        if (estadisticas != null) {
            if (this.chainId == 97) {
                callback("entrarGrupo");
                return;
            }
            this.agregarRed(97);
            return;
        }
        if (this.chainId == 56) {
            callback("crearPersonaje");
            return;
        }
        this.agregarRed(56);
    }
    elegirPagina(callback) {

        if (this.chainId == 56) {
            this.verificarInformacion(callback);
            return;
        } else if (this.chainId != 97) {
            this.agregarRed(97);
            return;
        }
        if (this.baseDatosInformacion.address == "") {
            this.crearBaseDatos();
            return;
        }
        this.baseDatosContrato = new ethers.Contract(
            this.baseDatosInformacion.address,
            this.baseDatosInformacion.abi,
            this.signer
        );
        this.baseDatosContrato.get().then(text => {
            window.localStorage.setItem("informacion", text);
            this.verificarInformacion(callback);
        }).catch(error => {
            console.error(error);
            alert("Error, informacion base de datos");
        });
    }
}