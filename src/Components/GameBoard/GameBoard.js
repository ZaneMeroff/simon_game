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
    randomNumArray.push(randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum(), randomNum())
    setMyOrYours('MY')
    setTurnText('TURN!')
    startRound1();
  }

  const validateAnswer = () => {
    console.log('random num array: ', randomNumArray);
    console.log('playerResponse: ', playerResponse);
    if (roundCount === 1 && playerResponse[0] === randomNumArray[0]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      increaseRoundCount();
      playerResponse = []
      setTimeout(() => {
        startRound2();
      }, 1000)
      return
    }
    if (roundCount === 2 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      increaseRoundCount();
      playerResponse = []
      setTimeout(() => {
        startRound3();
      }, 1000)
      return
    }
    if (roundCount === 3 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      increaseRoundCount();
      playerResponse = []
      setTimeout(() => {
        startRound4();
      }, 1000)
      return
    }
    if (roundCount === 4 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2] && playerResponse[3] === randomNumArray[3]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      increaseRoundCount();
      playerResponse = []
      setTimeout(() => {
        startRound5();
      }, 1000)
      return
    }
    if (roundCount === 5 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2] && playerResponse[3] === randomNumArray[3] && playerResponse[4] === randomNumArray[4]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      increaseRoundCount();
      playerResponse = []
      setTimeout(() => {
        startRound6();
      }, 1000)
      return
    }
    if (roundCount === 6 && playerResponse[0] === randomNumArray[0] && playerResponse[1] === randomNumArray[1] && playerResponse[2] === randomNumArray[2] && playerResponse[3] === randomNumArray[3] && playerResponse[4] === randomNumArray[4] && playerResponse[5] === randomNumArray[5]) {
      setMyOrYours('RIGHT!')
      setTurnText('')
      increaseRoundCount();
      playerResponse = []
      setTimeout(() => {
        startRound7();
      }, 1000)
      return
    } else {
      setMyOrYours('GAME')
      setTurnText('OVER!')
    }
  }

  const startRound1 = () => {
    if (roundCount === 1) {
      setTimeout(() => {
        colorKey[randomNumArray[0]](true)
      }, 1000)
      setTimeout(() => {
        colorKey[randomNumArray[0]](false)
        setMyOrYours('YOUR')
      }, 2000)
    }
  }

  const startRound2 = () => {
    setMyOrYours('MY')
    setTurnText('TURN!')
    setTimeout(() => {
      colorKey[randomNumArray[0]](true)
    }, 1000)
    setTimeout(() => {
      colorKey[randomNumArray[0]](false)
    }, 2000)
    setTimeout(() => {
      colorKey[randomNumArray[1]](true)
    }, 3000)
    setTimeout(() => {
      colorKey[randomNumArray[1]](false)
      setMyOrYours('YOUR')
    }, 4000)
  }

  const startRound3 = () => {
    setMyOrYours('MY')
    setTurnText('TURN!')
    setTimeout(() => {
      colorKey[randomNumArray[0]](true)
    }, 1000)
    setTimeout(() => {
      colorKey[randomNumArray[0]](false)
    }, 2000)
    setTimeout(() => {
      colorKey[randomNumArray[1]](true)
    }, 3000)
    setTimeout(() => {
      colorKey[randomNumArray[1]](false)
    }, 4000)
    setTimeout(() => {
      colorKey[randomNumArray[2]](true)
    }, 5000)
    setTimeout(() => {
      colorKey[randomNumArray[2]](false)
      setMyOrYours('YOUR')
    }, 6000)
  }

  const startRound4 = () => {
    setMyOrYours('MY')
    setTurnText('TURN!')
    setTimeout(() => {
      colorKey[randomNumArray[0]](true)
    }, 1000)
    setTimeout(() => {
      colorKey[randomNumArray[0]](false)
    }, 2000)
    setTimeout(() => {
      colorKey[randomNumArray[1]](true)
    }, 3000)
    setTimeout(() => {
      colorKey[randomNumArray[1]](false)
    }, 4000)
    setTimeout(() => {
      colorKey[randomNumArray[2]](true)
    }, 5000)
    setTimeout(() => {
      colorKey[randomNumArray[2]](false)
    }, 6000)
    setTimeout(() => {
      colorKey[randomNumArray[3]](true)
    }, 7000)
    setTimeout(() => {
      colorKey[randomNumArray[3]](false)
      setMyOrYours('YOUR')
    }, 8000)
  }

  const startRound5 = () => {
    setMyOrYours('MY')
    setTurnText('TURN!')
    setTimeout(() => {
      colorKey[randomNumArray[0]](true)
    }, 1000)
    setTimeout(() => {
      colorKey[randomNumArray[0]](false)
    }, 2000)
    setTimeout(() => {
      colorKey[randomNumArray[1]](true)
    }, 3000)
    setTimeout(() => {
      colorKey[randomNumArray[1]](false)
    }, 4000)
    setTimeout(() => {
      colorKey[randomNumArray[2]](true)
    }, 5000)
    setTimeout(() => {
      colorKey[randomNumArray[2]](false)
    }, 6000)
    setTimeout(() => {
      colorKey[randomNumArray[3]](true)
    }, 7000)
    setTimeout(() => {
      colorKey[randomNumArray[3]](false)
    }, 8000)
    setTimeout(() => {
      colorKey[randomNumArray[4]](true)
    }, 9000)
    setTimeout(() => {
      colorKey[randomNumArray[4]](false)
      setMyOrYours('YOUR')
    }, 10000)
  }

  const startRound6 = () => {
    setMyOrYours('MY')
    setTurnText('TURN!')
    setTimeout(() => {
      colorKey[randomNumArray[0]](true)
    }, 1000)
    setTimeout(() => {
      colorKey[randomNumArray[0]](false)
    }, 2000)
    setTimeout(() => {
      colorKey[randomNumArray[1]](true)
    }, 3000)
    setTimeout(() => {
      colorKey[randomNumArray[1]](false)
    }, 4000)
    setTimeout(() => {
      colorKey[randomNumArray[2]](true)
    }, 5000)
    setTimeout(() => {
      colorKey[randomNumArray[2]](false)
    }, 6000)
    setTimeout(() => {
      colorKey[randomNumArray[3]](true)
    }, 7000)
    setTimeout(() => {
      colorKey[randomNumArray[3]](false)
    }, 8000)
    setTimeout(() => {
      colorKey[randomNumArray[4]](true)
    }, 9000)
    setTimeout(() => {
      colorKey[randomNumArray[4]](false)
    }, 10000)
    setTimeout(() => {
      colorKey[randomNumArray[5]](true)
    }, 11000)
    setTimeout(() => {
      colorKey[randomNumArray[5]](false)
      setMyOrYours('YOUR')
    }, 12000)
  }

  const startRound7 = () => {
    setMyOrYours('MY')
    setTurnText('TURN!')
    setTimeout(() => {
      colorKey[randomNumArray[0]](true)
    }, 1000)
    setTimeout(() => {
      colorKey[randomNumArray[0]](false)
    }, 2000)
    setTimeout(() => {
      colorKey[randomNumArray[1]](true)
    }, 3000)
    setTimeout(() => {
      colorKey[randomNumArray[1]](false)
    }, 4000)
    setTimeout(() => {
      colorKey[randomNumArray[2]](true)
    }, 5000)
    setTimeout(() => {
      colorKey[randomNumArray[2]](false)
    }, 6000)
    setTimeout(() => {
      colorKey[randomNumArray[3]](true)
    }, 7000)
    setTimeout(() => {
      colorKey[randomNumArray[3]](false)
    }, 8000)
    setTimeout(() => {
      colorKey[randomNumArray[4]](true)
    }, 9000)
    setTimeout(() => {
      colorKey[randomNumArray[4]](false)
    }, 10000)
    setTimeout(() => {
      colorKey[randomNumArray[5]](true)
    }, 11000)
    setTimeout(() => {
      colorKey[randomNumArray[5]](false)
    }, 12000)
    setTimeout(() => {
      colorKey[randomNumArray[6]](true)
    }, 13000)
    setTimeout(() => {
      colorKey[randomNumArray[6]](false)
      setMyOrYours('YOUR')
    }, 14000)
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
    if (roundCount === 1 && playerClickCounter === 1) {
      validateAnswer();
    }
    if (roundCount === 2 && playerClickCounter === 3) {
      validateAnswer();
    }
    if (roundCount === 3 && playerClickCounter === 6) {
      validateAnswer();
    }
    if (roundCount === 4 && playerClickCounter === 10) {
      validateAnswer();
    }
    if (roundCount === 5 && playerClickCounter === 15) {
      validateAnswer();
    }
    if (roundCount === 6 && playerClickCounter === 21) {
      validateAnswer();
    }
    if (roundCount === 7 && playerClickCounter === 28) {
      validateAnswer();
    }
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
