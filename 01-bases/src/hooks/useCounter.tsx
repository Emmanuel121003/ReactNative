import { useState } from "react"

export const useCounter = () => {
    const [count, setState] = useState(0)

    const increaseBy = ( value: number) => {
        setState( prev => prev + value )
    };
    return {
        count, increaseBy
    }



}