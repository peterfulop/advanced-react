import styled from 'styled-components';

const Wrapper = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
}));

const NumberedList = ({ items, sourceKey, ItemComponent }) => {
    return (
        <>
            {items.map((item, index) => (
                <Wrapper>
                    <h3>{index + 1}.</h3>
                    <ItemComponent key={index} {...{ [sourceKey]: item }} />
                </Wrapper>
            ))}
        </>
    );
};

export default NumberedList;
