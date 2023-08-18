import { useState } from 'react';
import MyBookList from './myBookList';
import AddBookForm from './addBook';

const Bookstore = () => {
  const [booksList] = useState([
    {
      title: 'stormligth',
      author: 'Brandon Sanderson',
      genre: 'Fantasy',
      id: 1,
    },
    {
      title: 'Harry Potter',
      author: 'J.K. Rawling',
      genre: 'Fantasy',
      id: 2,
    },
  ]);
  return (
    <div>
      <MyBookList booksList={booksList} />
      <AddBookForm />
    </div>
  );
};

export default Bookstore;
