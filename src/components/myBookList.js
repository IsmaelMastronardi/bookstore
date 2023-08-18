/* eslint-disable max-len */
import PropTypes from 'prop-types';
import Book from './book';
import '../styles/bookList.css';

function MyBookList({ booksList }) {
  return (
    <ul className="booksList">
      {booksList.map((el) => <Book key={el.id} item={el} />)}
    </ul>
  );
}

MyBookList.propTypes = {
  booksList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default MyBookList;
