import { useState } from 'react';
import { createPortal } from 'react-dom';

const alertStyle = {
    position: 'absolute',
    top: 10,
    right: 10,
    translate: '-50%',
    backgroundColor: 'aquamarine',
    color: 'black',
    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
};

const Alert = ({ children, onClose, show }) => {
    if (!show) return;

    return createPortal(
        <div style={alertStyle} onClick={onClose}>
            {children}
        </div>,
        document.querySelector('#alert-holder')
    );
};

export const Portal = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Other Content</h1>
            <button onClick={() => setShow(!show)}>Show Message</button>
            <Alert show={show} onClose={() => setShow(false)}>
                A sample message to show.
                <br />
                Click it to close.
            </Alert>
        </div>
    );
};
