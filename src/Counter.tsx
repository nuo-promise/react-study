import React, { useState } from 'react';
import Header from './Header'
import Child from './Child'

const Counter: React.FC = () => {

  // 初始化状态值
  const [count, setCount] = useState<number>(0);

  // 定义获取子组件数据的方法.
  const getChildCount = (val: number) => {
    setCount(val);
  }

  //本组件执行方法.
  function countAddHandle() {
    return setCount(count + 1 > 50 ? 0 : count + 1);
  }

  function countDelHandle() {
    return setCount(count - 1 <= 0 ? 0 : count - 1);
  }

  return (
    <div>
      <p>父组件向子组件传递数据:</p>
      <Header name={'yandex'}></Header>
      <br />
      <p>子组件向父组件传递数据:</p>
      <Child childCount={getChildCount} parentCount={count} ></Child>
      <p>当前数值: {count}</p>
      <button onClick={countAddHandle}>+</button>
      <br />
      <button onClick={countDelHandle}>-</button>
    </div>
  );
}

export default Counter
