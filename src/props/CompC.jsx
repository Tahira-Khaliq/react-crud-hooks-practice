import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

function CompC() {

    const { count, increment, decrement } = useContext(MyContext)
    return (
        <div style={{ background: 'blue' }}>
            <h1>Count:{count}</h1>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Remove</button>
        </div>
    )
}

export default CompC