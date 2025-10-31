// Store

import React, { createContext, useState } from "react";

export const MyContext = createContext()

// Provider
export default function ContextProvider({ children }) {

    const [tname, setTname] = useState('Hamza')
    const [count, setCount] = useState(0)

    function increment() {
        setCount((prev) => prev + 1)
    }

    function decrement() {
        setCount((prev) => prev - 1)
    }

    return <MyContext.Provider value={{tname, count, increment, decrement}}>
        {children}
    </MyContext.Provider>
}



