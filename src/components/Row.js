import React from 'react';
import Box from './Box.js';

const Row = ({ rowIndex, renderRowText, changeText, player }) => {
  const renderRow = renderRowText.map((el, index) => {
    return (
      <Box
        key={index}
        rowIndex={rowIndex}
        boxIndex={index}
        renderBoxText={el}
        onChange={changeText}
        player={player}
      />
    );
  });
  return <div className="row">{renderRow}</div>;
};

export default Row;
