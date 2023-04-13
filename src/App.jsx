import React, { createContext, useState } from "react";
import UseState from "./hooks/useState/UseState";
import UseContext from "./hooks/useContext/UseContext";
import UseEffect from "./hooks/useEffect/UseEffect";
import UseId from "./hooks/useId/UseId";
import UseMemo from "./hooks/useMemo/UseMemo";
import UseRef from "./hooks/useRef/UseRef";

//use cases
import StopWatch from "./useCases/stopWatch/StopWatch";
import WW from "./useCases/windowWidth/ww";

//custom Hooks
import ToggleComponent from "./customHooks/useToggle/toggleComponent";
import TimeoutComponent from "./customHooks/useTimeout/TimeoutComponent";
import DebounceComponent from "./customHooks/useDebounce/DebounceComponent";
import UpdateEffectComponent from "./customHooks/useUpdateEffect/UpdateEffectComponent";
import UseArrayComponent from "./customHooks/useArray/UseArrayComponent";


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
      <UseState/>

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
      {/* <DebounceComponent/> */}
      {/* <UpdateEffectComponent/> */}
      {/* <UseArrayComponent/> */}
      
    </div>
  )
}

export default App
