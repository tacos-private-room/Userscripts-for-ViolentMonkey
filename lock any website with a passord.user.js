// ==UserScript==
// @name         lock any website with a passord
// @version      1.1
// @description  lock any website you want!
// @author       W4IT
// @match        https://*/*
// @match        http://*/*
// @grant        none
// @namespace https://greasyfork.org/users/740795
// ==/UserScript==



'use strict';
var why = ["insertherepassword"];//to change the password replace 'insertherepassword' with anything you want
(function(data, i) {
  var write = function(isLE) {
    for (; --isLE;) {
      data["push"](data["shift"]());
    }
  };
  write(++i);
})(why, 283);
var _lol = function(level, ai_test) {
  level = level - 0;
  var rowsOfColumns = why[level];
  return rowsOfColumns;
};
var password = _lol("0x0");
var response;

var entryCount = 0;
var entryLimit = 10;
var error = ![];

while(response != password && !error){
    if(entryCount < entryLimit){
        response = window.prompt("please insert password");
        entryCount++;
    } else {
        error = true;
    }
}

if(error){
    alert("Too mayn tries!");
    location.reload();
} else {
    alert("Welcome back!");
}
