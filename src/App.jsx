import React, { createContext, useState } from "react";
import UseContext from "./components/useContext/UseContext";
import UseEffect from "./components/useEffect/UseEffect";
import BasicUseStateExample from "./components/useStateExample/BasicUseStateExample";
import WW from "./components/windowWidth/ww";

//create context
export const ThemeContext = createContext();

function App() {

  //theme state
  const [darkTheme, setDarkTheme] = useState(true)

  //dark theme toggle
  function toggleTheme(){
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <div className="app">
      {/* <BasicUseStateExample/> */}

      {/* <UseEffect/> */}

      {/* widow width */}
      {/* <WW/> */}

      {/* Here all child component will effected with dark theme context */}
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <UseContext/>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
