import { full } from "./check";
const getRandomPosition = () => {
    const rowPosition = Math.floor(Math.random() * 4 );
    const colPosition = Math.floor(Math.random() * 4 );

    return [ rowPosition, colPosition ];
};
const randomGenerator = ( board ) => {
    if( full(board) ) {
        return board;
    }

    let [ row, col ] = getRandomPosition();
    while ( board[row][col] !==0 ){
        [ row, col ] = getRandomPosition(); 
    }

    board[row][col] = ( Math.random() > 0.8 ) ? 4: 2;
    return board;
}

export { randomGenerator }