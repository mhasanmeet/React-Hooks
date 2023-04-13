import React from 'react'
import {useState} from "react"
import useTimeout from './useTimeout'

const TimeoutComponent = () => {
    const [count, setCount] = useState(10)
    const {reset, clear} = useTimeout(() => setCount(0), 1000)
  
return (
    <div>
        <div>{count}</div>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
        <button onClick={clear}>Clear Timeout</button>
        <button onClick={reset}>Reset Timeout</button>
    </div>
  )
}

export default TimeoutComponent