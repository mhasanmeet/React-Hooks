import { useState } from "react";



// custom hook(function) for Local Storage use
export default function useLocalStorage(initialValue){
    const [value, setValue] = useState(initialValue)

    return [value, setValue]
}