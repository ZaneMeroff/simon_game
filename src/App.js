import React from 'react';
import GameBoard from './Components/GameBoard/GameBoard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1 className='game-title-text'>Mr. Simon</h1>
      <GameBoard />
    </div>
  );
}

export default App;
