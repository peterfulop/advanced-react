import { useEffect, useState } from 'react';
import includeUser from '../components/HOCs/include-user';
import logProps from '../components/HOCs/log-props';
import { UserInfo } from '../components/info/user-info';
import axios from 'axios';
import { UserInfoForm } from '../components/HOCs/user-form';
import { BookInfoForm } from '../components/HOCs/book-form';

const UserInfoWrapper = logProps(UserInfo);
const UserInfoLoaderWrapper = includeUser(UserInfo, 1);

const TestUserWrapper = ({ Component, userId }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        (async () => {
            const response = await axios.get(`/users/${userId}`);
            setUser(response.data);
        })();
    }, [userId]);

    return <Component user={user} />;
};

const HOC = () => {
    return (
        <>
            <UserInfoWrapper test="test text" age={23} female={true} />
            <UserInfoLoaderWrapper />
            <TestUserWrapper Component={UserInfo} userId={2} />
            <UserInfoForm />
            <BookInfoForm />
        </>
    );
};

export default HOC;
