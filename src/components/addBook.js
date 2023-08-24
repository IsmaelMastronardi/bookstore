import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createBook } from '../redux/books/bookSlice';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleChange2 = (e) => {
    setAuthor(e.target.value);
  };
  return (
    <form>
      <input placeholder="Add Title" value={title} onChange={handleChange} />
      <input placeholder="Add Author" value={author} onChange={handleChange2} />
      <button
        type="button"
        onClick={() => {
          const newBook = {
            item_id: `${Date.now()}a`,
            title,
            author,
            category: 'Medieval Fantasy',
          };
          dispatch(createBook(newBook));
        }}
      >
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;
