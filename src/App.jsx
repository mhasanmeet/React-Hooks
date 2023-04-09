import React, { createContext, useState } from "react";
import UseContext from "./hooks/useContext/UseContext";
import UseEffect from "./hooks/useEffect/UseEffect";
import UseId from "./hooks/useId/UseId";
import UseMemo from "./hooks/useMemo/UseMemo";
import UseRef from "./hooks/useRef/UseRef";
import BasicUseStateExample from "./hooks/useStateExample/BasicUseStateExample";

//use cases
import StopWatch from "./useCases/stopWatch/StopWatch";
import WW from "./useCases/windowWidth/ww";

//custom Hooks
import ToggleComponent from "./customHooks/useToggle/toggleComponent";
import TimeoutComponent from "./customHooks/useTimeout/TimeoutComponent";
import DebounceComponent from "./customHooks/useDebounce/DebounceComponent";


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

      {/* Here all child component will effected with dark theme context */}
      {/* <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <UseContext/>
      </ThemeContext.Provider> */}

      {/* <UseRef/> */}

      {/* <UseMemo/> */}

      {/* <UseId/> */}

      {/* Custom Hooks */}

      {/* useCases */}
      {/* widow width */}
      {/* <WW/> */}
      {/* <StopWatch/> */}

      {/* custom hooks */}
      {/* <ToggleComponent/> */}
      {/* <TimeoutComponent/> */}
      <DebounceComponent/>
      
    </div>
  )
}

export default App
