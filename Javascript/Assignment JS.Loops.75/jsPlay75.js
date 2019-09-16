function rollDice() {
  var sides = document.getElementById("sides").value;
  var numDice = document.getElementById("diceNum").value;
  var container = document.getElementById("dieContainer");

  container.innerHTML = "";

  for (var i = 0; i < numDice; i++) {
    var diceRoll = Math.floor(Math.random() * sides) + 1;
    container.innerHTML += '<div class="dice">' + diceRoll + '</div>';
  };
};
