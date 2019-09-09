'use strict';

//Returns error message
let userInput = prompt("Indtast et nummer for antal sider på dit Roll:");

if (isNaN(userInput)) {
  document.write("Skriv et nummer i stedet for <" + userInput) + ">";
}

//Rolls a random number between 1 and up to User Input
else {

    function play() {
      let x = Math.random();
      x = Math.floor(x * userInput + 1);
      return x;
    }
      document.write(play());
  }
