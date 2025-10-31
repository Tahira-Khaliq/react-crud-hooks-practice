import React, { useState, useCallback } from "react";
import ChildOne from './ChildOne'
export default function Parent() {
    const [count, setCount] = useState(0);

    console.log("Parent rendered");

    // Function is memoized (stable reference)
    const handleClick = useCallback(() => {
        setCount(c => c + 1);
    }, []);


    return (
        <>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={handleClick}>+ Add from Parent</button>
            </div>
            <ChildOne onClick={handleClick} />
        </>
    );
}
