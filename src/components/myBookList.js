import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import '../styles/bookList.css';
import { fetchBooks } from '../redux/books/bookSlice';

const MyBookList = () => {
  const { booksArr, status, error } = useSelector((store) => store.bookStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  if (status === 'error') {
    return (<p>{error}</p>
    );
  }
  if (status === 'succeeded' || status === 'createError') {
    return (
      <>
        <p>{error}</p>
        <ul className="booksList">
          {Object.keys(booksArr).map((key) => <Book key={key} item={booksArr[key][0]} id={key} />)}
        </ul>
      </>
    );
  }
  return (
    <p>Loading</p>
  );
};

export default MyBookList;
