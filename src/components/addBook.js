import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createBook } from '../redux/books/bookSlice';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleChange2 = (e) => {
    setAuthor(e.target.value);
  };
  const handleChange3 = (e) => {
    setCategory(e.target.value);
  };
  return (
    <form>
      <input placeholder="Add Title" value={title} onChange={handleChange} />
      <input placeholder="Add Author" value={author} onChange={handleChange2} />
      <input placeholder="Add Category" value={category} onChange={handleChange3} />
      <button
        type="button"
        onClick={() => {
          const newBook = {
            item_id: `${Date.now()}a`,
            title,
            author,
            category,
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
