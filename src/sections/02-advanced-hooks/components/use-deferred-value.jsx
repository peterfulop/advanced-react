import React, { useDeferredValue, useState } from 'react';
import { HeavyComponent } from './HeavyComponent';

const DeferredValue = () => {
    const [keyword, setKeyword] = useState('');

    const defferedKeyword = useDeferredValue(keyword);

    return (
        <>
            <input
                value={keyword}
                onChange={(e) => {
                    setKeyword(e.target.value);
                }}
            />
            <HeavyComponent keyword={defferedKeyword} />
        </>
    );
};

export default DeferredValue;
