import React, { useEffect, useState } from 'react';

const DataSource = ({ getData = async () => {}, paramKey, children }) => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const data = await getData();
            setResource(data?.data || null);
        };
        fetchUser();
    }, [getData]);

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

export default DataSource;
