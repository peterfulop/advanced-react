import { useCallback, useRef, useState } from 'react';

export const CallbackAsRef = () => {
    const [showInput, setShowInput] = useState(false);

    const realInputRef = useRef();

    const inputRef = useCallback((input) => {
        realInputRef.current = input;
        if (!input) return;
        input.focus();
    }, []);

    return (
        <>
            <button onClick={() => setShowInput((s) => !s)}>Switch</button>
            {showInput && <input type="text" ref={inputRef} />}
        </>
    );
};
