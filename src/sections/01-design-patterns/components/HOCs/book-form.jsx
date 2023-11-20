import { PARAM_KEY } from '../../constants';
import { includeUpdatableResource } from './include-updatable-resource';

export const BookInfoForm = includeUpdatableResource(
    ({ book, onChangeBook, onResetBook, onPostBook }) => {
        const { name, title, price } = book || {};
        return book ? (
            <>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => onChangeBook({ name: e.target.value })}
                />
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e) => onChangeBook({ title: e.target.value })}
                />
                <label htmlFor="age">Price:</label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    value={price}
                    onChange={(e) => onChangeBook({ price: e.target.value })}
                />
                <button onClick={onResetBook}>Reset</button>
                <button onClick={onPostBook}>Save</button>
            </>
        ) : (
            <h3>loading...</h3>
        );
    },
    '/books/3',
    PARAM_KEY.BOOK
);
