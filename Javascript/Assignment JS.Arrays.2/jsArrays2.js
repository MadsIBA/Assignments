let palindromeArray = (arr, start = 0, end = arr.length - 1) => {
    //if array has only element
    if(start >= end){
      return true;
    }

    //if start is equal to end
    if(arr[start] === arr[end]){
      //call the same function
      return palindromeArray(arr, start + 1, end - 1);
    }else{
      //else not palindrome
      return false;
    }
}

console.log(palindromeArray([1,2,3,2,1]));
console.log(palindromeArray([1,2,3,2,2]));


// - Teacher Solution
/*
'use strict';

const first = function (txt) {
    return txt.charAt(0);
}

const last = function (txt) {
    return txt.charAt(txt.length - 1);
}

const middle = function (txt) {
    return txt.substring(1, txt.length - 1);
}

const isPalindrome = function(txt, debug) {
    if (txt.length <= 1)
        return true;
    if (debug)
        console.log(`${first(txt)} - ${middle(txt)} - ${last(txt)}`);
    return first(txt) === last(txt) && isPalindrome(middle(txt), debug);
}

var phrase = prompt('Enter Phrase');
console.log(`Is ${phrase} a palidrome? ${isPalindrome(phrase, true)}`);
*/
