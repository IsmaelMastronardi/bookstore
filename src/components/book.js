import PropTypes from 'prop-types';

const Book = ({ item, deleteFunc }) => (
  <li>
    <input placeholder={item.title} />
    <button type="button" onClick={deleteFunc}>Delete</button>
  </li>
);

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  deleteFunc: PropTypes.func.isRequired,
};

export default Book;
