export default function blockchain(callback) {
    if (window.ethereum == undefined) window.alert("Descargar metamask");
    else {
        let provedor = new window.ethers.providers.Web3Provider(window.ethereum);
        window.ethereum.on('accountsChanged', () => window.location.reload());
        window.ethereum.on('chainChanged', () => window.location.reload());
        provedor.send("eth_requestAccounts", []).then(direcciones => {
            let direccion = direcciones[0];
            let signer = provedor.getSigner();
            signer.getChainId().then(chainId => {
                callback({ provedor, direccion, signer, chainId });
            }).catch(error => {
                console.error(error);
                alert("Error, Error, obtener chain id");
            });
        }).catch(error => {
            console.error(error);
            alert("Error, solicitud de cuentas");
        });
    }
}