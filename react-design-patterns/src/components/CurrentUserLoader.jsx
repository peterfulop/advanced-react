import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CurrentUserLoader = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await axios.get('/current-user');
            setUser(res.data);
        })();
    }, []);

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { user });
                }
                return child;
            })}
        </>
    );
};

export default CurrentUserLoader;
