import React, { useId, useState } from 'react';

const UseId = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const id = useId();

    return (
        <div>
            <label htmlFor={`${id}-email`}>Email</label>
            <input
                id={`${id}-email`}
                type="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <label htmlFor={`${id}-name`}>Name</label>
            <input
                id={`${id}-name`}
                type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
        </div>
    );
};

export default UseId;
