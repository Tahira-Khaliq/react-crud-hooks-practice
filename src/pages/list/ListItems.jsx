import React, { useState } from 'react'

function ListItems() {
    const [tablePrice, setTablePrice] = useState([100, 200, 300, 400, 500])


    function handleRemove(indexId) {
        return () => {
            const filteredData = tablePrice.filter((item, index) => index !== indexId)
            setTablePrice([...filteredData])
        }
    }
    return (
        <>
            <h1>List</h1>
            <br />
            {tablePrice.map((item, index) => {
                return <div key={item}>
                    <input type="text" />
                    <button onClick={handleRemove(index)}>Remove{item}</button>
                </div>
            })}
        </>
    )
}

export default ListItems