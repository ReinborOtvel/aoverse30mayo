"use strict";
import database from "../metamask/database.js";
export default function CreateCharacter() {
  ethereum.request({
    method: 'eth_sendTransaction',
    params: [{
      from: gameData.account,
      to: database.creator,
      value: ethers.utils.parseEther(database.ticket)._hex,
      chainId: ethers.utils.hexValue(56),
    }],
  }).then(() => {
    gameData.p5.storeItem("statistics", JSON.stringify(gameData.player.statistics));
    location.reload();
  }).catch(() => {
    alert("error, create character");
  });
}