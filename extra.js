//  extra code, refactored code, etc., for Tic Tac Toe project

function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];
 
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i].push(Cell());
      }
    }

    const getBoard = () => board;

// add the player's choice to any open cell -- TRY THIS -- look for *dropToken* that this is replacing...
    const markSpace = (row, column, player) => {
        if (row[column] === 0) {
            row[column] === player;
// should the above be? board[row][column] === player;
// he used: board[row][column].addToken(player);
        }
        else {
            console.log("That space is already taken.");
        }
    };

    const printBoard = () => {
      const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
      console.log(boardWithCellValues);
    };
 
    // Here, we provide an interface for the rest of our
    // application to interact with the board
    return { getBoard, markSpace, printBoard };
  }


  // ORIGINAL Connect4 below this line

  // store the gameboard as an array inside of a Gameboard object
// const gameboard = (function () {
//     const boardArr = [];
//     // example code below
//     const add = (a, b) => a + b;
//     const sub = (a, b) => a - b;
//     const mul = (a, b) => a * b;
//     const div = (a, b) => a / b;
//     return { boardArr };
//     })();

// // players are also going to be stored in objects
// function Player(name, marker) {
//  this.name = name;
//  this.marker = marker;
// }
// 538. …which you use by calling the function with the keyword new:
// const player1 = new Player('andy', 'X');
// const player2 = new Player('bev', 'O');
// console.log(player1.name); // 'andy'

// an object to control the flow of the game itself.


// Code appropriated from ConnectFourConsole replit by 40percentzinc

/*
** The Gameboard represents the state of the board
** Each equare holds a Cell (defined later)
** and we expose a dropToken method to be able to add Cells to squares
*/

function Gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  // Create a 2d array that will represent the state of the game board
  // For this 2d array, row 0 will represent the top row and
  // column 0 will represent the left-most column.
  // This nested-loop technique is a simple and common way to create a 2d array.
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }

  // This will be the method of getting the entire board that our
  // UI will eventually need to render it.
  const getBoard = () => board;


  // THIS WILL BE DIFFERENT...because Tic Tac Toe doesn't drop tokens but adds the player's choice to any open cell

  // In order to drop a token, we need to find what the lowest point of the
  // selected column is, *then* change that cell's value to the player number
  const dropToken = (column, player) => {
    // Our board's outermost array represents the row,
    // so we need to loop through the rows, starting at row 0,
    // find all the rows that don't have a token, then take the
    // last one, which will represent the bottom-most empty cell
    const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);

    // If no cells make it through the filter, 
    // the move is invalid. Stop execution.
    if (!availableCells.length) return;

    // Otherwise, I have a valid cell, the last one in the filtered array
    const lowestRow = availableCells.length - 1;
    board[lowestRow][column].addToken(player);
  };


  // This method will be used to print our board to the console.
  // It is helpful to see what the board looks like after each turn as we play,
  // but ***we won't need it*** after we build our UI
  const printBoard = () => {
    const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
    console.log(boardWithCellValues);
  };

  // Here, we provide an interface for the rest of our
  // application to interact with the board
  return { getBoard, dropToken, printBoard };
}

/*
** A Cell represents one "square" on the board and can have one of
** 0: no token is in the square,
** 1: Player One's token,
** 2: Player 2's token
*/

function Cell() {
  let value = 0;

  // Accept a player's token to change the value of the cell
  const addToken = (player) => {
    value = player;
  };

  // How we will retrieve the current value of this cell through closure
  const getValue = () => value;

  return {
    addToken,
    getValue
  };
}

/* 
** The GameController will be responsible for controlling the 
** flow and state of the game's turns, as well as whether
** anybody has won the game
*/
function GameController(
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {
  const board = Gameboard();

  const players = [
    {
      name: playerOneName,
      token: 1
    },
    {
      name: playerTwoName,
      token: 2
    }
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`);
  };

  // CHANGE THIS to be a Tic Tac Toe board:
  const playRound = (column) => {
    // Drop a token for the current player
    console.log(
      `Dropping ${getActivePlayer().name}'s token into column ${column}...`
    );
    board.dropToken(column, getActivePlayer().token);

    /*  This is where we would check for a winner and handle that logic,
        such as a win message. */

    // Switch player turn
    switchPlayerTurn();
    printNewRound();
  };

  // Initial play game message
  printNewRound();

  // For the console version, we will only use playRound, but we will need
  // getActivePlayer for the UI version, so I'm revealing it now
  return {
    playRound,
    getActivePlayer
  };
}

const game = GameController();


// ****************
// MOST RECENT CODE

// store the gameboard as an array inside of a Gameboard object

function gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }

  const getBoard = () => board;

  const placeMarker = (space, player) => {
    // TODO: include logic to allow players to place a marker on an unoccupied space
    if (space === 0) {
      space = player.marker;
    }
    else {
      alert("That space is already taken.");
      return
    }
  };

  const printBoard = () => {
    const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
    console.log(boardWithCellValues);
  };

  // Here, we provide an interface for the rest of our
  // application to interact with the board
  return { getBoard, placeMarker, printBoard };
}


function Cell() {
  let value = 0;

  // Accept a player's token to change the value of the cell
  const addToken = (player) => {
    value = player;
  };

  // How we will retrieve the current value of this cell through closure
  const getValue = () => value;

  return {
    addToken,
    getValue
  };
}


function GameController(
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {
  const board = gameboard();

  const players = [
    {
      name: playerOneName,
      token: "X"
    },
    {
      name: playerTwoName,
      token: "O"
    }
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    // console.log(`${getActivePlayer().name}'s turn.`);
    document.getElementById("turn").innerHTML = `${getActivePlayer().name}'s turn`;
  };

  return {
    playRound,
    getActivePlayer
  };
}

const game = GameController();


  const btn1 = document.getElementById("cell1btn");
  const btn2 = document.getElementById("cell2btn");
  const btn3 = document.getElementById("cell3btn");
  const btn4 = document.getElementById("cell4btn");
  const btn5 = document.getElementById("cell5btn");
  const btn6 = document.getElementById("cell6btn");
  const btn7 = document.getElementById("cell7btn");
  const btn8 = document.getElementById("cell8btn");
  const btn9 = document.getElementById("cell9btn");

  btn3.addEventListener("click", () => {
    if (document.getElementById("testMark").innerHTML == "X") {
      document.getElementById("testMark").innerHTML = "O";
    } else {
      document.getElementById("testMark").innerHTML = "X";
    }
    });

  // CHANGE THIS to be a Tic Tac Toe board:
  const playRound = (space) => {
    // Drop a token for the current player
    console.log(
      `Dropping ${getActivePlayer().name}'s token into column ${space}...`
    );
    board.placeMarker(space, getActivePlayer().token);

    /*  This is where we would check for a winner and handle that logic,
        such as a win message. */

    // Switch player turn
    switchPlayerTurn();
    printNewRound();
  };

  // Initial play game message
  printNewRound();

  // For the console version, we will only use playRound, but we will need
  // getActivePlayer for the UI version, so I'm revealing it now
  return {
    playRound,
    getActivePlayer
  };
}

const game = GameController();




// players are also going to be stored in objects
// function Player(name, marker) {
//  this.name = name;
//  this.marker = marker;
// }

// let playerName1 = prompt("What's Player 1's name?");
// let playerName2 = prompt("What's Player 2's name?");

// const player1 = new Player(playerName1, 'X');
// const player2 = new Player(playerName2, 'O');
// console.log(player1.name);

// // an object to control the flow of the game itself.
// const gameFlow = (function () {
//     console.log(board);
// })();