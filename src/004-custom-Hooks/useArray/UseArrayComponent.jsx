import React from 'react'
import useArray from "./useArray";
import "./usearray.scss";

const UseArrayComponent = () => {
    const {array, set, push, remove, filter, update, clear} = useArray([1, 2, 3, 4, 5, 6])

  return (
    <div className='main'>
        <div>{array.join(", ")}</div>

        <div className="buttons">
            <button onClick={() => push(7)}>Add 7</button>
            <button onClick={() => update(1, 9)}>Change number two element to 9</button>
            <button onClick={() => remove(1)}>Remove number two element</button>
            <button onClick={() => filter(n => n < 3)}>Keep Number less that 4</button>
            <button onClick={() => set([1, 2])}>Set to 1, 2</button>
            <button onClick={clear}>Clear</button>
        </div>
    </div>
  )
}

export default UseArrayComponent