// ==UserScript==
// @name     Disable Forward
// @description Prevent of abuse window.history.forward web api
// @version  1
// @grant    none
// @include  *
// @icon     data:image/png;base64,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
// @namespace https://greasyfork.org/users/819830
// ==/UserScript==

// Modify window object
// https://stackoverflow.com/questions/25778469/how-to-access-window-target-page-objects-when-grant-values-are-set
function fakeForward () {}
unsafeWindow.history.forward = exportFunction (fakeForward, unsafeWindow);