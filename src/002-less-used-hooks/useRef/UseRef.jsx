import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

    const [name, setName] = useState("")
    
    //use Ref
    const renderCount = useRef(1)

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <div className="">My Name is: {name}</div>
        <div className="">{renderCount.current}</div>
    </div>
  )
}

export default UseRef