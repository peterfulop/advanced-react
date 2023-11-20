import axios from 'axios';
import { useEffect, useState } from 'react';

export const useCurrentUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            const response = await axios.get('/current-user');
            setUser(response.data);
        };

        fetchCurrentUser();
    }, []);

    return user;
};
