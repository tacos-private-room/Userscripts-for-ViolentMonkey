// ==UserScript==
// @name         RightClick
// @name:ru      RightClick
// @namespace    https://vk.com/p.zyryanov/
// @version      0.4
// @description  Allows right click.
// @description:ru  Разрешает правый клик.
// @author       P.Zyryanov
// @include      http*://*/*
// @grant        none
// @license      OSL-3.0
// ==/UserScript==

(function() {
    'use strict';

    document.body.removeAttribute('oncontextmenu');
    document.body.removeAttribute('oncopy');
    document.body.removeAttribute('onselectstart');
    document.oncontextmenu=null;
    document.oncopy=null;
    document.onselectstart=null;

})();