export default {
  setup() {
    if (!window.navigator.onLine) {
      window.data.pages.message.text = "You don't have\ninternet";
      return;
    }
    if (window.ethereum == undefined) {
      window.data.pages.message.text = "You don't have\nmetamask";
      return;
    }
    window.ethereum.on('chainChanged', () => {
      window.location.reload();
    });
    window.data.events.metamask.provider = new window.ethers.providers.Web3Provider(window.ethereum);
    window.data.pages.message.text = "approve your\naccounts";
    window.data.events.metamask.provider.send("eth_requestAccounts", []).then(accounts => {
      window.data.events.metamask.account = accounts[0];
      window.data.events.metamask.signer = window.data.events.metamask.provider.getSigner();
      window.data.pages.message.text = "getting the\nchain id";
      window.data.events.metamask.signer.getChainId().then(chainId => {
        switch (chainId) {
          case 97:
            window.data.events.metamask.chainId97();
            break;
          case 56:
            window.data.events.metamask.chainId56();
            break;
          default:
            window.data.events.metamask.testnet();
            break;
        }
      });
    });
  },
  chainId56() {
    let createCharacter = window.localStorage.getItem("createCharacter");
    if (createCharacter == "true") {
      window.localStorage.removeItem("createCharacter");
      window.data.page("createCharacter");
    } else {
      window.data.events.metamask.testnet();
    }
  },
  chainId97() {
    if (window.data.utils.database.address == "") {
      window.data.events.metamask.createDatabase();
    } else {
      window.data.events.metamask.database = new window.ethers.Contract(
        window.data.utils.database.address,
        window.data.utils.database.abi,
        window.data.events.metamask.signer
      );
      window.data.events.metamask.verify();
    }
  },
  createDatabase() {
    let statistics = JSON.stringify(window.data.objects.player.statistics());
    let factory = new window.ethers.ContractFactory(
      window.data.utils.database.abi,
      window.data.utils.database.bytecode,
      window.data.events.metamask.signer
    );
    factory.deploy(window.data.utils.database.creator, statistics).then(contract => {
      console.log(contract);
    });
  },
  binance() {
    window.data.pages.message.text = "you switch to\nbinance";
    window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: window.ethers.utils.hexValue(56),
        chainName: "binance",
        rpcUrls: ['https://bsc-dataseed.binance.org/'],
      },],
    });
  },
  testnet() {
    window.data.pages.message.text = "you switch to\nbinance testnet";
    window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: window.ethers.utils.hexValue(97),
        chainName: "binance testnet",
        rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
      },],
    });
  },
  verify() {
    window.data.events.metamask.database.getAccount(window.data.events.metamask.account).then(account => {
      let owner = account.owner.toUpperCase();
      let address = window.data.events.metamask.account.toUpperCase();
      if (owner == address) {
        window.data.page("game");
      } else {
        window.data.events.metamask.statistics = JSON.parse(window.localStorage.getItem("statistics"));
        if (window.data.events.metamask.statistics == null) {
          window.localStorage.setItem("createCharacter", "true");
          window.data.events.metamask.binance();
        } else {
          window.data.page("selectLeader");
        }
      }
    });
  }
}