"use strict";
export default function () {
    if (navigator.onLine == false) {
        alert(" no internet ");
    } else if (window.ethereum == undefined) {
        alert(" download metamask ");
    } else {
        data.provider = new ethers.providers.Web3Provider(ethereum);
        data.provider.send("eth_requestAccounts", []).then(accounts => {
            data.account = accounts[0];
            data.signer = data.provider.getSigner();
            ethereum.on('accountsChanged', () => location.reload());
            ethereum.on('chainChanged', () => location.reload());
            data.signer.getChainId().then(chainId => {
                data.chainId = chainId;
                if (chainId == 97) {
                    data.database = new ethers.Contract(info.address, info.abi, data.signer);
                    data.database.get().then(text => {
                        engine.storeItem("info", text);
                        Verify();
                    }).catch(error => {
                        console.error(error);
                        alert("error, database information");
                    });
                }
            }).catch(error => {
                console.error(error);
                alert(" error, chain id ");
            });
        }).catch(error => {
            console.error(error);
            alert(" error, accounts ");
        });
    }
}