import { forwardRef } from 'react';

const CustomInput = (props, ref) => {
    return <input ref={ref} {...props} />;
};

export const Input = forwardRef(CustomInput);
