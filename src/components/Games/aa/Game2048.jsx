import { moveLeft, moveRight, moveUp, moveDown } from './component/move';
import {checkSame, checkWin, full, isOver} from './component/check';
import { useEffect, useState} from 'react';
import { randomGenerator } from './component/getRandom';
import { emptyArea } from './component/gameBoard';
import './Game2048.css';

const Cell = ({ number }) => {
  return (
      <div
          className={`cell cell-${number}`}
      >
          { number > 0 ? number : ''}
      </div>
  )
};

const Winner = () => {
  return (
      <div className='info' >
          <p>Сongratulations! YOU WIN! </p>
          <p>Continue the game or start a new</p>
      </div>
  )
}

const Loser = () => {
  return (
      <div className='info' >
          <p> YOU LOSE! </p>
          <p>Start a new game!</p>
      </div>
  )
}

const Game2048 = () => {
  const [ board, updateBoard ] = useState(randomGenerator(emptyArea()));

  const [counter, setCounter] = useState(0)

  const checkEndGame = () => {
      if ( checkWin(board) ){
          console.log('YOU WIN!!!');
      } else if ( isOver(board) ) {
          console.log('LOSE!!!')
      }
  };
console.log(isOver(board));

  const left = () => {
      const newBoard = moveLeft(board);
      updateBoard(randomGenerator(newBoard));
      checkEndGame();
      setCounter(counter + 2);
  };

  const right = () => {
      const newBoard = moveRight(board);
      updateBoard(randomGenerator(newBoard));
      checkEndGame();
      setCounter(counter + 2);
  };

  const up = () => {
      const newBoard = moveUp(board);
      updateBoard(randomGenerator(newBoard));
      checkEndGame();
      setCounter(counter + 2);
  };

  const down = () => {
      const newBoard = moveDown(board);
      updateBoard(randomGenerator(newBoard));
      checkEndGame();
      setCounter(counter + 2);
  };
  
  const onKeyDown = (event) => {
      switch( event.key ) {
          case 'ArrowLeft':
              left();
              break;
          case 'ArrowRight':
              right();
              break;
          case 'ArrowUp':
              up();
              break;
          case 'ArrowDown':
              down();
              break;

          default:
      }
  };

  const handlerClick = () => {
      setCounter(0);
      updateBoard(randomGenerator(emptyArea()));
  };

  useEffect(() =>{
      window.addEventListener('keydown', onKeyDown);

      return () => {
          window.removeEventListener('keydown', onKeyDown);
      };
  });

  return (
      <>
          <div className='wrapper'>
              <div className='header'>
                  <h1>2048</h1>
                  <p>Join the number and get to the 2048 tile!</p>
                  <div className='score'>
                      SCORE {counter}  
                  </div>
                  <button className='buttonHed' onClick = {handlerClick}>New Game</button>
              </div>
              
              <div className='game-board'>

              { checkWin( board ) ? <Winner/> : ''}
              { isOver( board ) ? <Loser /> : ''}

                  {board.map((row, i) => {
                      return (
                          <div key={`row-${i}`} className='row'>
                              {row.map((cell, j) => (
                                  <Cell key={`cell-${i}-${j}`} number={cell} />
                              ))}
                          </div>
                      );
                  })}
              </div>
          </div>
      </>
  );
};
export default Game2048