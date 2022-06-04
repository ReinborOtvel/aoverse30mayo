import informationDatabase from "./informationDatabase.js";
import CreateCharacter from "./CreateCharacter.js";
import EnterGroup from "./EnterGroup.js";
import Game from "./Game.js";
import Message from "./Message.js";
export default class Database {
  constructor() {
    this.provider = new ethers.providers.Web3Provider(window.ethereum);
    window.ethereum.on('accountsChanged', () => {
      window.location.reload();
    });
    window.ethereum.on('chainChanged', () => {
      window.location.reload();
    });
    this.provider.send("eth_requestAccounts", []).then(addresses => {
      window.localStorage.setItem("address", addresses[0]);
      this.signer = this.provider.getSigner();
      this.signer.getChainId().then(chainId => {
        let information = window.localStorage.getItem("information");
        this.chainId = chainId;
        if (this.chainId === 97) {
          let { address, abi, } = informationDatabase;
          this.contract = new ethers.Contract(address, abi, this.signer);
          this.getInformation(() => {
            this.menu();
          });
        } else if (information === null) {
          this.changeNetwork(97);
        } else {
          this.menu();
        }
      }).catch(() => {
        window.Main.Page = new Message("Chain id not obtained");
      });
    }).catch(() => {
      window.Main.Page = new Message("Accounts not&received");
    });
  }
  getInformation(callback) {
    this.contract.information().then(text => {
      window.localStorage.setItem("information", text);
      callback();
    }).catch(() => {
      window.Main.Page = new Message("data was not retrieved from the database");
    });
  }
  menu() {
    let information = JSON.parse(window.localStorage.getItem("information"));
    let upperCaseAddress = window.localStorage.getItem("address").toUpperCase();
    let statistics = information.statistics[upperCaseAddress];
    if (statistics !== undefined) {
      if (this.chainId === 97) {
        window.Main.Page.stop();
        window.Main.Page = new Game();
      } else {
        this.changeNetwork(97);
      }
    } else {
      statistics = window.localStorage.getItem("statistics");
      if (statistics !== null) {
        if (this.chainId === 97) {
          window.Main.Page.stop();
          window.Main.Page = new EnterGroup();
        } else {
          this.changeNetwork(97);
        }
      } else {
        if (this.chainId === 56) {
          window.Main.Page.stop();
          window.Main.Page = new CreateCharacter();
        } else {
          this.changeNetwork(56);
        }
      }
    }
  }
  changeNetwork(chainId) {
    window.ethereum.request({
      method: 'wallet_switchEthereumChain', params: [{
        chainId: window.ethers.utils.hexValue(chainId),
      }],
    }).then(() => {
      window.location.reload();
    }).catch(() => {
      window.location.reload();
    });
  }
  create() {
    let { abi, bytecode, creator } = informationDatabase;
    let factory = new ethers.ContractFactory(abi, bytecode, this.signer);
    let information = { leader: {}, limbs: {}, statistics: {}, };
    let uppercaseCreator = creator.toUpperCase();
    information.leader[uppercaseCreator] = uppercaseCreator;
    information.limbs[uppercaseCreator] = [uppercaseCreator];
    information.statistics[uppercaseCreator] = window.Main.Tools.randomStatistics('Reinbor');
    let jsonInformation = JSON.stringify(information);
    factory.deploy(jsonInformation).then(contract => {
      alert(contract.address);
    });
  }
}