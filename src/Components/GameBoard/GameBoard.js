import React, { useState } from 'react';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import './GameBoard.css';

let randomNumArray = []
let playerResponse = []
let playerClickCounter = 0

const GameBoard = () => {

  const [redActive, setRedActive] = useState(false);
  const [yellowActive, setYellowActive] = useState(false);
  const [greenActive, setGreenActive] = useState(false);
  const [blueActive, setBlueActive] = useState(false);

  const [roundCount, setRoundCount] = useState(1);
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
    setRoundCount(1)
    randomNumArray = []
    playerResponse = []
    playerClickCounter = 0
    setPlayerClickDisplay(0)
    randomNumArray.push(randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum())
    setMyOrYours('MY')
    setTurnText('TURN!')
    startRound1();
  }

  const validateAnswer = () => {
    // console.log('random num array: ', randomNumArray);
    // console.log('playerResponse: ', playerResponse);
    if (roundCount === 1 && playerResponse[0] === randomNumArray[0]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      setDisableButtons(true)
      playerResponse = []
      setTimeout(() => {
        startRound2();
      }, 1000)
      return
    }
    if (roundCount === 2 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      setDisableButtons(true)
      playerResponse = []
      setTimeout(() => {
        startRound3();
      }, 1000)
      return
    }
    if (roundCount === 3 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      setDisableButtons(true)
      playerResponse = []
      setTimeout(() => {
        startRound4();
      }, 1000)
      return
    }
    if (roundCount === 4 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2] && playerResponse[3] === randomNumArray[3]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      setDisableButtons(true)
      playerResponse = []
      setTimeout(() => {
        startRound5();
      }, 1000)
      return
    }
    if (roundCount === 5 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2] && playerResponse[3] === randomNumArray[3] && playerResponse[4] === randomNumArray[4]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      setDisableButtons(true)
      playerResponse = []
      setTimeout(() => {
        startRound6();
      }, 1000)
      return
    }
    if (roundCount === 6 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2] && playerResponse[3] === randomNumArray[3] && playerResponse[4] === randomNumArray[4] && playerResponse[5] === randomNumArray[5]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      setDisableButtons(true)
      playerResponse = []
      setTimeout(() => {
        startRound7();
      }, 1000)
      return
    }
    if (roundCount === 7 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2] && playerResponse[3] === randomNumArray[3] && playerResponse[4] === randomNumArray[4] && playerResponse[5] === randomNumArray[5] && playerResponse[6] === randomNumArray[6]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      setDisableButtons(true)
      playerResponse = []
      setTimeout(() => {
        startRound8();
      }, 1000)
      return
    }
    if (roundCount === 8 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2] && playerResponse[3] === randomNumArray[3] && playerResponse[4] === randomNumArray[4] && playerResponse[5] === randomNumArray[5] && playerResponse[6] === randomNumArray[6] && playerResponse[7] === randomNumArray[7]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      setDisableButtons(true)
      playerResponse = []
      setTimeout(() => {
        startRound9();
      }, 1000)
      return
    }
    if (roundCount === 9 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2] && playerResponse[3] === randomNumArray[3] && playerResponse[4] === randomNumArray[4] && playerResponse[5] === randomNumArray[5] && playerResponse[6] === randomNumArray[6] && playerResponse[7] === randomNumArray[7] && playerResponse[8] === randomNumArray[8]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      setDisableButtons(true)
      playerResponse = []
      setTimeout(() => {
        startRound10();
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

  const startRound2 = () => {
    increaseRoundCount();
    playerClickCounter = 0
    setPlayerClickDisplay(0)
    setMyOrYours('MY')
    setTurnText('TURN!')
    setTimeout(() => {
      colorKey[randomNumArray[0]](true)
    }, 800)
    setTimeout(() => {
      colorKey[randomNumArray[0]](false)
    }, 1600)
    setTimeout(() => {
      colorKey[randomNumArray[1]](true)
    }, 2400)
    setTimeout(() => {
      colorKey[randomNumArray[1]](false)
      setMyOrYours('YOUR')
      setDisableButtons(false)
    }, 3200)
  }

  const startRound3 = () => {
    increaseRoundCount();
    playerClickCounter = 0
    setPlayerClickDisplay(0)
    setMyOrYours('MY')
    setTurnText('TURN!')
    setTimeout(() => {
      colorKey[randomNumArray[0]](true)
    }, 800)
    setTimeout(() => {
      colorKey[randomNumArray[0]](false)
    }, 1600)
    setTimeout(() => {
      colorKey[randomNumArray[1]](true)
    }, 2400)
    setTimeout(() => {
      colorKey[randomNumArray[1]](false)
    }, 3200)
    setTimeout(() => {
      colorKey[randomNumArray[2]](true)
    }, 4000)
    setTimeout(() => {
      colorKey[randomNumArray[2]](false)
      setMyOrYours('YOUR')
      setDisableButtons(false)
    }, 4800)
  }

  const startRound4 = () => {
    increaseRoundCount();
    playerClickCounter = 0
    setPlayerClickDisplay(0)
    setMyOrYours('MY')
    setTurnText('TURN!')
    setTimeout(() => {
      colorKey[randomNumArray[0]](true)
    }, 800)
    setTimeout(() => {
      colorKey[randomNumArray[0]](false)
    }, 1600)
    setTimeout(() => {
      colorKey[randomNumArray[1]](true)
    }, 2400)
    setTimeout(() => {
      colorKey[randomNumArray[1]](false)
    }, 3200)
    setTimeout(() => {
      colorKey[randomNumArray[2]](true)
    }, 4000)
    setTimeout(() => {
      colorKey[randomNumArray[2]](false)
    }, 4800)
    setTimeout(() => {
      colorKey[randomNumArray[3]](true)
    }, 5600)
    setTimeout(() => {
      colorKey[randomNumArray[3]](false)
      setMyOrYours('YOUR')
      setDisableButtons(false)
    }, 6400)
  }

  const startRound5 = () => {
    increaseRoundCount();
    playerClickCounter = 0
    setPlayerClickDisplay(0)
    setMyOrYours('MY')
    setTurnText('TURN!')
    setTimeout(() => {
      colorKey[randomNumArray[0]](true)
    }, 800)
    setTimeout(() => {
      colorKey[randomNumArray[0]](false)
    }, 1600)
    setTimeout(() => {
      colorKey[randomNumArray[1]](true)
    }, 2400)
    setTimeout(() => {
      colorKey[randomNumArray[1]](false)
    }, 3200)
    setTimeout(() => {
      colorKey[randomNumArray[2]](true)
    }, 4000)
    setTimeout(() => {
      colorKey[randomNumArray[2]](false)
    }, 4800)
    setTimeout(() => {
      colorKey[randomNumArray[3]](true)
    }, 5600)
    setTimeout(() => {
      colorKey[randomNumArray[3]](false)
    }, 6400)
    setTimeout(() => {
      colorKey[randomNumArray[4]](true)
    }, 7200)
    setTimeout(() => {
      colorKey[randomNumArray[4]](false)
      setMyOrYours('YOUR')
      setDisableButtons(false)
    }, 8000)
  }

  const startRound6 = () => {
    increaseRoundCount();
    playerClickCounter = 0
    setPlayerClickDisplay(0)
    setMyOrYours('MY')
    setTurnText('TURN!')
    setTimeout(() => {
      colorKey[randomNumArray[0]](true)
    }, 800)
    setTimeout(() => {
      colorKey[randomNumArray[0]](false)
    }, 1600)
    setTimeout(() => {
      colorKey[randomNumArray[1]](true)
    }, 2400)
    setTimeout(() => {
      colorKey[randomNumArray[1]](false)
    }, 3200)
    setTimeout(() => {
      colorKey[randomNumArray[2]](true)
    }, 4000)
    setTimeout(() => {
      colorKey[randomNumArray[2]](false)
    }, 4800)
    setTimeout(() => {
      colorKey[randomNumArray[3]](true)
    }, 5600)
    setTimeout(() => {
      colorKey[randomNumArray[3]](false)
    }, 6400)
    setTimeout(() => {
      colorKey[randomNumArray[4]](true)
    }, 7200)
    setTimeout(() => {
      colorKey[randomNumArray[4]](false)
    }, 8000)
    setTimeout(() => {
      colorKey[randomNumArray[5]](true)
    }, 8800)
    setTimeout(() => {
      colorKey[randomNumArray[5]](false)
      setMyOrYours('YOUR')
      setDisableButtons(false)
    }, 9600)
  }

  const startRound7 = () => {
    increaseRoundCount();
    playerClickCounter = 0
    setPlayerClickDisplay(0)
    setMyOrYours('MY')
    setTurnText('TURN!')
    setTimeout(() => {
      colorKey[randomNumArray[0]](true)
    }, 800)
    setTimeout(() => {
      colorKey[randomNumArray[0]](false)
    }, 1600)
    setTimeout(() => {
      colorKey[randomNumArray[1]](true)
    }, 2400)
    setTimeout(() => {
      colorKey[randomNumArray[1]](false)
    }, 3200)
    setTimeout(() => {
      colorKey[randomNumArray[2]](true)
    }, 4000)
    setTimeout(() => {
      colorKey[randomNumArray[2]](false)
    }, 4800)
    setTimeout(() => {
      colorKey[randomNumArray[3]](true)
    }, 5600)
    setTimeout(() => {
      colorKey[randomNumArray[3]](false)
    }, 6400)
    setTimeout(() => {
      colorKey[randomNumArray[4]](true)
    }, 7200)
    setTimeout(() => {
      colorKey[randomNumArray[4]](false)
    }, 8000)
    setTimeout(() => {
      colorKey[randomNumArray[5]](true)
    }, 8800)
    setTimeout(() => {
      colorKey[randomNumArray[5]](false)
    }, 9600)
    setTimeout(() => {
      colorKey[randomNumArray[6]](true)
    }, 10400)
    setTimeout(() => {
      colorKey[randomNumArray[6]](false)
      setMyOrYours('YOUR')
      setDisableButtons(false)
    }, 11200)
  }

  const startRound8 = () => {
    increaseRoundCount();
    playerClickCounter = 0
    setPlayerClickDisplay(0)
    setMyOrYours('MY')
    setTurnText('TURN!')
    setTimeout(() => {
      colorKey[randomNumArray[0]](true)
    }, 800)
    setTimeout(() => {
      colorKey[randomNumArray[0]](false)
    }, 1600)
    setTimeout(() => {
      colorKey[randomNumArray[1]](true)
    }, 2400)
    setTimeout(() => {
      colorKey[randomNumArray[1]](false)
    }, 3200)
    setTimeout(() => {
      colorKey[randomNumArray[2]](true)
    }, 4000)
    setTimeout(() => {
      colorKey[randomNumArray[2]](false)
    }, 4800)
    setTimeout(() => {
      colorKey[randomNumArray[3]](true)
    }, 5600)
    setTimeout(() => {
      colorKey[randomNumArray[3]](false)
    }, 6400)
    setTimeout(() => {
      colorKey[randomNumArray[4]](true)
    }, 7200)
    setTimeout(() => {
      colorKey[randomNumArray[4]](false)
    }, 8000)
    setTimeout(() => {
      colorKey[randomNumArray[5]](true)
    }, 8800)
    setTimeout(() => {
      colorKey[randomNumArray[5]](false)
    }, 9600)
    setTimeout(() => {
      colorKey[randomNumArray[6]](true)
    }, 10400)
    setTimeout(() => {
      colorKey[randomNumArray[6]](false)
    }, 11200)
    setTimeout(() => {
      colorKey[randomNumArray[7]](true)
    }, 12000)
    setTimeout(() => {
      colorKey[randomNumArray[7]](false)
      setMyOrYours('YOUR')
      setDisableButtons(false)
    }, 12800)
  }

  const startRound9 = () => {
    increaseRoundCount();
    playerClickCounter = 0
    setPlayerClickDisplay(0)
    setMyOrYours('MY')
    setTurnText('TURN!')
    setTimeout(() => {
      colorKey[randomNumArray[0]](true)
    }, 800)
    setTimeout(() => {
      colorKey[randomNumArray[0]](false)
    }, 1600)
    setTimeout(() => {
      colorKey[randomNumArray[1]](true)
    }, 2400)
    setTimeout(() => {
      colorKey[randomNumArray[1]](false)
    }, 3200)
    setTimeout(() => {
      colorKey[randomNumArray[2]](true)
    }, 4000)
    setTimeout(() => {
      colorKey[randomNumArray[2]](false)
    }, 4800)
    setTimeout(() => {
      colorKey[randomNumArray[3]](true)
    }, 5600)
    setTimeout(() => {
      colorKey[randomNumArray[3]](false)
    }, 6400)
    setTimeout(() => {
      colorKey[randomNumArray[4]](true)
    }, 7200)
    setTimeout(() => {
      colorKey[randomNumArray[4]](false)
    }, 8000)
    setTimeout(() => {
      colorKey[randomNumArray[5]](true)
    }, 8800)
    setTimeout(() => {
      colorKey[randomNumArray[5]](false)
    }, 9600)
    setTimeout(() => {
      colorKey[randomNumArray[6]](true)
    }, 10400)
    setTimeout(() => {
      colorKey[randomNumArray[6]](false)
    }, 11200)
    setTimeout(() => {
      colorKey[randomNumArray[7]](true)
    }, 12000)
    setTimeout(() => {
      colorKey[randomNumArray[7]](false)
    }, 12800)
    setTimeout(() => {
      colorKey[randomNumArray[8]](true)
    }, 13600)
    setTimeout(() => {
      colorKey[randomNumArray[8]](false)
      setMyOrYours('YOUR')
      setDisableButtons(false)
    }, 14400)
  }

  const startRound10 = () => {
    increaseRoundCount();
    playerClickCounter = 0
    setPlayerClickDisplay(0)
    setMyOrYours('MY')
    setTurnText('TURN!')
    setTimeout(() => {
      colorKey[randomNumArray[0]](true)
    }, 800)
    setTimeout(() => {
      colorKey[randomNumArray[0]](false)
    }, 1600)
    setTimeout(() => {
      colorKey[randomNumArray[1]](true)
    }, 2400)
    setTimeout(() => {
      colorKey[randomNumArray[1]](false)
    }, 3200)
    setTimeout(() => {
      colorKey[randomNumArray[2]](true)
    }, 4000)
    setTimeout(() => {
      colorKey[randomNumArray[2]](false)
    }, 4800)
    setTimeout(() => {
      colorKey[randomNumArray[3]](true)
    }, 5600)
    setTimeout(() => {
      colorKey[randomNumArray[3]](false)
    }, 6400)
    setTimeout(() => {
      colorKey[randomNumArray[4]](true)
    }, 7200)
    setTimeout(() => {
      colorKey[randomNumArray[4]](false)
    }, 8000)
    setTimeout(() => {
      colorKey[randomNumArray[5]](true)
    }, 8800)
    setTimeout(() => {
      colorKey[randomNumArray[5]](false)
    }, 9600)
    setTimeout(() => {
      colorKey[randomNumArray[6]](true)
    }, 10400)
    setTimeout(() => {
      colorKey[randomNumArray[6]](false)
    }, 11200)
    setTimeout(() => {
      colorKey[randomNumArray[7]](true)
    }, 12000)
    setTimeout(() => {
      colorKey[randomNumArray[7]](false)
    }, 12800)
    setTimeout(() => {
      colorKey[randomNumArray[8]](true)
    }, 13600)
    setTimeout(() => {
      colorKey[randomNumArray[8]](false)
    }, 14400)
    setTimeout(() => {
      colorKey[randomNumArray[9]](true)
    }, 15200)
    setTimeout(() => {
      colorKey[randomNumArray[9]](false)
      setMyOrYours('YOUR')
      setDisableButtons(false)
    }, 16000)
  }

  const increaseRoundCount = () => {
    setRoundCount(roundCount + 1)
  }

  const randomNum = () => {
    return Math.floor(Math.random() * 4)
  }

  const handlePlayerResponse = colorNum => {
    playerResponse.push(colorNum)
    playerClickCounter++
    setPlayerClickDisplay(playerClickDisplay + 1)
    if (roundCount === 1 && playerClickCounter === 1) {
      validateAnswer();
    }
    if (roundCount === 2 && playerClickCounter === 2) {
      validateAnswer();
    }
    if (roundCount === 3 && playerClickCounter === 3) {
      validateAnswer();
    }
    if (roundCount === 4 && playerClickCounter === 4) {
      validateAnswer();
    }
    if (roundCount === 5 && playerClickCounter === 5) {
      validateAnswer();
    }
    if (roundCount === 6 && playerClickCounter === 6) {
      validateAnswer();
    }
    if (roundCount === 7 && playerClickCounter === 7) {
      validateAnswer();
    }
    if (roundCount === 8 && playerClickCounter === 8) {
      validateAnswer();
    }
    if (roundCount === 9 && playerClickCounter === 9) {
      validateAnswer();
    }
    if (roundCount === 10 && playerClickCounter === 10) {
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
