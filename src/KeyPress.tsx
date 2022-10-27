import React from 'react';
import useKeyPress from './useKeyPress';

function KeyPress() {
  const key = useKeyPress();

  return (
    <div>
      <h1>KeyPress</h1>
      <label>Key pressed: {key || 'N/A'}</label>
    </div>
  );
}

export default KeyPress;
