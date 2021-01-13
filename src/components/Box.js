import React, { useState } from 'react';

const Box = ({ rowIndex, boxIndex, renderBoxText, onChange, player }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="box">
      <button
        className="box ui button"
        onClick={() =>
          onChange(rowIndex, boxIndex, player, clicked, setClicked)
        }
      >
        {renderBoxText}
      </button>
    </div>
  );
};

export default Box;
