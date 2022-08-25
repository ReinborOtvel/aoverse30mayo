"use strict";
import info from "./information.js";
import Verify from "./verify.js";
import Create from "./create.js";
export default function () {
  if (info.address == "") {
    Create();
    return;
  }
  data.database = new ethers.Contract(info.address, info.abi, data.signer);
  data.database.get().then(text => {
    engine.storeItem("info", text);
    Verify();
  }).catch(error => {
    console.error(error);
    alert("error, database information");
  });
}