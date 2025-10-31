import React, { useState } from 'react'
import CompB from './CompB'
import CompC from './CompC'

function CompA() {
    const [tname, setTname] = useState("Meer ")
    const [cnum, setCnum] = useState(8754387654)
    const [abc, setAbc] = useState('ABCD')

    return (
        <>
            {/* <div style={{ background: 'lightBlue' }}>
                <h1>My name is:{tname}</h1>
                <br />
                <h3>My contact:{cnum}</h3>
            </div> */}
            {/* Child */}
            {/* <CompB teacherName={tname} teacherContact={cnum} /> */}
        </>
    )
}

export default CompA