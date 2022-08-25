import Metamask from "../metamask/start.js";
export default function () {
    if (page.metamask == true) {
        return;
    }
    page.metamask = true;
    Metamask();
}