import { useState } from 'react';

import { styled } from 'styled-components';

const ModalBackground = styled('div')(() => ({
    position: 'absolute',
    left: 0,
    top: 0,
    overflow: 'auto',
    backgroundColor: '#000000070',
    width: '100%',
    height: '100%',
}));

const ModalContent = styled('div')(() => ({
    margin: '12% auto',
    padding: '24px',
    backgroundColor: 'white',
    width: '50%',
    borderRadius: 10,
    boxShadow: '1px 1px 5px black',
}));

const UncontrolledModal = ({ children }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(true)}>Show Modal</button>
            {show && (
                <ModalBackground onClick={() => setShow(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setShow(false)}>Close</button>
                        {children}
                    </ModalContent>
                </ModalBackground>
            )}
        </>
    );
};

export default UncontrolledModal;
