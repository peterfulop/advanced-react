import { includeUpdatableUser } from './include-updatable-user';

export const UserInfoForm = includeUpdatableUser(
    ({ user, onChangeUser, onPostUser, onResetUser }) => {
        const { name, age } = user || {};
        return user ? (
            <>
                <label htmlFor="name">Name:</label>
                <input
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => onChangeUser({ name: e.target.value })}
                />
                <label htmlFor="age">Age:</label>
                <input
                    name="age"
                    type="number"
                    value={age}
                    onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
                />
                <button onClick={onResetUser}>Reset</button>
                <button onClick={onPostUser}>Save</button>
            </>
        ) : (
            <h3>loading...</h3>
        );
    },
    3
);
