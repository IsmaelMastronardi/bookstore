import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import '../styles/bookList.css';
import { fetchBooks } from '../redux/books/bookSlice';

const MyBookList = () => {
  const { booksArr } = useSelector((store) => store.bookStore);
  const dispatch = useDispatch();
  dispatch(fetchBooks());
  return (
    <ul className="booksList">
      {booksArr.map((el) => <Book key={el.item_id} item={el} />)}
    </ul>
  );
};

export default MyBookList;
