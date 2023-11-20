import { useRef } from 'react';
import { Input } from './custom-input';

export const ForwardingRefs = () => {
    const inputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
    };

    return (
        <form onSubmit={submitHandler} style={{ marginTop: '5rem' }}>
            <Input ref={inputRef} />
            <button type="submit">Submit</button>
        </form>
    );
};
