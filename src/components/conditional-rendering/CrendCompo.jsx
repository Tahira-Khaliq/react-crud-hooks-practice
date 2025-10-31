import React, { useState } from 'react'

function CrendCompo() {

    const [order, setOrder] = useState(false)
    const [customerName, setCustomerName] = useState("Shafia")

    const [studName, setStudName] = useState("Tayaba")
    const [come, setCome] = useState(false)
    // Ternary OPE
    // syntax = condition ? true(statements) : false(stements)

    // AND OPE
    // syntax = condition && true(statement)

    return (
        <div>
            <h1>Ye Crend wala ha</h1>
            {order ? <><h1>{customerName} your order is placed be prepared for yum yum yum...</h1></>
                : <><h1 style={{ color: 'red' }}>Please place an order first....</h1></>}
            {/*  AND Condition*/}
            {come && <><h1>{studName} is comming.....</h1></>}

        </div>
    )
}

export default CrendCompo