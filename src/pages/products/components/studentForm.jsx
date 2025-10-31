import React, { useState } from 'react'

function StudentForm() {
    // STyle
    const inpputStyle = {
        paddingInline: '20px',
        paddingBlock: "15px",
        borderRadius: "20px",
        // backgroundColor: "lightGrey",
        border: "none",
        outline: "none",
    }

    const formStyle = {
        width: "50%",
        paddingBlock: '40px',
        display: 'flex', flexDirection: 'column', gap: '20px'
    }

    const body = {
        background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        height: '100vh'
    }

    // STyle END

    // JS


    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})

    function formValidation() {
        let newError = {}
        console.log('validation console');
        if (!fname || fname.length < 3) {
            newError.fname = "Please enter correct name here..."
        }
        if (!lname) {
            newError.lname = "Please enter your last name.."
        }
        if (!age || age <= 10) {
            newError.age = "You are not eligible..."
        }
        setError(newError)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('consoled');
        // if (formValidation()) {
        //     console.log('Form submitted');
        // }
        console.log('after consoled');
    }

    return (
        <>
            <div style={body}>
                <input type="text" id="username" name="username"  title="Username must be 5-15 alphanumeric characters." required>
                </input>
                <h2 style={{ color: "", fontSize: '50px' }}>Student Registeration form</h2>
                <form onSubmit={handleSubmit} style={formStyle}>
                    <label htmlFor="">Enter your first name:</label>
                    <input type="text" style={inpputStyle} pattern="[A-Za-z0-9]{5,15}" value={fname} onInput={(e) => setFname(e.target.value)} placeholder='First Name' title='Please enter your first name' />
                    {error.fname && <strong style={{ color: 'blue' }}>{error.fname}</strong>}

                    <label htmlFor="">Enter your last name:</label>
                    <input type="text" style={inpputStyle} value={lname} onInput={(hamza) => setLname(hamza.target.value)} placeholder="Last Name" title='Please enter your last name' />
                    {error.lname && <strong style={{ color: 'blue' }}>{error.lname}</strong>}


                    <label htmlFor="">Enter your age:</label>
                    <input type="number" style={inpputStyle} value={age} onInput={(e) => setAge(e.target.value)} placeholder='Age' />
                    {error.age && <strong style={{ color: 'blue' }}>{error.age}</strong>}

                    <label htmlFor="">Enter your password</label>
                    <input type="password" style={inpputStyle} value={password} onInput={(e) => setPassword(e.target.value)} placeholder='Password' />
                    {error.password && <strong style={{ color: 'blue' }}>{error.password}</strong>}

                    <br />
                    <button type='submit' style={{ fontSize: '25px', background: 'blue', border: 'none', borderRadius: '20px', paddingBlock: '10px', color: 'whitesmoke' }}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default StudentForm;