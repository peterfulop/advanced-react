import { styled } from 'styled-components';

const ModalBackground = styled('div')(() => ({
    position: 'absolute',
    left: 0,
    top: 0,
    overflow: 'auto',
    backgroundColor: '#0000008f',
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

const ControlledModal = ({ onClose, shouldDisplay, children }) => {
    return (
        <>
            {shouldDisplay && (
                <ModalBackground onClick={onClose}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <button onClick={onClose}>Close</button>
                        {children}
                    </ModalContent>
                </ModalBackground>
            )}
        </>
    );
};

export default ControlledModal;
