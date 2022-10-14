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
    window.data.obj.metamask.provider = new window.ethers.providers.Web3Provider(window.ethereum);
    window.data.pages.message.text = "approve your\naccounts";
    window.data.obj.metamask.provider.send("eth_requestAccounts", []).then(accounts => {
      window.data.obj.metamask.account = accounts[0];
      window.data.obj.metamask.signer = window.data.obj.metamask.provider.getSigner();
      window.data.pages.message.text = "getting the\nchain id";
      window.data.obj.metamask.signer.getChainId().then(chainId => {
        switch (chainId) {
          case 97:
            window.data.obj.metamask.chainId97();
            break;
          case 56:
            window.data.obj.metamask.chainId56();
            break;
          default:
            window.data.obj.metamask.testnet();
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
      window.data.obj.metamask.testnet();
    }
  },
  chainId97() {
    if (window.data.fun.database.address == "") {
      window.data.obj.metamask.createDatabase();
    } else {
      window.data.obj.metamask.database = new window.ethers.Contract(
        window.data.fun.database.address,
        window.data.fun.database.abi,
        window.data.obj.metamask.signer
      );
      window.data.obj.metamask.verify();
    }
  },
  createDatabase() {
    let statistics = JSON.stringify(window.data.obj.player.statistics());
    let factory = new window.ethers.ContractFactory(
      window.data.fun.database.abi,
      window.data.fun.database.bytecode,
      window.data.obj.metamask.signer
    );
    factory.deploy(window.data.fun.database.creator, statistics).then(contract => {
      console.log(contract);
    });
  },
  binance() {
    window.data.pages.message.text = "you switch to\nbinance";
    window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: window.ethers.fun.hexValue(56),
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
        chainId: window.ethers.fun.hexValue(97),
        chainName: "binance testnet",
        rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
      },],
    });
  },
  verify() {
    window.data.obj.metamask.database.getAccount(window.data.obj.metamask.account).then(account => {
      let owner = account.owner.toUpperCase();
      let address = window.data.obj.metamask.account.toUpperCase();
      if (owner == address) {
        window.data.page("game");
      } else {
        window.data.obj.metamask.statistics = JSON.parse(window.localStorage.getItem("statistics"));
        if (window.data.obj.metamask.statistics == null) {
          window.localStorage.setItem("createCharacter", "true");
          window.data.obj.metamask.binance();
        } else {
          window.data.page("selectLeader");
        }
      }
    });
  }
}