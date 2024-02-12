function Player(name, marker) {
 this.name = name;
 this.marker = marker;
}

let playerName1 = prompt("What's Player 1's name?");
let playerName2 = prompt("What's Player 2's name?");

const player1 = new Player(playerName1, 'X');
const player2 = new Player(playerName2, 'O');
console.log(player1.name);
console.log(player2.name);

// an object to control the flow of the game itself.
// const gameFlow = (function () {
//     console.log(board);
// })();

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
  if (document.getElementById("mark1").innerHTML == "X") {
    document.getElementById("mark1").innerHTML = "O";
  } else {
    document.getElementById("mark1").innerHTML = "X";
  }
  });

btn2.addEventListener("click", () => {
  if (document.getElementById("mark2").innerHTML == "X") {
    document.getElementById("mark2").innerHTML = "O";
  } else {
    document.getElementById("mark2").innerHTML = "X";
  }
  });

btn3.addEventListener("click", () => {
  if (document.getElementById("mark3").innerHTML == "X") {
    document.getElementById("mark3").innerHTML = "O";
  } else {
    document.getElementById("mark3").innerHTML = "X";
  }
  });

btn4.addEventListener("click", () => {
  if (document.getElementById("mark4").innerHTML == "X") {
    document.getElementById("mark4").innerHTML = "O";
  } else {
    document.getElementById("mark4").innerHTML = "X";
  }
  });

btn5.addEventListener("click", () => {
  if (document.getElementById("mark5").innerHTML == "X") {
    document.getElementById("mark5").innerHTML = "O";
  } else {
    document.getElementById("mark5").innerHTML = "X";
  }
  });

btn6.addEventListener("click", () => {
  if (document.getElementById("mark6").innerHTML == "X") {
    document.getElementById("mark6").innerHTML = "O";
  } else {
    document.getElementById("mark6").innerHTML = "X";
  }
  });

btn7.addEventListener("click", () => {
  if (document.getElementById("mark7").innerHTML == "X") {
    document.getElementById("mark7").innerHTML = "O";
  } else {
    document.getElementById("mark7").innerHTML = "X";
  }
  });

btn8.addEventListener("click", () => {
  if (document.getElementById("mark8").innerHTML == "X") {
    document.getElementById("mark8").innerHTML = "O";
  } else {
    document.getElementById("mark8").innerHTML = "X";
  }
  });

btn9.addEventListener("click", () => {
  if (document.getElementById("mark9").innerHTML == "X") {
    document.getElementById("mark9").innerHTML = "O";
  } else {
    document.getElementById("mark9").innerHTML = "X";
  }
  });


  // WORKING here...on gameController...
