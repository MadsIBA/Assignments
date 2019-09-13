//User propmt
var num = prompt("Insert a number you want to find the factorial of");

//Recursion
var fact = function(n) {
  if(n == 0) {
    return 1
  } else {
    return n * fact(n - 1);
  }
}

console.log(fact(num));

console.log(fact(5)); //expected 120
console.log(fact(3)); //expected 6
