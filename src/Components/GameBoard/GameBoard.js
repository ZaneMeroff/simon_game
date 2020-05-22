import React, { useState } from 'react';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import './GameBoard.css';

let randomNumArray = []
let playerResponse = []
let playerClickCounter = 0
let roundCount = 1

const GameBoard = () => {

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
    playerResponse = []
    playerClickCounter = 0
    setPlayerClickDisplay(0)
    setMyOrYours('MY')
    setTurnText('TURN!')
    startRound1();
  }

  const validateAnswer = () => {
    if (roundCount === 1 && playerResponse[0] === randomNumArray[0]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      setDisableButtons(true)
      playerResponse = []
      setTimeout(() => {
        startRound();
      }, 1000)
      return
    }
    if (roundCount === 2 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      setDisableButtons(true)
      playerResponse = []
      setTimeout(() => {
        startRound();
      }, 1000)
      return
    }
    if (roundCount === 3 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      setDisableButtons(true)
      playerResponse = []
      setTimeout(() => {
        startRound();
      }, 1000)
      return
    }
    if (roundCount === 4 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2] && playerResponse[3] === randomNumArray[3]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      setDisableButtons(true)
      playerResponse = []
      setTimeout(() => {
        startRound();
      }, 1000)
      return
    }
    if (roundCount === 5 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2] && playerResponse[3] === randomNumArray[3] && playerResponse[4] === randomNumArray[4]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      setDisableButtons(true)
      playerResponse = []
      setTimeout(() => {
        startRound();
      }, 1000)
      return
    }
    if (roundCount === 6 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2] && playerResponse[3] === randomNumArray[3] && playerResponse[4] === randomNumArray[4] && playerResponse[5] === randomNumArray[5]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      setDisableButtons(true)
      playerResponse = []
      setTimeout(() => {
        startRound();
      }, 1000)
      return
    }
    if (roundCount === 7 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2] && playerResponse[3] === randomNumArray[3] && playerResponse[4] === randomNumArray[4] && playerResponse[5] === randomNumArray[5] && playerResponse[6] === randomNumArray[6]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      setDisableButtons(true)
      playerResponse = []
      setTimeout(() => {
        startRound();
      }, 1000)
      return
    }
    if (roundCount === 8 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2] && playerResponse[3] === randomNumArray[3] && playerResponse[4] === randomNumArray[4] && playerResponse[5] === randomNumArray[5] && playerResponse[6] === randomNumArray[6] && playerResponse[7] === randomNumArray[7]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      setDisableButtons(true)
      playerResponse = []
      setTimeout(() => {
        startRound();
      }, 1000)
      return
    }
    if (roundCount === 9 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2] && playerResponse[3] === randomNumArray[3] && playerResponse[4] === randomNumArray[4] && playerResponse[5] === randomNumArray[5] && playerResponse[6] === randomNumArray[6] && playerResponse[7] === randomNumArray[7] && playerResponse[8] === randomNumArray[8]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      setDisableButtons(true)
      playerResponse = []
      setTimeout(() => {
        startRound();
      }, 1000)
      return
    }
    if (roundCount === 10 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2] && playerResponse[3] === randomNumArray[3] && playerResponse[4] === randomNumArray[4] && playerResponse[5] === randomNumArray[5] && playerResponse[6] === randomNumArray[6] && playerResponse[7] === randomNumArray[7] && playerResponse[8] === randomNumArray[8] && playerResponse[9] === randomNumArray[9]) {
      setMyOrYours('RIGHT!')
      playerResponse = []
      setDisableButtons(true)
      setTimeout(() => {
        setMyOrYours('YOU')
        setTurnText('WIN!')
      }, 1000)
      return
    } else {
      setMyOrYours('GAME')
      setTurnText('OVER!')
      setDisableButtons(true)
    }
  }

  const startRound1 = () => {
    setTimeout(() => {
      colorKey[randomNumArray[0]](true)
    }, 800)
    setTimeout(() => {
      colorKey[randomNumArray[0]](false)
      setMyOrYours('YOUR')
      setDisableButtons(false)
    }, 1600)
  }

  const startRound = () => {
    increaseRoundCount();
    playerClickCounter = 0
    setPlayerClickDisplay(0)
    setMyOrYours('MY')
    setTurnText('TURN!')
    let j = 0
    for (let i = 1; i <= (roundCount * 2); i++) {
      setTimeout(() => {
        if (i % 2 !== 0) {
          colorKey[randomNumArray[Math.floor(j)]](true)
        } else {
          colorKey[randomNumArray[Math.floor(j)]](false)
        }
        j += 0.5
        if (i === (roundCount * 2)) {
          setMyOrYours('YOUR')
          setDisableButtons(false)
        }
      }, i * 800 )
    }
  }

  const increaseRoundCount = () => {
    roundCount += 1
  }

  const generate10randomNumbers = () => {
    let randomArray = []
    for (let i = 0; i < 10; i++) {
      randomArray.push(Math.floor(Math.random() * 4))
    }
    return randomArray
  }

  const handlePlayerResponse = colorNum => {
    playerResponse.push(colorNum)
    playerClickCounter++
    setPlayerClickDisplay(playerClickDisplay + 1)
    if (roundCount === playerClickCounter) {
      validateAnswer();
    }
  }

  return (
    <>
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
    </>
  );

}

export default GameBoard;
