import { forwardRef, useImperativeHandle, useState } from 'react';

const CustomInput = (props, ref) => {
    const [value, setValue] = useState("");
    useImperativeHandle(ref, () => {
        return {
            value,
        };
    });

    return (
        <input {...props} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    );
};

export const Input = forwardRef(CustomInput);
