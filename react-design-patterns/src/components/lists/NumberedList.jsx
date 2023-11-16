import styled from 'styled-components';

const Wrapper = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
}));

const NumberedList = ({ items, parameterKey, ItemComponent }) => {
    return (
        <>
            {items.map((item, index) => (
                <Wrapper key={index}>
                    <h3>{index + 1}.</h3>
                    <ItemComponent {...{ [parameterKey]: item }} />
                </Wrapper>
            ))}
        </>
    );
};

export default NumberedList;
