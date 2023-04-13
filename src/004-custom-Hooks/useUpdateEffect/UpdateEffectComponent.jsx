import {useState} from 'react'
import useUpdateEffect from './useUpdateEffect'

const updateEffectComponent = () => {
  const [count, setCount] = useState(10)
  useUpdateEffect(() => alert(count), [count])

  return (
    <div className="">
      <div className="">{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}

export default updateEffectComponent