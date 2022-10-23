"use strict";
import metamask from "./metamask.js";
metamask(_page => {
  location.href = `/${_page}/index.html`;
});