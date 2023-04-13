import React, { useContext } from 'react'
import {ThemeContext} from "../../App";

const UseContext = () => {

  const darkTheme = useContext(ThemeContext)

  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    fontSize: "2rem"
  }
    
  return (
    <div style={themeStyle}>
      Theme
    </div>
  )
}

export default UseContext