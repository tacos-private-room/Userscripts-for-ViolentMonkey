// ==UserScript==
// @name Global Ads and Cookie Banner Remover
// @description removes ads and cookies banners.
// @author NotYou
// @namespace -
// @version 0.6
// @license GPL-3.0
// @grant GM_addStyle
// @run-at document-start
// ==/UserScript==

(function() {
let css = "";
if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();
