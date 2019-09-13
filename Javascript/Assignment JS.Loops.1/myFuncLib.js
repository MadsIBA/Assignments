//User propmt
var num = Number(prompt("Insert a number you want to find the Fibonacci of"));


//Recursion
var fact = function(n) {
  if(n === 0 || n === 1) {
    return 1
  } else {
    return fact(n - 1) + fact(n - 2);
  }
}

console.log(fact(num));
