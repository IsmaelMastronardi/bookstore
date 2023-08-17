import PropTypes from 'prop-types';
import Book from './book';

function MyBookList({ booksList, deleteFunc }) {
  return (
    <ul>
      {booksList.map((el) => <Book key={el.id} item={el} deleteFunc={deleteFunc} />)}
    </ul>
  );
}

MyBookList.propTypes = {
  booksList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  deleteFunc: PropTypes.func.isRequired,
};

export default MyBookList;
