import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import '../styles/bookList.css';
import { fetchBooks } from '../redux/books/bookSlice';

const MyBookList = () => {
  const { booksArr, status } = useSelector((store) => store.bookStore);
  console.log(booksArr);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  if (status === 'loading') {
    return (<p>{status}</p>
    );
  }
  if (status === 'succeeded') {
    // Object.keys(booksArr).forEach((key) => console.log(booksArr[key][0]));
    return (
      <>
        <ul className="booksList">
          {Object.keys(booksArr).map((key) => <Book key={key} item={booksArr[key][0]} />)}
        </ul>
      </>
    );
  }
  return (<p>Error</p>);
};

export default MyBookList;
// <ul className="booksList">
//   {booksArr.map((el) => <Book key={el.item_id} item={el} />)}
// </ul>

// {Object.keys(booksArr).forEach((oKey) => <Book key={oKey} item={booksArr[oKey][0]} />)}
