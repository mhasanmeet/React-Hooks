## Custom Hooks

* Custom hooks are just function, a function for hook, something like this;

```js

import { useState } from "react";

// custom hook(function) for Local Storage use
export default function useHook(initialValue){
    const [value, setValue] = useState(initialValue)

    // custom code here...

    return [value, setValue]
}
```

then import this function hook into component to use as a custom hook

* they start with **use** at the beginning of their name as convention


## Read

* [custom hook](https://blog.webdevsimplified.com/2019-11/how-to-write-custom-hooks/)