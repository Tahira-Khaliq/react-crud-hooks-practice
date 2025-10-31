import React, { Fragment, useEffect, useState } from 'react'
import catLogo from './assets/download.jpeg'
import Navbar from './components/Navbar';
function Index() {
    // useState
    // State management
    const [name, setName] = useState('M - Awais')
    const [isLoading, setIsloading] = useState(true);
    const [count, setCount] = useState(0)

    // useEffcet HOOK
    // Side Effect, DOM manipulation, API calls,

    useEffect(() => {
        console.log('Use Effcet-1 ', count);
        // alert('Details are fetched')
    }, [count])


    useEffect(() => {
        alert("Welcome")
    }, [])
    // Functions
    function handleIncrement() {
        // alert('Increment called')
        setCount(count + 1)
    }

    function handleDecrement() {
        // alert("Decrement called")
        setCount(count - 1)
    }
    return (
        <Fragment>
            <h1>{name}</h1>
            {/* <button onClick={() => setName('Ameer - H')}>Change-Name</button>
            <button onClick={() => setName('Ameer Hamza')}>Again-Change-Name</button> */}
            <h1 className=''>My Shopping Cart items:{count}</h1> <br />
            <Navbar />
            <button onClick={handleIncrement}>Add</button> <br /> <br />
            <button onClick={handleDecrement}>remove</button>

            <div className='' style={{ width: '100px', marginTop: '10px' }}>
                {/* self closed */}
                <br /> <hr /> <img src={catLogo} alt="" />

            </div>
        </Fragment>
    )
}

export default Index