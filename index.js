const readline = require('readline');

// interface

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

//rl.prompt();

rl.on('line', (line) => {
  console.log(line.trim());
  if(line.trim()==='q'){
    process.exit();
  }
  rl.prompt();
})

// board

class Board {
  constructor(){
    this.squares = [];    
  }
  makeBoard(){
    let squareNum = 1;
    for(let i = 0; i < 3; i++){
      this.squares.push([]);
      for(let j = 0; j <3; j++){
        this.squares[i].push(''+squareNum);
        squareNum++;
      }
    }
  }
  display(){
    for(let i = 0; i < 3; i++){
      console.log(' -----------');
      let boardLine = '| ';
      for(let j = 0; j <3; j++){
        boardLine += this.squares[i][j] + ' | ';
      }
      console.log(boardLine);
    }
    console.log(' -----------');
  }
  addPiece(square, piece){
    let row = Math.floor((square-1)/3)
    let col = (square - 1) % 3;
    if(this.squares[row][col] !== 'X' && this.squares[row][col] !== 'O'){
      //console.log('success');
      this.squares[row][col] = piece;
    } else {
      //console.log('error'); // let's move this out when we get the game working
      return false;
    }
  }
  checkWin(){
    let winner = null;
    let s = this.squares;
    //check rows
    for(let i = 0; i < 3; i++){
      if(s[i][0] === s[i][1] && s[i][1] === s[i][2]){
        winner = s[i][0];
      }
    }
    //check cols
    for(let i = 0; i < 3; i++){
      if(s[0][i] === s[1][i] && s[1][i] === s[2][i]){
        winner = s[0][i];
      }      
    }
    //check diags
    if(s[0][0] === s[1][1] && s[1][1] === s[2][2]){
      winner = s[0][0];
    }
    if(s[0][2] === s[1][1] && s[1][1] === s[2][0]){
      winner = s[0][2];
    }
    return winner;
  }

}



// game

const board = new Board;
board.makeBoard();
board.display();
board.addPiece(1, 'O');
board.display();
board.addPiece(5, 'O');
console.log(board.checkWin());
board.addPiece(9, 'O');
console.log(board.checkWin());
// alternate turns between players.
// after every turn, check if someone won
// if so, end game.

// if 9 turns have passed and no one won, end game.

// end game. play again or quit
// process.exit();