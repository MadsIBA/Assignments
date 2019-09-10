let userInput = Number(prompt("Indtast nummer:"));

let x = addVat(userInput, 1.25);
let y = subVat(userInput, 1)
let z = calcVat(userInput, 4)

function addVat (a, b) {
  return a * b;
}

function subVat (a, b) {
  return a * b;
}

function calcVat (a, b) {
  return a / b;
}

document.write(x);
document.write("<br>");
document.write(y)
document.write("<br>");
document.write(z);


/*
'use strict';
const VAT = 25;

const addVat = function(a) {
    return a * (1 + VAT / 100);
}

const subVat = function(a) {
    return a / (1 + VAT / 100);
}

const calcVat = function(a) {
    return a - a / (1 + VAT / 100);
}

--------------------

'use strict';
var amount = Number(prompt('Enter Amount'));
var inclVat = addVat(amount);
var exclVat = subVat(inclVat);
console.log('Amount incl vat: ' + inclVat);
console.log('Amount excl vat: ' + exclVat);
console.log('Vat: ' + calcVat(inclVat));

*/
