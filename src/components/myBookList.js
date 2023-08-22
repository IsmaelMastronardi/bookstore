/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import Book from './book';
import '../styles/bookList.css';

function MyBookList() {
  const { booksArr } = useSelector((store) => store.bookStore);
  return (
    <ul className="booksList">
      {booksArr.map((el) => <Book key={el.id} item={el} />)}
    </ul>
  );
}

export default MyBookList;
