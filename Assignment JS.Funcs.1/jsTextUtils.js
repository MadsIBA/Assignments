let userInput = prompt("Indtast et ord:");

function first (word) {
  return word.charAt(0)
}

let firstLetter = first(userInput);

function last (word) {
  return word.slice(-1)
}

let lastLetter = last(userInput);

function middle (word) {
  return word.slice(1,-1)
}

let inBetween = middle(userInput);

document.write("The first letter in " + userInput + " is " + '"' + firstLetter.toUpperCase() + '"');
document.write("<br>");
document.write("The last letter in " + userInput + " is " + '"' + lastLetter.toUpperCase() + '"');
document.write("<br>");
document.write("The letter between " + firstLetter.toUpperCase() + ` & ` + lastLetter.toUpperCase() + " in " + userInput + ' is "' + inBetween.toUpperCase() + '"');
