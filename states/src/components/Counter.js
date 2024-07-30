import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrease = () => {
    setCount(count - 1);
  }
  const increase = () => {
    setCount(1);
  }
  return (
    <div>
      <button onClick={decrease}>Decrease</button>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  )
}

export default Counter