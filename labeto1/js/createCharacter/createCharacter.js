"use strict";
import info from "../database/information.js";
export default function () {
  ethereum.request({
    method: 'eth_sendTransaction',
    params: [{
      from: data.account,
      to: info.creator,
      value: ethers.utils.parseEther(info.ticket)._hex,
      chainId: ethers.utils.hexValue(56),
    }],
  }).then(() => {
    let statistics = JSON.stringify(page.player.statistics);
    engine.storeItem("statistics", statistics);
    location.reload();
  }).catch(() => {
    alert("error, create character");
    page.transaction = false;
  });
}