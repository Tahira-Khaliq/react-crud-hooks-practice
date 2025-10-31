import { useState } from "react"

function useCustomHook() {
    const [count, setCount] = useState(0)
    const [countData, setContData] = useState([])

    function handleIncrement() {
        console.log('Handle increment called');
        setCount((prev) => prev + 1)
    }

    function handleDecrement() {
        console.log('Handle decrement clicked');
        setCount((prev) => prev - 1)
    }


    return { count, handleDecrement, handleIncrement }

}

export default useCustomHook