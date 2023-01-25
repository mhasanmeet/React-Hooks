import React, { useEffect, useState } from 'react'

const WW = () => {

    //use state
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    //use effect
    useEffect(() => {
        window.addEventListener("resize", handleResize)

        // remove event listener
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })

  return (
    <div>{windowWidth}</div>
  )
}

export default WW