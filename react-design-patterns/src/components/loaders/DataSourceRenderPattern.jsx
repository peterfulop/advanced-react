import { useEffect, useState } from 'react';

const DataSourceRenderPattern = ({ getData = async () => {}, render }) => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const data = await getData();
            setResource(data?.data || null);
        };
        fetchUser();
    }, [getData]);

    return render(resource);
};

export default DataSourceRenderPattern;
