import React, { createContext, useState } from "react";
import UseContext from "./hooks/useContext/UseContext";
import UseEffect from "./hooks/useEffect/UseEffect";
import UseId from "./hooks/useId/UseId";
import UseMemo from "./hooks/useMemo/UseMemo";
import UseRef from "./hooks/useRef/UseRef";
import BasicUseStateExample from "./hooks/useStateExample/BasicUseStateExample";
import WW from "./hooks/windowWidth/ww";

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
      {/* <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <UseContext/>
      </ThemeContext.Provider> */}

      {/* <UseRef/> */}

      {/* <UseMemo/> */}

      <UseId/>
    </div>
  )
}

export default App
