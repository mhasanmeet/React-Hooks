import {useState} from 'react'
import useStateWithHistory from "./useStateWithHistory"

const StateWithHistoryComponent = () => {
    const [count, setCount, {history, pointer, back, forward, go}] = useStateWithHistory(1)
    const [name, setName] = useState("Mahmudul")

  return (
    <div>
        <div className="">End value: {count}</div>
        <div className="">Total Array: {history.join(", ")}</div>
        <div className="">Pointer Number - {pointer}</div>
        <div className="">A name: <b>{name}</b>, which is not affect of the upper values</div>
        <button onClick={() => setCount(currentCount => currentCount * 2)}>Double</button>
        <button onClick={() => setCount(currentCount => currentCount + 1)}>Increment</button>
        <button onClick={back}>Back</button>
        <button onClick={forward}>Forward</button>
        <button onClick={() => go(2)}>Go To Index 2</button>
        <button onClick={() => setName("Hasan")}>Change Name</button>
    </div>
  )
}

export default StateWithHistoryComponent