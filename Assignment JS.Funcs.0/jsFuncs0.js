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
