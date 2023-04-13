import React, { useId } from 'react'

const UseId = () => {
    const id = useId()

  return (
    <form>
        <div className="">
            <label htmlFor={`${id}-email`} >Email</label>
            <input type="email" name="email" id={`${id}-email`} />
        </div>

        <div className="">
            <label htmlFor={`${id}-password`}>PassWord</label>
            <input type="password" name="password" id={`${id}-password`} />
        </div>
    </form>
  )
}

export default UseId