import React, { memo } from 'react';

const Component = ({ keyword }) => {
    // const init = performance.now();

    // while (init > performance.now() - 100) {}

    return (
        <>
            <h2>I am a slow component</h2>
            {keyword}
        </>
    );
};

export const HeavyComponent = memo(Component);
