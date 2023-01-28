import React, {useState} from 'react'

const BasicUseStateExample = () => {
    //const [count, setCount] = useState(4); //this will make slow our app if call this state several time
    const [count, setCount] = useState(() =>{
      return 4
    })

    const [theme,setTheme] = useState(() =>{
      return "Black"
    })

    /*
      object way declare state. But React recommend to split state into multiple state variables.
      
      const [things, setThings] = useState({var1: false, var2: false})

      const handleThings = () => {
        setThings ({...things, var1: true, var2: true})
      }
    */

    const decrementCount = () =>{
      setCount(count - 1)
    }

    const incrementCount = () =>{
      //setCount(count + 1) //wrong way
      setCount(preCount => preCount + 1) //right way, function version of state

      setTheme("blue");
    }

  return (
    <div className="basicState">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default BasicUseStateExample