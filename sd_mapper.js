/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Hesbon Osoro
   Date: 12/10/22  

*/

"use strict";

var thisTime = new Date("February 3, 2018 03:15:28 AM");

var timeStr = thisTime.toLocaleString();

document.getElementById("timeStamp").innerHTML = timeStr;

var thisHour = thisTime.getHours();

var thisMonth = thisTime.getMonth();

var mapNum = (2 * thisMonth + thisHour) % 24;

var imgStr = "<img src='sd_sky0.png' />";

document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);
