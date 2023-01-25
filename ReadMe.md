## React Hooks

## useState Hooks structure

![img](./public/useState.jpg)

## React Hooks rules
* Hooks can not implement into class component, only into function component

```js

import React, {useState} from "react";

function App() {
    const [state, setState] = useState(false)

    return (
        <>
            code here
        </>
    )
} 
```
* Hooks must be execute into same sequential order 

```js
function App() {
    useState()
    useState()
    useState()

    return (
        <>
            code here
        </>
    )
} 

```
* hooks should not be inside into control statement, loops or anything else

```js
function App() {
    
    //should not be
    if(condition){
        useState()
    }

    return (
        <>
            code here
        </>
    )
} 

```

