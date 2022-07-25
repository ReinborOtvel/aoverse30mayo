import { address, abi } from "./baseDatosInformacion.js";
import crearBaseDatos from "./crearBaseDatos.js";
export default function baseDatos(signer) {
    if (address == "") {
        crearBaseDatos(signer);
    } else {
        return new ethers.Contract(address, abi, signer);
    }
}