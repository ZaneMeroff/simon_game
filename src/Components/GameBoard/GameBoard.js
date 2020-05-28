import React, { useState } from 'react';
import { ScoreBoard } from '../ScoreBoard/ScoreBoard';
import './GameBoard.css';

let randomNumArray = [];
let playerResponse = [];
let playerClickCounter = 0;
let roundCount = 0;
let j;

export const GameBoard = () => {

  const [redActive, setRedActive] = useState(false);
  const [yellowActive, setYellowActive] = useState(false);
  const [greenActive, setGreenActive] = useState(false);
  const [blueActive, setBlueActive] = useState(false);
  const [myOrYours, setMyOrYours] = useState('');
  const [turnText, setTurnText] = useState('');
  const [playerClickDisplay, setPlayerClickDisplay] = useState(0);
  const [disableButtons, setDisableButtons] = useState(true);

  const colorKey = {
    0 : setRedActive,
    1 : setYellowActive,
    2 : setGreenActive,
    3 : setBlueActive
  }

  const startGame = () => {
    randomNumArray = generate10randomNumbers();
    roundCount = 0;
    playerResponse = [];
    playerClickCounter = 0;
    setPlayerClickDisplay(0);
    setMyOrYours('MY');
    setTurnText('TURN!');
    nextRound();
  }

  const validateAnswer = () => {
    let correctSoFar = true;
    for (let i = 0; i < playerResponse.length; i++) {
      if (playerResponse[i] !== randomNumArray[i] && correctSoFar) {
        correctSoFar = false;
      }
    }
    if (correctSoFar) {
      onCorrectRoundGuess();
    } else {
      gameOver();
    }
  }

  const gameOver = () => {
    setMyOrYours('GAME');
    setTurnText('OVER!');
    setDisableButtons(true);
  }

  const onCorrectRoundGuess = () => {
    setMyOrYours('RIGHT!');
    setTurnText('');
    setDisableButtons(true);
    playerResponse = [];
    setTimeout(() => {
      nextRound();
    }, 1000)
  }

  const nextRound = () => {
    if (roundCount === 10) {
      displayWinningMessage();
    } else {
      roundCount++
      playerClickCounter = 0
      setPlayerClickDisplay(0);
      setMyOrYours('MY');
      setTurnText('TURN!');
      j = 0;
      for (let i = 1; i <= (roundCount * 2); i++) {
        makeColorFlash(i);
      }
    }
  }

  const displayWinningMessage = () => {
    setMyOrYours('YOU');
    setTurnText('WIN!');
    setDisableButtons(true);
  }

  const makeColorFlash = i => {
    setTimeout(() => {
      if (i % 2 !== 0) {
        colorKey[randomNumArray[Math.floor(j)]](true)
      } else {
        colorKey[randomNumArray[Math.floor(j)]](false)
      }
      j += 0.5
      if (i === (roundCount * 2)) {
        setMyOrYours('YOUR');
        setDisableButtons(false);
      }
    }, i * 800 );
  }

  const generate10randomNumbers = () => {
    let randomArray = [];
    for (let i = 0; i < 10; i++) {
      randomArray.push(Math.floor(Math.random() * 4))
    }
    return randomArray;
  }

  const handlePlayerResponse = colorNum => {
    playerResponse.push(colorNum);
    playerClickCounter++
    setPlayerClickDisplay(playerClickDisplay + 1);
    if (roundCount === playerClickCounter) {
      validateAnswer();
    }
  }

  return (
    <section>
      <ScoreBoard roundCount={roundCount} startGame={startGame} playerClickDisplay={playerClickDisplay} randomNumArray={randomNumArray}/>
      <div className="gameboard-outer-container">
        <div className='center-circle'>
          <p className='turn-text-1'>{myOrYours}</p>
          <p className='turn-text-2'>{turnText}</p>
        </div>
        <div className={ disableButtons ? 'top-section disabled' : 'top-section' }>
          <div onClick={() => handlePlayerResponse(0)} className={ redActive ? 'red-box red-active' : 'red-box' }></div>
          <div onClick={() => handlePlayerResponse(1)} className={ yellowActive ? 'yellow-box yellow-active' : 'yellow-box' }></div>
        </div>
        <div className={ disableButtons ? 'bottom-section disabled' : 'bottom-section' }>
          <div onClick={() => handlePlayerResponse(2)} className={ greenActive ? 'green-box green-active' : 'green-box' }></div>
          <div onClick={() => handlePlayerResponse(3)} className={ blueActive ? 'blue-box blue-active' : 'blue-box' }></div>
        </div>
      </div>
    </section>
  );

}
