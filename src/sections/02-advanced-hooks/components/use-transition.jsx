import React, { useState, useTransition } from 'react';
import Cover from './cover';
import Reviews from './reviews';
import Writer from './writer';
import { StyledButton } from './styled-elements';

const Transition = () => {
    const [section, setSection] = useState('Cover');
    const [isPending, startTransition] = useTransition();

    const sectionHandler = (sec) => {
        startTransition(() => {
            setSection(sec);
        });
    };

    return (
        <>
            <StyledButton onClick={() => sectionHandler('Cover')}>Book Cover</StyledButton>
            <StyledButton onClick={() => sectionHandler('Reviews')}>Book Reviews</StyledButton>
            <StyledButton onClick={() => sectionHandler('Writer')}>Book's Writer</StyledButton>

            {isPending && <p>loading...</p>}
            {!isPending && section === 'Cover' ? <Cover /> : section === 'Reviews' ? <Reviews /> : <Writer />}
        </>
    );
};

export default Transition;
