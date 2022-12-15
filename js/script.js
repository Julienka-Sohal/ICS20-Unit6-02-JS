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
function myButtonClicked("cookieClick") {
  let counter = 0
  while (myButtonClicked = true) {
    counter++
    document.getElementById("ANS").innerHTML = 
      "Counter " + counter + "."
  }
  }
}
