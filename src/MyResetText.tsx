import React, { useState } from 'react';

function useResetState(val) {
  const [value, setValue] = useState(val);
  const resetValue = () => {
    setValue(val);
    return val;
  };
  return [value, setValue, resetValue];
}

export default function MyResetText() {
  const [val, setVal, resetVal] = useResetState('Hello World');
  const onChange = (e) => {
    setVal(e.target.value);
  };
  const onClick = () => {
    resetVal();
  };

  return (
    <div>
      <input value={val} onChange={onChange}></input>
      <button onClick={onClick}>重置</button>
    </div>
  );
}
