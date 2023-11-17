import { UserInfo } from '../components/info/user-info';
import { useFetchData } from '../hooks/fetch-data.hook';

export const CustomHooks = () => {
    const [user, loading, error] = useFetchData('/users/3');

    if (loading) {
        return <span>loading...</span>;
    }

    if (error && !loading) {
        return <p>{error.message}</p>;
    }

    return (
        <>
            <UserInfo user={user} />
        </>
    );
};
