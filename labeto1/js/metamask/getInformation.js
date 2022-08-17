"use strict";
import { address, abi } from "./database.js";
import VerifyInformation from "./verifyInformation.js";
import CreateDatabase from "./createDatabase.js";
export default function GetInformation() {
  if (address == "") {
    CreateDatabase();
  } else {
    gameData.database = new ethers.Contract(address, abi, gameData.signer);
    gameData.database.get().then(text => {
      storeItem("information", text);
      VerifyInformation();
    }).catch(() => alert("error, database information"));
  }
}