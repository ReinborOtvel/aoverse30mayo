"use strict";
import metamask from "./metamask.js";
metamask(page => {
  window.location.href = `/${page}/index.html`;
});