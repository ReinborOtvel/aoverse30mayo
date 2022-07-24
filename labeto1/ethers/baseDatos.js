export default function baseDatos(signer) {
    let address = "0xB8E55EdFeb01C7724e9338Fd0eD76F49018Ae21F";
    let abi = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_information",
                    "type": "string"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "information",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_information",
                    "type": "string"
                }
            ],
            "name": "set",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];
    return new ethers.Contract(address, abi, signer);
}