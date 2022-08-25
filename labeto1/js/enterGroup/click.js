"use strict";
import Verify from "../utils/verifyClick.js";
export default function () {
    console.log(data.click);
    if (Verify(57, 287, 282, 330)) {
        data.database.set(JSON.stringify(data.info)).then(() => {
            setTimeout(() => {
                location.reload();
            }, 5000);
        }).catch(error => {
            console.error(error);
            alert("error, set database");
        });
    }
}