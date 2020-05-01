import React, { useState } from 'react';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import './GameBoard.css';

const GameBoard = () => {

  const [redActive, setRedActive] = useState(false);
  const [yellowActive, setYellowActive] = useState(false);
  const [greenActive, setGreenActive] = useState(false);
  const [blueActive, setBlueActive] = useState(false);

  const [roundCount, setRoundCount] = useState(1);
  const [randomNumArray, setRandomNumArray] = useState([])

  const colorKey = {
    0 : redActive,
    1 : yellowActive,
    2 : greenActive,
    3 : blueActive
  }

  const startGame = () => {
    addRandomNumber()
    blinkColors();
  }

  const blinkColors = () => {
    setTimeout(() => {
      setRedActive(true)
    }, 2000)

    setTimeout(() => {
      setRedActive(false)
    }, 4000)

  }

  const addRandomNumber = () => {
    setRandomNumArray([...randomNumArray, randomNum()])
  }

  const generateRandomNums = roundNumber => {
    let result = []
    if (roundNumber === 1) {
      result.push(randomNum())
    }
    if (roundNumber === 2) {
      result.push(randomNum(), randomNum())
    }
    if (roundNumber === 3) {
      result.push(randomNum(), randomNum(), randomNum())
    }
    if (roundNumber === 4) {
      result.push(randomNum(), randomNum(), randomNum(), randomNum())
    }
    if (roundNumber === 5) {
      result.push(randomNum(), randomNum(), randomNum(), randomNum(), randomNum())
    }
    return result;
  }

  const randomNum = () => {
    return Math.floor(Math.random() * 4)
  }

  return (
    <>
    <ScoreBoard roundCount={roundCount} startGame={startGame}/>
    <div className="gameboard-outer-container">
      <div className='center-circle'></div>
      <div className='top-section'>
        <div className={ redActive ? 'red-box red-active' : 'red-box' }></div>
        <div className={ yellowActive ? 'yellow-box yellow-active' : 'yellow-box'}></div>
      </div>
      <div className='bottom-section'>
        <div className={ greenActive ? 'green-box green-active' : 'green-box' }></div>
        <div className={ blueActive ? 'blue-box blue-active' : 'blue-box' }></div>
      </div>
    </div>
    </>
  );

}

export default GameBoard;
