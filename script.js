const gameBoard = (function () {
    const arr = ["", "", "", "", "", "", "", "", "",]
    return {
     getBoard: function() {
        return arr
},
        placeMark: function (index, marker) {
            arr[index] = marker;

        }
    }}
)();


function createPlayer(name, marker) {
    return {
      name: name,
      marker: marker
 
    };
}

const gameController = (function () {
  let  playerOne =  createPlayer("Player 1", "X")
  let playerTwo = createPlayer("Player 2", "O")
let activePlayer = playerOne;

  return {
    playerOne, playerTwo,
    playRound: function (index) {
        if (gameBoard.getBoard()[index] === ""){
     gameBoard.placeMark(index, activePlayer.marker)

     if (activePlayer === playerOne) {
        activePlayer = playerTwo
     } else {
        activePlayer = playerOne
     }}
     }

  }
})();

                    
