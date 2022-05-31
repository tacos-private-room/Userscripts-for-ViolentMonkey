// ==UserScript==
// @name         URL as PAGE TITLE
// @namespace    url_as_page_title
// @version      1.0
// @description  Shows address bar url as page title everywhere.
// @author       obscenelysad@gmail.com
// @match      *://*/*
// ==/UserScript==


console.log(' URL as PAGE TITLE');
console.log(document.URL);


var n_t = document.URL.replace('https', '');
n_t = n_t.replace('http', '');
n_t = n_t.replace('://www.', '');
n_t = n_t.replace('://', '');


setInterval(function(){
	document.title = n_t;
}, 1000);