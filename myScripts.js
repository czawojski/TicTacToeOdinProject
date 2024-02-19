function Player(name, marker) {
 this.name = name;
 this.marker = marker;
}

let playerName1 = prompt("What's Player 1's name?");
let playerName2 = prompt("What's Player 2's name?");

const player1 = new Player(playerName1, 'X');
const player2 = new Player(playerName2, 'O');

const btn1 = document.getElementById("cell1btn");
const btn2 = document.getElementById("cell2btn");
const btn3 = document.getElementById("cell3btn");
const btn4 = document.getElementById("cell4btn");
const btn5 = document.getElementById("cell5btn");
const btn6 = document.getElementById("cell6btn");
const btn7 = document.getElementById("cell7btn");
const btn8 = document.getElementById("cell8btn");
const btn9 = document.getElementById("cell9btn");

btn1.addEventListener("click", () => {
if (document.getElementById("mark1").innerHTML == "") {
document.getElementById("mark1").innerHTML = activePlayer.marker;
}
else {
  alert("This space is already taken.");
}
});

btn2.addEventListener("click", () => {
if (document.getElementById("mark2").innerHTML == "") {
document.getElementById("mark2").innerHTML = activePlayer.marker;
}
else {
  alert("This space is already taken.");
}
});

btn3.addEventListener("click", () => {
if (document.getElementById("mark3").innerHTML == "") {
document.getElementById("mark3").innerHTML = activePlayer.marker;
}
else {
  alert("This space is already taken.");
}
});

btn4.addEventListener("click", () => {
if (document.getElementById("mark4").innerHTML == "") {
document.getElementById("mark4").innerHTML = activePlayer.marker;
}
else {
  alert("This space is already taken.");
}
});

btn5.addEventListener("click", () => {
if (document.getElementById("mark5").innerHTML == "") {
document.getElementById("mark5").innerHTML = activePlayer.marker;
}
else {
  alert("This space is already taken.");
}
});

btn6.addEventListener("click", () => {
if (document.getElementById("mark6").innerHTML == "") {
document.getElementById("mark6").innerHTML = activePlayer.marker;
}
else {
  alert("This space is already taken.");
}
});

btn7.addEventListener("click", () => {
if (document.getElementById("mark7").innerHTML == "") {
document.getElementById("mark7").innerHTML = activePlayer.marker;
}
else {
  alert("This space is already taken.");
}
});

btn8.addEventListener("click", () => {
if (document.getElementById("mark8").innerHTML == "") {
document.getElementById("mark8").innerHTML = activePlayer.marker;
}
else {
  alert("This space is already taken.");
}
});

btn9.addEventListener("click", () => {
if (document.getElementById("mark9").innerHTML == "") {
document.getElementById("mark9").innerHTML = activePlayer.marker;
}
else {
  alert("This space is already taken.");
}
});
  
var activePlayer = player2;

const switchPlayerTurn = () => {
  activePlayer = activePlayer == player2 ? player1 : player2;
  document.getElementById("turn").innerHTML = `${activePlayer.name}'s turn`;

  if (document.getElementById("mark1").innerHTML == player1.marker && document.getElementById("mark2").innerHTML == player1.marker && document.getElementById("mark3").innerHTML == player1.marker) {
    document.getElementById("turn").innerHTML = `${player1.name} wins!`;
    }
  else if (document.getElementById("mark4").innerHTML == player1.marker && document.getElementById("mark5").innerHTML == player1.marker && document.getElementById("mark6").innerHTML == player1.marker) {
    document.getElementById("turn").innerHTML = `${player1.name} wins!`;
    }
  else if (document.getElementById("mark7").innerHTML == player1.marker && document.getElementById("mark8").innerHTML == player1.marker && document.getElementById("mark9").innerHTML == player1.marker) {
    document.getElementById("turn").innerHTML = `${player1.name} wins!`;
    }

  else if (document.getElementById("mark1").innerHTML == player2.marker && document.getElementById("mark2").innerHTML  == player2.marker && document.getElementById("mark3").innerHTML  == player2.marker) {
    document.getElementById("turn").innerHTML = `${player2.name} wins!`;
    }
  else if (document.getElementById("mark4").innerHTML == player2.marker && document.getElementById("mark5").innerHTML == player2.marker && document.getElementById("mark6").innerHTML  == player2.marker) {
    document.getElementById("turn").innerHTML = `${player2.name} wins!`;
    }
  else if (document.getElementById("mark7").innerHTML == player2.marker && document.getElementById("mark8").innerHTML == player2.marker && document.getElementById("mark9").innerHTML == player2.marker) {
    document.getElementById("turn").innerHTML = `${player2.name} wins!`;
    }

  else if (document.getElementById("mark1").innerHTML == player1.marker && document.getElementById("mark4").innerHTML == player1.marker && document.getElementById("mark7").innerHTML == player1.marker) {
    document.getElementById("turn").innerHTML = `${player1.name} wins!`;
    }
  else if (document.getElementById("mark2").innerHTML == player1.marker && document.getElementById("mark5").innerHTML == player1.marker && document.getElementById("mark8").innerHTML == player1.marker) {
    document.getElementById("turn").innerHTML = `${player1.name} wins!`;
    }
  else if (document.getElementById("mark3").innerHTML == player1.marker && document.getElementById("mark6").innerHTML == player1.marker && document.getElementById("mark9").innerHTML == player1.marker) {
    document.getElementById("turn").innerHTML = `${player1.name} wins!`;
    }

  else if (document.getElementById("mark1").innerHTML == player2.marker && document.getElementById("mark4").innerHTML == player2.marker && document.getElementById("mark7").innerHTML  == player2.marker) {
    document.getElementById("turn").innerHTML = `${player2.name} wins!`;
    }
  else if (document.getElementById("mark2").innerHTML == player2.marker && document.getElementById("mark5").innerHTML == player2.marker && document.getElementById("mark8").innerHTML  == player2.marker) {
    document.getElementById("turn").innerHTML = `${player2.name} wins!`;
    }
  else if (document.getElementById("mark3").innerHTML == player2.marker && document.getElementById("mark6").innerHTML == player2.marker && document.getElementById("mark9").innerHTML == player2.marker) {
    document.getElementById("turn").innerHTML = `${player2.name} wins!`;
    }

  else if (document.getElementById("mark1").innerHTML == player1.marker && document.getElementById("mark5").innerHTML == player1.marker && document.getElementById("mark9").innerHTML == player1.marker) {
    document.getElementById("turn").innerHTML = `${player1.name} wins!`;
    }
  else if (document.getElementById("mark3").innerHTML == player1.marker && document.getElementById("mark5").innerHTML == player1.marker && document.getElementById("mark7").innerHTML == player1.marker) {
    document.getElementById("turn").innerHTML = `${player1.name} wins!`;
    }

  else if (document.getElementById("mark1").innerHTML == player2.marker && document.getElementById("mark5").innerHTML == player2.marker && document.getElementById("mark9").innerHTML == player2.marker) {
    document.getElementById("turn").innerHTML = `${player2.name} wins!`;
    }
  else if (document.getElementById("mark3").innerHTML == player2.marker && document.getElementById("mark5").innerHTML == player2.marker && document.getElementById("mark7").innerHTML == player2.marker) {
    document.getElementById("turn").innerHTML = `${player2.name} wins!`;
    }
    
  else if (document.getElementById("mark1").innerHTML != "" && document.getElementById("mark2").innerHTML != "" && document.getElementById("mark3").innerHTML != "" && document.getElementById("mark4").innerHTML != "" && document.getElementById("mark5").innerHTML != "" && document.getElementById("mark6").innerHTML != "" && document.getElementById("mark7").innerHTML != "" && document.getElementById("mark8").innerHTML != "" && document.getElementById("mark9").innerHTML != "") {
    document.getElementById("turn").innerHTML = "Tie game.";
    }; 
};
switchPlayerTurn();

const switch1 = document.getElementById("cell1btn");
switch1.addEventListener("click", switchPlayerTurn);
const switch2 = document.getElementById("cell2btn");
switch2.addEventListener("click", switchPlayerTurn);
const switch3 = document.getElementById("cell3btn");
switch3.addEventListener("click", switchPlayerTurn);
const switch4 = document.getElementById("cell4btn");
switch4.addEventListener("click", switchPlayerTurn);
const switch5 = document.getElementById("cell5btn");
switch5.addEventListener("click", switchPlayerTurn);
const switch6 = document.getElementById("cell6btn");
switch6.addEventListener("click", switchPlayerTurn);
const switch7 = document.getElementById("cell7btn");
switch7.addEventListener("click", switchPlayerTurn);
const switch8 = document.getElementById("cell8btn");
switch8.addEventListener("click", switchPlayerTurn);
const switch9 = document.getElementById("cell9btn");
switch9.addEventListener("click", switchPlayerTurn);