'use strict';

let temp = String(prompt("Write F2C or C2F"));

if (temp == "F2C") {
  //Fahrenheit to Celcius
  let fahrenheit = Number(prompt("Convert Fahrenheit to Celcius:")); //User Input


  if (isNaN(fahrenheit)) {
    document.write("Write a number instead of " + fahrenheit);
  }

  //Rolls a random number between 1 and up to User Input
  else {

      function f2c() {
        let celcius = 5/9*(fahrenheit-32); //Conversion formula
        return celcius;
      }
        document.write(fahrenheit + "°F is equal to " + Math.round(f2c()) + "°C");
    }
}


else if (temp == "C2F") {
  //Celcius to Fahrenheit
  let celcius = Number(prompt("Convert Celcius to Fahrenheit:")); //User Input

  if (isNaN(celcius)) {
    document.write("Write a number instead of " + celcius);
  }

  //Rolls a random number between 1 and up to User Input
  else {

      function c2f() {
        let fahrenheit = celcius*9/5+32; //Conversion formula
        return fahrenheit;
      }
        document.write(celcius + "°C is equal to " + Math.round(c2f()) + "°F");
    }
}

else {
  document.write("Write F2C or C2F");
}
