import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const LocalStorageComponent = () => {
    const [name, setName] = useState("Mahmudul")

  return (
    <div>
        <input type="text"  value={name} onChange={e => setName(e.target.value)}/>
    </div>
  )
}

export default LocalStorageComponent