'use strict';
let fahrenheit = Number(prompt("Convert fahrenheit to Celcius:")); //User Input
let celcius = 5/9*(fahrenheit-32); //Conversion formula

console.log(fahrenheit + "°F is equal to " + (Math.round(celcius)) + "°C");
