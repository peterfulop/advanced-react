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
                <Wrapper>
                    <h3>{index + 1}.</h3>
                    <ItemComponent key={index} {...{ [parameterKey]: item }} />
                </Wrapper>
            ))}
        </>
    );
};

export default NumberedList;
