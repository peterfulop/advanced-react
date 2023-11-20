import React, { useRef } from 'react';
import { Input } from './custom-input';

const ImperativeHandle = () => {
    const inputRef = useRef();

    return (
        <>
            <Input type="text" ref={inputRef} />
            <button onClick={() => console.log(inputRef.current.value)}>Focus</button>
        </>
    );
};

export default ImperativeHandle;
