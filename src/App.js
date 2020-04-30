import React from 'react';
import ScoreBoard from './Components/ScoreBoard/ScoreBoard';
import GameBoard from './Components/GameBoard/GameBoard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>The Game of Simon 🎮</h1>
      <ScoreBoard />
      <GameBoard />
    </div>
  );
}

export default App;
