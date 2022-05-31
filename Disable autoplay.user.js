// esversion: 6
// ==UserScript==
// @name         Disable autoplay
// @namespace    https://www.androidacy.com/
// @version      1.1
// @description  Block autoplay
// @author       Androidacy
// @include      *
// @exclude      https://www.google.com/adsense/new/*
// @icon         https://www.androidacy.com/wp-content/uploads/cropped-cropped-cropped-cropped-New-Project-32-69C2A87-1-192x192.jpg
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    // Disable autoplay
    // For debugging, run localStorage.setItem('_daua_debug', 'true') in your console
    const debug = localStorage.getItem('_daua_debug')
    window.addEventListener('DOMContentLoaded', () => {
        if (debug) {
            console.debug('Nooping autoplay')
        }
        let x = document.querySelectorAll('video')
        for (let i of x) {
            i.removeAttribute('autoplay');
            i.pause();
            i.origPlay = i.play;
            i.play = function () {};
            i.addEventListener("click", (evt) => {
                if (evt.isTrusted && !window._apun) {
                    if (debug) {
                        console.debug("Unblocking play because user clicked on:");
                        console.debug(evt.target);
                    }
                    i.play = i.origPlay;
                    i.play();
                    window._apun = true;
                }
            });
            i.parentNode.addEventListener("click", (evt) => {
                if (evt.isTrusted && !window._apun) {
                    if (debug) {
                        console.debug("Unblocking play because user clicked on:");
                        console.debug(evt.target);
                    }
                    i.play = i.origPlay;
                    i.play();
                    window._apun = true;
                }
            });
        }
    })
})();