import React, { useState } from 'react';

type childProps = {
  childCount: (val: number) => void;
  parentCount: number;
};

const Child: React.FC<childProps> = (props) => {
  const { childCount, parentCount } = props;
  const [count, setCount] = useState<number>(0);

  const countHandle = (val: number) => {
    setCount(val);
    childCount(val);
  };

  return (
    <div>
      <p>子组件</p>
      <p>数字: {count}</p>
      <p>父组件数字: {parentCount}</p>
      <button onClick={() => countHandle(count + 1)}>数字增加</button>
    </div>
  );
};

export default Child;
