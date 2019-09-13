let roll
let dice = [2, 2, 2, 2, 2, 2]

function play() {
  let roll = Math.random();
  roll = Math.floor(roll * 6 + 1);
  return roll;
  }

//Roll 1
if (play() === 1)
    dice[0]++;
else if (play() === 2)
    dice[1]++;
else if (play() === 3)
    dice[2]++;
else if (play() === 4)
    dice[3]++;
else if (play() === 5)
    dice[4]++;
else
    dice[5]++;
//Roll 2
if (play() === 1)
    dice[0]++;
else if (play() === 2)
    dice[1]++;
else if (play() === 3)
    dice[2]++;
else if (play() === 4)
    dice[3]++;
else if (play() === 5)
    dice[4]++;
else
    dice[5]++;
//Roll 3
if (play() === 1)
    dice[0]++;
else if (play() === 2)
    dice[1]++;
else if (play() === 3)
    dice[2]++;
else if (play() === 4)
    dice[3]++;
else if (play() === 5)
    dice[4]++;
else
    dice[5]++;
//Roll 4
if (play() === 1)
    dice[0]++;
else if (play() === 2)
    dice[1]++;
else if (play() === 3)
    dice[2]++;
else if (play() === 4)
    dice[3]++;
else if (play() === 5)
    dice[4]++;
else
    dice[5]++;
//Roll 5
if (play() === 1)
    dice[0]++;
else if (play() === 2)
    dice[1]++;
else if (play() === 3)
    dice[2]++;
else if (play() === 4)
    dice[3]++;
else if (play() === 5)
    dice[4]++;
else
    dice[5]++;
//Roll 6
if (play() === 1)
    dice[0]++;
else if (play() === 2)
    dice[1]++;
else if (play() === 3)
    dice[2]++;
else if (play() === 4)
    dice[3]++;
else if (play() === 5)
    dice[4]++;
else
    dice[5]++;

const myFunc = function (item) {
  return item = dice[0]
}


console.log(dice);
console.log(dice.every(myFunc));



//Teacher Solution
/*
'use strict';

const hallo = function(item, idx, contarr) {
    console.log(contarr);
    return item === contarr[0];
}

let arr = [3,3,3,3,3,3];
console.log(arr.every(hallo, arr)); // true

let arr = [3,4,3,3,7,3];
console.log(arr.every(hallo, arr)); // false
*/

//Teacher Solution 2
/*
'use strict';
const hallo = function(varr, val) {
    return varr.some( function(item) {
        return val === item;
    });
}

let arr = [3,3,3,3,3,3];
console.log(hallo(arr, 3));     // true

let arr1 = [3,3,2,3,3,3];
console.log(hallo(arr1, 2));    // true

let arr2 = [3,3,3,3,3,3];
console.log(hallo(arr2, 4));    // false
*/
