// Copyright (c) 2022 Julienka Sohal All rights reserved
//
// Created by: Julienka Sohal
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit6-02-JS/sw.js", {
    scope: "/ICS20-Unit6-02-JS/",
  })
}

//process
document.getElementById("cookieClick").onclick = function myButtonClicked() {
  let cookieClicker = document.getElementById("cookieClick")
  while (cookieClicker == true) {
    counter++
    document.getElementById("ANS").innerHTML = "Counter:  " + counter + "."
  }
}
