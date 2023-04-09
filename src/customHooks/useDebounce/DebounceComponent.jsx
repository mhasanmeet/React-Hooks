import React from 'react'
import {useState} from "react";
import useDebounce from './useDebounce';

const DebounceComponent = () => {
    const [count, setCount] = useState(10)
    useDebounce(() => alert(count), 1000, [count])
  return (
    <div>
        <div className="">{count}</div>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}

export default DebounceComponent