import { PARAM_KEY } from '../../constants';
import { includeUpdatableResource } from './include-updatable-resource';

export const UserInfoForm = includeUpdatableResource(
    ({ user, onChangeUser, onPostUser, onResetUser }) => {
        const { name, age } = user || {};
        return user ? (
            <>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => onChangeUser({ name: e.target.value })}
                />
                <label htmlFor="age">Age:</label>
                <input
                    id="age"
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
    '/users/3',
    PARAM_KEY.USER
);
