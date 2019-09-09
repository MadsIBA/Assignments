'use strict';

//Returns error message
let userInput = prompt("Indtast et nummer for hvor mange sider der skal være på din terning:");

if (isNaN(userInput)) {
  document.write("Skriv et nummer i stedet for " + userInput);
}

//Rolls a random number between 1 and up to User Input
else {

    function play() {
      let x = Math.random();
      x = Math.floor(x * userInput + 1);
      return x;
    }
      document.write("Resultat: " (play()));
  }
