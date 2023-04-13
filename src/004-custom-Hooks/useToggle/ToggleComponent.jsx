import React from 'react'
import useToggle from "./useToggle";
import "./toggle.scss";

const toggleComponent = () => {
    const [value, toggleValue] = useToggle(false)

  return (
    <div className="toggle">
        <div className="value">{value.toString()}</div>
        
        <div className="buttons">
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={() => toggleValue(true)}>True</button>
            <button onClick={() => toggleValue(false)}>False</button>
        </div>
    </div>
  )
}

export default toggleComponent