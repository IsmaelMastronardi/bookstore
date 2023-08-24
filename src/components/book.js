import PropTypes from 'prop-types';
import '../styles/book.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({ item, id }) => {
  const dispatch = useDispatch();
  return (
    <li className="bookListItem">
      <p>{item.category}</p>
      <h2>{item.title}</h2>
      <p>{item.author}</p>
      <ul className="booksBtnList">
        <li><button type="button" className="bookBtn">Comment</button></li>
        <li><button type="button" className="bookBtn" onClick={() => dispatch(removeBook(id))}>Delete</button></li>
        <li><button type="button" className="bookBtn">Edit</button></li>
      </ul>
    </li>
  );
};

Book.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
