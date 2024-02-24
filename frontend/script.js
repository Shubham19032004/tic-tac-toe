const gameboard = document.getElementById("gameboard");
// list of all boxes in gameboard
const boxes = gameboard.getElementsByClassName("box");
// win or lose statement
const statement = document.getElementById("statement");
// to restart game
const restartButton = document.getElementById("restart");

// user turn true so that palyer can play first
 var playerTurn = true;
let gameOver = false;
// function to get response by the user 
gameboard.addEventListener('click',function(event){
    // gameOver !=flase
    if(!gameOver){
        // event.target stored in box
        let box=event.target;
        let boxId=box.id;
        // so that player cannot change perivious inputs 
        if(box.innerHTML===""&& playerTurn){
            box.innerHTML="X";
            playerTurn=false;
            checkWin();
            computerTurn();
        }

    }
});

function computerTurn() {
    // if game is not over
    if (!gameOver) {
        // make a empty array
    let emptyBoxes = [];
    for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].innerHTML === "") {
        // all empty Boxes are pushed in array so that computer cannot change previous input
        emptyBoxes.push(boxes[i]);
    }
    }
    let number=Math.floor(Math.random() * emptyBoxes.length);
    let randomBox = emptyBoxes[number];
    randomBox.innerHTML = "O";
    playerTurn = true;
    checkWin();
    }
    }
function checkWin(){



        // check rows
        for (let i = 0; i < 9; i += 3) {
            // for eg [0,1,2] inner html is equal and not empty
        if (boxes[i].innerHTML === boxes[i+1].innerHTML && boxes[i+1].innerHTML === boxes[i+2].innerHTML && boxes[i].innerHTML !== "") {
        statement.innerHTML = boxes[i].innerHTML + " wins!";
        gameOver = true;
        return;
        }
        }
        // check columns
        // for eg[0,3,6]  inner html is equal and not empty
        for (let i = 0; i < 3; i++) {
        if (boxes[i].innerHTML === boxes[i+3].innerHTML && boxes[i+3].innerHTML === boxes[i+6].innerHTML && boxes[i].innerHTML !== "") {
        statement.innerHTML = boxes[i].innerHTML + " wins!";
        gameOver = true;
        return;
        }
        }
        // check diagonals
         // for eg[0,4,8]  inner html is equal and not empty
        if (boxes[0].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[8].innerHTML && boxes[0].innerHTML !== "") {
        statement.innerHTML = boxes[0].innerHTML + " wins!";
        gameOver = true;
        return;
        }
        // [2,4,6]
        if (boxes[2].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[6].innerHTML && boxes[2].innerHTML !== "") {
        statement.innerHTML = boxes[2].innerHTML + " wins!";
        gameOver = true;
        return;
        }
        // check for draw
        let draw = true;
        for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].innerHTML === "") {
        draw = false;
        }
        }
        if (draw) {
        statement.innerHTML = "It's a draw!";
        gameOver = true;
        }
        }
        restartButton.addEventListener('click', function() {
            // Clear the game board
            for (let i = 0; i < boxes.length; i++) {
              boxes[i].innerHTML = '';
            }
          
            // Reset the game state
            playerTurn = true;
            gameOver = false;
            statement.innerHTML = '';
          });
        
        
        
        




