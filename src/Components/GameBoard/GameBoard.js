import React, { useState } from 'react';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import './GameBoard.css';

let randomNumArray = []
let playerResponse = []

const GameBoard = () => {

  const [redActive, setRedActive] = useState(false);
  const [yellowActive, setYellowActive] = useState(false);
  const [greenActive, setGreenActive] = useState(false);
  const [blueActive, setBlueActive] = useState(false);

  const [roundCount, setRoundCount] = useState(1);
  const [myOrYours, setMyOrYours] = useState('');
  const [turnText, setTurnText] = useState('');

  const colorKey = {
    0 : setRedActive,
    1 : setYellowActive,
    2 : setGreenActive,
    3 : setBlueActive
  }

  const startGame = () => {
    randomNumArray.push(randomNum(), randomNum(), randomNum(), randomNum(), randomNum())
    setMyOrYours('MY')
    setTurnText('TURN!')
    blinkColors();
  }

  const blinkColors = () => {

    if (roundCount === 1) {
      setTimeout(() => {
        colorKey[randomNumArray[0]](true)
      }, 1000)
      setTimeout(() => {
        colorKey[randomNumArray[0]](false)
        setMyOrYours('YOUR')
      }, 2000)
    }

    if (roundCount === 2) {
      setTimeout(() => {
        increaseRoundCount();
        colorKey[randomNumArray[0]](true)
      }, 1000)
      setTimeout(() => {
        increaseRoundCount();
        colorKey[randomNumArray[0]](false)
      }, 2000)
      setTimeout(() => {
        increaseRoundCount();
        colorKey[randomNumArray[1]](true)
      }, 3000)
      setTimeout(() => {
        increaseRoundCount();
        colorKey[randomNumArray[1]](false)
      }, 4000)
    }
  }

  const validateAnswer = () => {
    console.log('random num array: ', randomNumArray);
    console.log('playerResponse: ', playerResponse);
    if (playerResponse[0] === randomNumArray[0]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      increaseRoundCount();
    } else {
      setMyOrYours('GAME')
      setTurnText('OVER!')
    }
  }

  const increaseRoundCount = () => {
    setRoundCount(roundCount + 1)
  }

  const randomNum = () => {
    return Math.floor(Math.random() * 4)
  }

  const handlePlayerResponse = colorNum => {
    playerResponse.push(colorNum)
    validateAnswer();
  }

  return (
    <>
    <ScoreBoard roundCount={roundCount} startGame={startGame}/>
    <div className="gameboard-outer-container">
      <div className='center-circle'>
        <p className='turn-text-1'>{myOrYours}</p>
        <p className='turn-text-2'>{turnText}</p>
      </div>
      <div className='top-section'>
        <div onClick={() => handlePlayerResponse(0)} className={ redActive ? 'red-box red-active' : 'red-box' }></div>
        <div onClick={() => handlePlayerResponse(1)} className={ yellowActive ? 'yellow-box yellow-active' : 'yellow-box'}></div>
      </div>
      <div className='bottom-section'>
        <div onClick={() => handlePlayerResponse(2)} className={ greenActive ? 'green-box green-active' : 'green-box' }></div>
        <div onClick={() => handlePlayerResponse(3)} className={ blueActive ? 'blue-box blue-active' : 'blue-box' }></div>
      </div>
    </div>
    </>
  );

}

export default GameBoard;
