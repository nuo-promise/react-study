import { useCallback, useState } from 'react'

function useCounter(step: number) {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + step);
  }, [count, step])

  const decrement = useCallback(() => {
    setCount(count - step);
  }, [count, step])

  const reset = useCallback(() => setCount(0), [])

  return { count, increment, decrement, reset }
}

export default useCounter;
