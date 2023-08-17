import { useState } from 'react';
import MyBookList from './myBookList';

const Bookstore = () => {
  const [booksList] = useState([
    {
      title: 'stormligth',
      author: 'Brandon Sanderson',
      id: 1,
    },
    {
      title: 'Harry Potter',
      author: 'J.K. Rawling',
      id: 2,
    },
  ]);
  const deleteBook = () => {
    console.log('a book, wow');
  };
  return (
    <div>
      <MyBookList arr={booksList} deleteFunc={deleteBook} />
    </div>
  );
};

export default Bookstore;
