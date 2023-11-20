import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchData = (resourceUrl) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [resource, setResource] = useState(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            setError(null);
            try {
                setLoading(true);
                const response = await axios.get(resourceUrl);
                if (response.data) {
                    setResource(response.data);
                    setLoading(false);
                } else {
                    throw new Error('Data not found!');
                }
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        };

        fetchCurrentUser();
    }, [resourceUrl]);

    return [resource, loading, error];
};
