import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Book from './book';
import '../styles/bookList.css';
import { fetchBooks } from '../redux/books/bookSlice';

const MyBookList = () => {
  const { booksArr, status } = useSelector((store) => store.bookStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  if (status === 'loading') {
    return (<p>{status}</p>
    );
  }
  if (status === 'succeeded') {
    return (
      // <ul className="booksList">
      //   {booksArr.map((el) => <Book key={el.item_id} item={el} />)}
      // </ul>
      Object.keys(booksArr).forEach((key) => console.log(booksArr[key]))
    );
  }
  return (<p>aaaaaa</p>);
};

export default MyBookList;
// <ul className="booksList">
//   {booksArr.map((el) => <Book key={el.item_id} item={el} />)}
// </ul>
