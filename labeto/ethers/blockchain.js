import baseDatos from "./baseDatos.js";
import errorAlert from "./errorAlert.js";
import agregarRed from "./agregarRed.js";
export default function blockchain() {
    if (ethereum == undefined) alert("Descargar metamask");
    else {
        let provedor = new ethers.providers.Web3Provider(ethereum);
        ethereum.on('accountsChanged', location.reload);
        ethereum.on('chainChanged', location.reload);
        provedor.send("eth_requestAccounts", []).then(direcciones => {
            let signer = provedor.getSigner();
            signer.getChainId().then(chainId => {
                if (chainId == 97) {
                    baseDatos(signer).information().then(text => {
                        localStorage.setItem("informacion", text);
                        recibirInformacion();
                    }).catch(e => errorAlert(e, "Error, informacion base de datos"));
                } else if (chainId == 56) recibirInformacion();
                else agregarRed(97);
            }).catch(e => errorAlert(e, "Error, obtener chain id"));
        }).catch(e => errorAlert(e, "Error, solicitud de cuentas"));
    }
}