import React from 'react'
import useCounter from './useCounter'

type myCounterProps = {
  title: string,
  step: number
};

const MyCounter: React.FC<myCounterProps> = (props) => {
  const { title, step } = props;
  const { count, increment, decrement, reset } = useCounter(step);
  return (
    <div>
      <p>MyCounter: {title}</p>
      <button onClick={increment}>增加 {count} </button>
      <button onClick={decrement}>减少 {count} </button>
      <button onClick={reset} >重置 {count} </button>
    </div>
  )
}

export default MyCounter;
