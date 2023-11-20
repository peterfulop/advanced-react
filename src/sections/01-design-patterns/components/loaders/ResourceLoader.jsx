import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResourceLoader = ({ resourceUrl, paramKey, children }) => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(resourceUrl);
            setResource(response.data);
        };
        fetchUser();
    }, [resourceUrl]);

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.createElement(child.type, {
                        ...child.props,
                        ...{ [paramKey]: resource },
                    });
                }
                return child;
            })}
        </>
    );
};

export default ResourceLoader;
