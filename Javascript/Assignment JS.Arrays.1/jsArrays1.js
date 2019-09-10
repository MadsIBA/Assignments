let roll
let dice = [0, 0, 0, 0, 0, 0]


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
//Roll 7
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
//Roll 8
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
//Roll 9
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
//Roll 10
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
console.log(play());
console.log(dice);
