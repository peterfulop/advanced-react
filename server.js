const express = require('express');

const app = express();

app.use(express.json());

let currentUser = {
    name: 'Sarah Waters',
    age: 55,
    country: 'United Kingdom',
    books: ['Fingersmith', 'The Night Watch'],
};

let users = [
    {
        id: 1,
        name: 'Sarah Waters',
        age: 55,
        country: 'United Kingdom',
        books: ['Fingersmith', 'The Night Watch'],
    },
    {
        id: 2,
        name: 'Haruki Murakami',
        age: 71,
        country: 'Japan',
        books: ['Norwegian Wood', 'Kafka on the Shore'],
    },
    {
        id: 3,
        name: 'Chimamanda Ngozi Adichie',
        age: 43,
        country: 'Nigeria',
        books: ['Half of a Yellow Sun', 'Americanah'],
    },
];

let books = [
    {
        id: 1,
        name: 'To Kill a Mockingbird',
        pages: 281,
        title: 'Harper Lee',
        price: 12.99,
    },
    {
        id: 2,
        name: 'The Catcher in the Rye',
        pages: 224,
        title: 'J.D. Salinger',
        price: 9.99,
    },
    {
        id: 3,
        name: 'The Little Prince',
        pages: 85,
        title: 'Antoine de Saint-Exupéry',
        price: 7.99,
    },
];

app.get('/current-user', (req, res) => res.json(currentUser));

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    return res.json(users.find((user) => user.id === parseInt(id, 10)));
});

app.get('/users', (req, res) => res.json(users));

app.post('/users/:id', (req, res) => {
    const { id } = req.params;
    const { user: editedUser } = req.body;
    users = users.map((user) => (user.id === parseInt(id, 10) ? editedUser : user));
    return res.json(users.find((user) => user.id === parseInt(id, 10)));
});

app.get('/books', (req, res) => res.json(books));

app.get('/books/:id', (req, res) => {
    const { id } = req.params;
    return res.json(books.find((book) => book.id === parseInt(id, 10)));
});

app.post('/books/:id', (req, res) => {
    const { id } = req.params;
    const { book: editedBook } = req.body;
    books = books.map((book) => (book.id === parseInt(id, 10) ? editedBook : book));
    return res.json(books.find((book) => book.id === parseInt(id, 10)));
});

let SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => console.log(`Server is listening on port: ${SERVER_PORT}`));
