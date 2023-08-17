import PropTypes from 'prop-types';
import { useState } from 'react';

const AddBookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeB = (e) => {
    setAuthor(e.target.value);
  };
  return (
    <form>
      <input placeholder="Add Title" onChange={handleChange} />
      <input placeholder="Add Author" onChange={handleChangeB} />
      <button type="button" onClick={() => addBook(title, author)}>Add Book</button>
    </form>
  );
};

AddBookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default AddBookForm;
