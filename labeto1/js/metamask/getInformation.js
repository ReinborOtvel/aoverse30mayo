"use strict";
import database from "./database.js";
import Verify from "./verifyInformation.js";
import Database from "./createDatabase.js";
export default function (gameData) {
  if (database.address == "") {
    Database();
  } else {
    gameData.metamask.database = new ethers.Contract(database.address, database.abi, gameData.metamask.signer);
    gameData.metamask.database.get().then(text => {
      gameData.graphicsEngine.storeItem("information", text);
      Verify(gameData);
    }).catch(error => {
      console.error(error);
      alert("error, database information");
    });
  }
}