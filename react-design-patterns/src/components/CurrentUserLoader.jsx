import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CurrentUserLoader = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            const response = await axios.get('/current-user');
            setUser(response.data);
        };

        fetchCurrentUser();
    }, []);

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.createElement(child.type, {
                        ...child.props,
                        user,
                    });
                }
                return child;
            })}
        </>
    );
};

export default CurrentUserLoader;
