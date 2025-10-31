import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { homeStudentData } from '../helpers/dummyData'
import useCustomHook from '../../customHooks/index'
import HomeChild from './HomeChild';

function Home() {
    // const naviate = useNavigate()
    // console.log('Home component called');
    // // const { count, handleIncrement, handleDecrement } = useCustomHook()
    // // function handleGo() {
    // //     // naviate('/support')
    // // }

    // const [count, setCount] = useState(0)
    // const handleClickMe = useCallback(() => {
    //     console.log('Hanlde clicke me called');
    //     setCount(1)
    // }, [])


    // function handleClickMe() {
    //     console.log('Hanlde clicke me called');
    //     setCount(count + 1)
    // }

function handleClickMe() {
    alert("Go to Categories to set your Record")
}


    return (
        <>
        <section style={{textAlign:"center", height:"40vh", padding:"150px", }}>
  <h1 style={{}}>Manage Your Records Easily</h1>
  <p style={{color:"gray", fontSize:"20px"}}>Create, Read, Update, and Delete data with a clean interface.</p>
  <button href="/create"  style={{backgroundColor:"blue" , color:"white" , borderRadius:"50px" ,cursor:"pointer" ,   listStyle:"none" ,width:"150px", padding:"20px",border:"none", marginTop:"10px"}}onClick={handleClickMe} >Add New Record</button>
</section>

            {/* <h1>Home</h1>
            <h2>Count: {count}</h2>
            <button onClick={handleClickMe}>Click me..</button>
            <br /> */}

            {/* <HomeChild func={handleClickMe} /> */}
        </>
    )
}

export default Home