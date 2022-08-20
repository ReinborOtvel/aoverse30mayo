"use strict";
import database from "./database.js";
import VerifyInformation from "./verifyInformation.js";
import CreateDatabase from "./createDatabase.js";
export default function GetInformation() {
  if (database.address == "") {
    CreateDatabase();
  } else {
    gameData.database = new ethers.Contract(database.address, database.abi, gameData.signer);
    gameData.database.get().then(text => {
      gameData.p5.storeItem("information", text);
      VerifyInformation();
    }).catch(() => alert("error, database information"));
  }
}