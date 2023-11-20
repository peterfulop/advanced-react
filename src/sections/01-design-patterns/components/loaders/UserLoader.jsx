import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserLoader = ({ userId, children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`/users/${userId}`);
            console.log(response);
            setUser(response.data);
        };
        fetchUser();
    }, [userId]);

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

export default UserLoader;
