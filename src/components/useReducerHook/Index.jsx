import React, { useReducer } from 'react'

// const initialState = 

// Reducer function
function xyz(state, action) {
  const { type, payload } = action

  switch (type) {
    case "SET_FNAME":
      return { ...state, fname: payload }
    case "SET_LNAME":
      return { ...state, lname: payload }
    case "SET_EMAIL":
      return { ...state, email: payload }
    case "RESET":
      return initialState
    default:
      return state
  }
}

function Index() {
  const [form, setForm] = useReducer(xyz, {
    fname: '',
    lname: '',
    email: ''
  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Form submitted:', form)
    // setForm({ type: "RESET" })
  }

  return (
    <>
      <h1>Student Form:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          value={form.fname}
          onInput={(e) => setForm({ type: "SET_FNAME", payload: e.target.value })}
        />
        <br /><br />

        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          value={form.lname}
          onInput={(e) => setForm({ type: "SET_LNAME", payload: e.target.value })}
        />
        <br /><br />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={form.email}
          onInput={(e) => setForm({ type: "SET_EMAIL", payload: e.target.value })}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Index
