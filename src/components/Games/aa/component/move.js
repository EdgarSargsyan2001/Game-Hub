import { checkSame } from "./check";
import { emptyArea } from "./gameBoard";
const moveVal = ( board ) => {
    const newBoard = emptyArea();

    board.map((el,i) => {
        let colIndex = 0;
        el.map((e,j) => {
            if ( board[i][j] !==0 ) {
                newBoard[i][colIndex] = board[i][j];
                colIndex++;
            }
        })
    })
    return newBoard;
};
const moveLeft = ( board ) => {
    const newBoard1 = moveVal(board);
    const newBoard2 = checkSame(newBoard1);

    return moveVal(newBoard2);
}
const revers = ( board ) => {
    const reverseBoard = emptyArea();

    board.map((el, i) => {
        reverseBoard[i] = el.reverse();
    });

    return reverseBoard;
};

const moveRight = ( board ) => {
    const reversedBoard = revers( board );
    const newBoard = moveLeft( reversedBoard );
    
    return revers( newBoard );
}
const rotateLeft = ( board ) => {
    const rotateBoard = emptyArea();
    
    board.map((el, i) => {
        el.map((e, j) => {
            rotateBoard[i][j] = board[j][board[i].length - 1 - i];
        });
    });
    
    return rotateBoard;
};

const rotateRight = ( board ) => {
    const rotateBoard = emptyArea();
    
    board.map((el, i) => {
        el.map((e, j) => {
            rotateBoard[i][j] = board[board[i].length - 1 - j][i];
        });
    });
 
    return rotateBoard;
};
const moveUp = ( board ) => {
    const rotateBoard = rotateLeft(board);
    const newBoard = moveLeft(rotateBoard);
    
    return rotateRight(newBoard);
};

const moveDown = ( board ) => {
    const rotateBoard = rotateRight(board);
    const newBoard = moveLeft(rotateBoard);
    
    return rotateLeft(newBoard);
};

export {moveLeft, moveRight, moveUp, moveDown}