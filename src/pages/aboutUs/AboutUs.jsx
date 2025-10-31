import React, { useState } from 'react'
import ContactModal from '../../components/modals/contactModal'

function AboutUs() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative", padding: "20px",   textAlign:"center"}}>
      <h1>About Us</h1>
      <button onClick={() => setShow(true)}>Open Modal</button>
      {show && <ContactModal onClose={() => setShow(false)} />}
    </div>
  )
}

export default AboutUs