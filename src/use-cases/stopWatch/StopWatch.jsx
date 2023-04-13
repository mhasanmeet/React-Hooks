import React, { useEffect, useRef, useState } from 'react'
import "./sw.scss";

const StopWatch = () => {

    // count state
    const [count, setCount] = useState(0)
    //timer reference state
    const timerIdRef = useRef(0)

    //Start the timer
    const startHandler = () => {
        if (timerIdRef.current){
            return;
        }

        timerIdRef.current = setInterval(() => setCount(counting => counting + 1), 1000)
    }

    //stop the timer
    const stopHandler = () => {
        clearInterval(timerIdRef.current)
        timerIdRef.current = 0;
    }

    //reset the timer
    const resetHandler = () =>{
        setCount(0)
    }

    //reset the timer
    const resetStopHandler = () =>{
        clearInterval(timerIdRef.current)
        timerIdRef.current = 0;
        setCount(0)
    }

    //useEffect State
    useEffect(() => {
        return () => clearInterval(timerIdRef.current)
    }, [])

  return (

    <div className="stopWatch">
        <div className="time">
            Time: {count}s
        </div>

        <div className="buttons">
            <button onClick={startHandler}>Start</button>
            <button onClick={stopHandler}>Stop</button>
            <button onClick={resetHandler}>Reset</button>
            <button onClick={resetStopHandler}>Reset & Stop</button>
        </div>
    </div>
  )
}

export default StopWatch