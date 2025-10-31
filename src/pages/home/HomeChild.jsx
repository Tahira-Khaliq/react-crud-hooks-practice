import React, { memo } from 'react'

function HomeChild({func}) {
    console.log('Home child called');
    return (
        <div style={{ fontSize: '30px', backgroundColor: 'lightcoral' }}>HomeChild
        
        <button onClick={func}>Child</button></div>
    )
}

export default memo(HomeChild)