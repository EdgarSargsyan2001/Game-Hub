import { moveLeft, moveRight, moveUp, moveDown } from './move';
const hasValue = ( board, value ) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === value) {
            return true;
          }
        }
      }
    return false;
};
const checkSame = (board) => {

  board.map((el,i) => {
      el.map((e,j) => {
          if( board[i][j] !== 0 && board[i][j] === board[i][j + 1] ) {
              board[i][j] = board[i][j] * 2;
              board[i][j + 1] = 0;
          }
      })
  })
  return board;
}

const hasDiff = (board, updatedBoard) => {
  let bool = false;
    board.map((el,i) => {
      el.map((e,j) => {
          if( board[i][j] === updatedBoard[i][j] && board[i][j] !== 0) {
            bool = true 
          }
      })
  })
  if (bool == true) {
    return false
  }
  };
const isOver = (board) => {
    if (hasDiff(board, moveLeft(board))   &&
        hasDiff(board, moveRight(board))  &&
        hasDiff(board, moveUp(board))     &&
        hasDiff(board, moveDown(board))) {
      return true;
    }
    else return false;
};
const checkWin = (board) => {
    return hasValue( board, 2048 );
};

const full = (board) => {
    return !hasValue( board, 0 );
};
export {checkSame, checkWin, full, isOver}