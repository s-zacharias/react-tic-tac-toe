import React from 'react';
import Board from './Board';
import '../styles.css';

const App = () => {
  return (
    <div className="game">
      <h1 className="ui header">Let's Play Tic Tac Toe!</h1>
      <Board />
    </div>
  );
};

export default App;
