import React, { useState } from 'react';

const Box = ({ rowIndex, boxIndex, renderBoxText, onChange, player }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className="box ui button"
      onClick={() => onChange(rowIndex, boxIndex, player, clicked, setClicked)}
    >
      {renderBoxText}
    </button>
  );
};

export default Box;
