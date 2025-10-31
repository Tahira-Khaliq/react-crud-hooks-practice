import React, { useContext } from 'react'
import { MyContext } from '../MyContext'

function CounterContext() {

    const { tname, count } = useContext(MyContext)
    return (
        <div>CounterContext

            <h1>Count is:{count}</h1>

            <br />
            <h3>Teacher name is:{tname}</h3>
        </div>
    )
}

export default CounterContext