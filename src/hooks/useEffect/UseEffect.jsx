import React, {useEffect, useState} from 'react'
//import uuid for unique key
import { v4 as uuidv4 } from 'uuid';

const UseEffect = () => {

    //use state
    const [resourceType, setResourceType] = useState("posts")
    const [item, setItem] = useState([])

    //use effect
    useEffect(() => {
        //get the data and dynamically set into state
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            //convert response as json object
            .then(response => response.json())
            //put the json object into setItem state
            .then(json => setItem(json))
    }, [resourceType])

  return (
    <>    
        <div>
            <button onClick={() => setResourceType("posts")}>Posts</button>
            <button onClick={() => setResourceType("users")}>Users</button>
            <button onClick={() => setResourceType("comments")}>Comments</button>
        </div>

        <div>
            <h1>
                {item.map((items) => {
                    return <pre key={uuidv4()}>{JSON.stringify(items)}</pre>
                })}
            </h1>
        </div>
    </>
  )
}

export default UseEffect