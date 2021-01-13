import React, { useState, useEffect } from 'react';
import Row from './Row.js';

const Board = () => {
  const [renderText, setRenderText] = useState([
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-'],
  ]);

  const [player, setPlayer] = useState('Player 1');
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const checkForWinner = () => {
      if (
        (renderText[0][0] === renderText[1][1] &&
          renderText[1][1] === renderText[2][2]) ||
        (renderText[0][2] === renderText[1][1] &&
          renderText[1][1] === renderText[2][0])
      ) {
        if (renderText[1][1] === 'X') {
          setWinner('Player 1');
        } else if (renderText[1][1] === 'O') {
          setWinner('Player 2');
        }
      } else {
        for (let i = 0; i < 3; i++) {
          if (
            renderText[i][0] === renderText[i][1] &&
            renderText[i][1] === renderText[i][2]
          ) {
            if (renderText[i][0] === 'X') {
              setWinner('Player 1');
            } else if (renderText[i][0] === 'O') {
              setWinner('Player 2');
            }
          } else if (
            renderText[0][i] === renderText[1][i] &&
            renderText[1][i] === renderText[2][i]
          ) {
            if (renderText[0][i] === 'X') {
              setWinner('Player 1');
            } else if (renderText[0][i] === 'O') {
              setWinner('Player 2');
            }
          }
        }
      }
    };
    if (winner === null) {
      checkForWinner();
    }
  }, [renderText]);

  const renderWinner = () => {
    if (winner) {
      return (
        <div className="game-over">
          <h3 className="ui header">{winner} wins!</h3>
          <button
            className="ui button"
            onClick={() => window.location.reload(false)}
          >
            Play again?
          </button>
        </div>
      );
    }
  };

  const changeText = (rowIndex, boxIndex, player, clicked, setClicked) => {
    if (winner === null) {
      if (clicked === false) {
        const newText = [];
        const newRow = [];
        const editRow = renderText[rowIndex];

        renderText.map((el, i) => {
          if (i !== rowIndex) {
            newText.push(el);
          } else {
            editRow.map((el, i) => {
              if (i !== boxIndex) {
                newRow.push(el);
              } else {
                if (player === 'Player 1') {
                  newRow.push('X');
                } else if (player === 'Player 2') {
                  newRow.push('O');
                }
              }
            });
            newText.push(newRow);
          }
        });

        setRenderText(newText);
        if (player === 'Player 1') {
          setPlayer('Player 2');
        } else if (player === 'Player 2') {
          setPlayer('Player 1');
        }
      }
      setClicked(true);
    }
  };

  const renderBoard = renderText.map((el, index) => {
    return (
      <Row
        key={index}
        rowIndex={index}
        renderRowText={el}
        setRenderRowText={setRenderText}
        changeText={changeText}
        player={player}
        winner={winner}
      />
    );
  });

  return (
    <div className="board">
      {renderWinner()}
      {renderBoard}
    </div>
  );
};

export default Board;
