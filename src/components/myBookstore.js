import { useState } from 'react';
import MyBookList from './myBookList';
import AddBookForm from './addBook';

const Bookstore = () => {
  const [booksList, setBookList] = useState([
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
  const deleteBook = (id) => {
    setBookList([
      ...booksList.filter((el) => el.id !== id),
    ]);
  };
  const addBook = (title, author) => {
    const newTodo = {
      title,
      author,
      id: Date.now(),
    };
    setBookList([
      ...booksList, newTodo,
    ]);
  };
  return (
    <div>
      <AddBookForm addBook={addBook} />
      <MyBookList booksList={booksList} deleteFunc={deleteBook} />
    </div>
  );
};

export default Bookstore;
