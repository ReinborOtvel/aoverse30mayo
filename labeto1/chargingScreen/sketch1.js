let loadingScreens = [];
let provider = null;
let signer = null;
let information = null;
function preload() {
    for (let index = 0; index <= 7; index++) {
        let src = `../assets/loadingScreens${index}.png`;
        let chargingScreen = loadImage(src);
        loadingScreens[index] = chargingScreen;
    }
}
function createDatabase() {
    let information = { statistics: {}, leaders: {}, groups: {} };
    let uppercaseCreator = database.creator.toUpperCase();
    information.statistics[uppercaseCreator] = {
        name: "creator",
        head: Math.round(random(0, 235)),
        armor: Math.round(random(0, 10)),
        weapon: Math.round(random(0, 6)),
    };
    information.leaders[uppercaseCreator] = "creator";
    information.groups[uppercaseCreator] = [];
    let informationJSON = JSON.stringify(information);
    let factoryContractDatabase = new ethers.ContractFactory(database.abi, database.bytecode, signer);
    factoryContractDatabase.deploy(informationJSON).then(contract => {
        console.log(contract);
    });
}
function setup() {
    if (navigator.onLine == false) {
        alert("no internet");
    } else if (ethereum == undefined) {
        alert("download Metamask");
    } else {
        provider = new ethers.providers.Web3Provider(ethereum);
        ethereum.on('accountsChanged', () => location.reload());
        ethereum.on('chainChanged', () => location.reload());
        provider.send("eth_requestAccounts", []).then(accounts => {
            signer = provider.getSigner();
            signer.getChainId().then(chainId => {
                if (chainId == 97) {
                    if (database.address == "") {
                        createDatabase();
                    } else {
                        database.contract = new ethers.Contract(database.address, database.abi, signer);
                        database.contract.get().then(text => {
                            localStorage.setItem("information", text);
                        }).catch(error => {
                            console.error(error);
                            alert("Error, database information");
                        });
                    }
                } else if (chainId == 56) {
                    information = localStorage.getItem("information");
                    console.log(information);
                } else {

                }
            }).catch(error => {
                console.error(error);
                alert("Error, chain id");
            });
        }).catch(error => {
            console.error(error);
            alert("Error, accounts");
        });
    }
}
function draw() { }