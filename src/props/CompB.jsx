import React from 'react'
import CompC from './CompC';

function CompB(prop) {
    console.log(prop);
    const { teacherName='', teacherContact } = prop
    return (
        <>
            <div style={{ background: 'red' }}>
                <h1>Dashboard user name:{teacherName}</h1>
                <h3>Dashboard Contact:{teacherContact}</h3>
            </div>

            {/* <CompC   /> */}
            
            </>

    )
}

export default CompB