import PropTypes from 'prop-types';
import '../styles/book.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <li className="bookListItem">
      <p>{item.genre}</p>
      <h2>{item.title}</h2>
      <p>{item.author}</p>
      <ul className="booksBtnList">
        <li><button type="button" className="bookBtn">Comment</button></li>
        <li><button type="button" className="bookBtn" onClick={() => dispatch(removeBook(item.id))}>Delete</button></li>
        <li><button type="button" className="bookBtn">Edit</button></li>
      </ul>
    </li>
  );
};

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Book;
