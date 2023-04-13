import {useState} from 'react'
import usePrevious from './usePrevious'

const PreviousComponent = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Mahmudul")
    const previousCount = usePrevious(count)

  return (
    <div>
        <div className="">
            {count} - {previousCount}
        </div>

        <div className="">{name}</div>

        <button onClick={() => setCount(currentCount => currentCount + 1)}>Increment</button>

        <button onClick={() => setName("Hasan")}>Change Name</button>
    </div>
  )
}

export default PreviousComponent