import React, { memo } from 'react';

function ChildOne({ onClick }) {
    console.log('ChildOne Component rendered');

    return (
        <div>
            <h1>ChildOne</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
                aliquid aliquam tempore eos, accusantium, quaerat necessitatibus
                aspernatur ex facilis expedita porro quis. Eveniet alias sint debitis
                earum, perferendis vel error?
            </p>
            <button onClick={onClick}>Click Child</button>
        </div>
    );
}

export default memo(ChildOne);
