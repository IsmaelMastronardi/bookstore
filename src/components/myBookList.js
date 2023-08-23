import { useSelector } from 'react-redux';
import Book from './book';
import '../styles/bookList.css';

const MyBookList = () => {
  const { booksArr } = useSelector((store) => store.bookStore);
  return (
    <ul className="booksList">
      {booksArr.map((el) => <Book key={el.item_id} item={el} />)}
    </ul>
  );
};

export default MyBookList;
