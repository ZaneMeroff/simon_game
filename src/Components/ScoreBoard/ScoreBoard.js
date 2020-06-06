import React from 'react';
import './ScoreBoard.css';

export const ScoreBoard = props => {

  return (
    <div className="scoreboard-outer-container">
      <div className='round-moves-container'>
        <h3 className='round-display'>ROUND: {props.roundCount}</h3>
        <h3 className='round-display'>MOVES: {props.playerClickDisplay}/{props.roundCount}</h3>
      </div>
      <div className='score-board-button-container'>
        <button aria-label='start game' onClick={props.startGame} className='game-button'>{props.randomNumArray.length !== 0 ? 'NEW GAME' : 'START GAME'}</button>
        <button aria-label='toggle view rules' onClick={props.onViewRulesClick} className='game-button'>{props.rulesVisible ? 'HIDE RULES' : 'VIEW RULES'}</button>
      </div>
    </div>
  );

}
