import { useCallback, useRef, useState } from "react";

export default function useStateWithHistory(
                            defaultValue, 
                            {capacity = 10} = {}
                        ){
                    
                    const [value, setValue] = useState(defaultValue)
                    const historyRef = useRef([value])
                    const pointerRef = useRef(0)

                    // the main part of the hook
                    const set = useCallback (
                        v => {
                            const resolvedValue = typeof v === "function" ? v(value) : v

                            if (historyRef.current[pointerRef.current] !== resolvedValue){
                                if (pointerRef.current < historyRef.current.length -  1){
                                    historyRef.current.splice(pointerRef.current + 1)
                                }

                                historyRef.current.push(resolvedValue)

                                while (historyRef.current.length > capacity){
                                    historyRef.current.shift()
                                }

                                pointerRef.current = historyRef.current.length -  1
                            }

                            setValue(resolvedValue)
                        }, 
                        [capacity, value]
                    )

                    //decrease pointer value
                    const back = useCallback(() => {
                        if (pointerRef.current <= 0) return 
                        pointerRef.current --

                        setValue(historyRef.current[pointerRef.current])
                    }, [])

                    // increase pointer value
                    const forward = useCallback(() =>{
                        if (pointerRef.current >= historyRef.current.length - 1) return 
                        pointerRef.current ++

                        setValue(historyRef.current[pointerRef.current])
                    }, [])

                    // go to specific pointer index
                    const go = useCallback(index =>{
                        if(index < 0 || index >= historyRef.current.length - 1)
                        return pointerRef.current = index
                        setValue(historyRef.current[pointerRef.current])
                    }, [])

                    return [
                        value, set, {
                            history: historyRef.current,
                            pointer: pointerRef.current,
                            back,
                            forward,
                            go
                        }
                    ]
                }