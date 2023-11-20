import React, { useState } from 'react';
import Counter from './counter';

const ReactKeys = () => {
    const [changeShirts, setChangeShirts] = useState(false);
    return (
        <div>
            {changeShirts ? (
                <>
                    <span>Shirts counts: </span> <Counter key={2} />
                </>
            ) : (
                <>
                    <span>Shoes counts: </span> <Counter key={1} />
                </>
            )}
            <br />
            <input type="number" key={changeShirts ? 'shorts' : 'shoes'} />
            <br />
            <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
        </div>
    );
};

export default ReactKeys;
