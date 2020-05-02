import React from 'react';
import './ScoreBoard.css';

const ScoreBoard = props => {

  return (
    <div className="scoreboard-outer-container">
      <div className='round-moves-container'>
        <h3 className='round-display'>ROUND: {props.roundCount}</h3>
        <h3 className='round-display'>MOVES: {props.playerClickDisplay}/{props.roundCount}</h3>
      </div>
      <button onClick={props.startGame} className='new-game-button'>NEW GAME</button>
    </div>
  );

}

export default ScoreBoard;
