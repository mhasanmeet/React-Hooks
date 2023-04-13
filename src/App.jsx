import React, { createContext, useState } from "react";

// Primary Hooks
import UseState from "./001-primary-hooks/useState/UseState";
import UseEffect from "./001-primary-hooks/useEffect/UseEffect";
import UseContext from "./001-primary-hooks/useContext/UseContext";

// Less used hooks
import UseRef from "./002-less-used-hooks/useRef/UseRef";
import UseMemo from "./002-less-used-hooks/useMemo/UseMemo";

// Optional Hooks
import UseId from "./003-optional-hooks/useId/UseId";

//custom Hooks
import ToggleComponent from "./004-custom-Hooks/useToggle/ToggleComponent";
import TimeoutComponent from "./004-custom-Hooks/useTimeout/TimeoutComponent";
import DebounceComponent from "./004-custom-Hooks/useDebounce/DebounceComponent";
import UpdateEffectComponent from "./004-custom-Hooks/useUpdateEffect/UpdateEffectComponent";
import UseArrayComponent from "./004-custom-Hooks/useArray/UseArrayComponent";
import PreviousComponent from "./004-custom-Hooks/usePrevious/PreviousComponent";
import StateWithHistoryComponent from "./004-custom-Hooks/useStateWithHistory/StateWithHistoryComponent";

//use cases
import StopWatch from "./use-cases/stopWatch/StopWatch";
import WW from "./use-cases/windowWidth/ww";

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
      {/* <UseState/> */}

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
      {/* <PreviousComponent/> */}
      <StateWithHistoryComponent/>
      
    </div>
  )
}

export default App
