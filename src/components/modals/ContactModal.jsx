import React from "react";
import { createPortal } from "react-dom";

function ContactModal({ onClose }) {


    const modalStyle = {
        position: "fixed",
        top: "40%",
        left: "40%",
        background: "white",
        border: "1px solid black",
        padding: "20px",
        zIndex: 9999,
    }
    return (
        <div
            style={modalStyle}
        >
            <h2>I am a Contact Modal</h2>
            <h4>03047533611</h4>
            <button onClick={onClose}>Close</button>
        </div>
    );
    // return createPortal(
    //     <div
    //         style={modalStyle}
    //     >
    //         <h2>I am a Contact Modal with Portal</h2>
    //         <h4>03047533611</h4>
    //         <button onClick={onClose}>Close</button>
    //     </div>,
    //     document.body
    // );
}

export default ContactModal;