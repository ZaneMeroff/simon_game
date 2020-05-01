import React from 'react';
import './ScoreBoard.css';

const ScoreBoard = props => {

  return (
    <div className="scoreboard-outer-container">
      <h3 className='round-display'>ROUND: {props.roundCount}</h3>
      <button className='new-game-button'>NEW GAME</button>
    </div>
  );

}

export default ScoreBoard;
