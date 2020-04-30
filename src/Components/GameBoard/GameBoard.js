import React, { Component } from 'react';
import './GameBoard.css';

class GameBoard extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="gameboard-outer-container">
        <div className='top-section'>
          <div className='red-box'>RED</div>
          <div className='yellow-box'>YELLOW</div>
        </div>
        <div className='bottom-section'>
          <div className='green-box'>GREEN</div>
          <div className='blue-box'>BLUE</div>
        </div>
      </div>
    );
  }
}

export default GameBoard;
