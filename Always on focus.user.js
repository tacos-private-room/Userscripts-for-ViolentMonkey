// ==UserScript==
// @name          Always on focus
// @namespace     https://github.com/daijro/always-on-focus
// @author        daijro
// @version       1.1
// @description   Prevents websites from knowing that you switched tabs or unfocused the window
// @include       *
// @run-at        document-start
// ==/UserScript==

unsafeWindow.onblur = null;
unsafeWindow.blurred = false;

unsafeWindow.document.hasFocus = function () {return true;};
unsafeWindow.window.onFocus = function () {return true;};

Object.defineProperty(document, "hidden", { value : false});
Object.defineProperty(document, "mozHidden", { value : false});
Object.defineProperty(document, "msHidden", { value : false});
Object.defineProperty(document, "webkitHidden", { value : false});
Object.defineProperty(document, 'visibilityState', { get: function () { return "visible"; } });

unsafeWindow.document.onvisibilitychange = undefined;

for (const event_name of ["visibilitychange", "webkitvisibilitychange", "blur", "mozvisibilitychange", "msvisibilitychange"]) {
    window.addEventListener(event_name, function (event) {
        if (event.type === 'blur' && event.target instanceof HTMLInputElement) {
            return;
        }
        event.stopImmediatePropagation();
    }, true);
}
