import React, { Component } from 'react';
import './ScoreBoard.css';

class ScoreBoard extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="scoreboard-outer-container">
        <h3>ROUND: 1</h3>
      </div>
    );
  }
}

export default ScoreBoard;
