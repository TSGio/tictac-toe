const gameBoard = (function () {
  const arr = ["", "", "", "", "", "", "", "", ""];
  
  return {
    getBoard: function () {
      return arr;
    },
    placeMark: function (index, marker) {
      arr[index] = marker;
    }
  };
})();

function createPlayer(name, marker) {
  return {
    name: name,
    marker: marker
  };
}

const gameController = (function () {
  let playerOne = createPlayer("Player 1", "X");
  let playerTwo = createPlayer("Player 2", "O");
  let activePlayer = playerOne;

  const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  return {
    playerOne, 
    playerTwo,
    playRound: function (index) {
      
      // 1. The Guard
      if (gameBoard.getBoard()[index] === "") {
        
        // 2. The Action
        gameBoard.placeMark(index, activePlayer.marker);

        // 3. The Check
        for (let i = 0; i < winningConditions.length; i++) {
          const combo = winningConditions[i];
          
          if (
            gameBoard.getBoard()[combo[0]] === activePlayer.marker && 
            gameBoard.getBoard()[combo[1]] === activePlayer.marker && 
            gameBoard.getBoard()[combo[2]] === activePlayer.marker
          ) {
            console.log("You win!");
          }
        }

        // 4. The Switch
        if (activePlayer === playerOne) {
          activePlayer = playerTwo;
        } else {
          activePlayer = playerOne;
        }
      }
      
    }
  };
})();