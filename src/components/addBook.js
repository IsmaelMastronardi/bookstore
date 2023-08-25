import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createBook } from '../redux/books/bookSlice';
import '../styles/form.css';

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
    <section className="formSection">
      <h3 className="addNewBook">ADD NEW BOOK</h3>
      <form className="form">
        <input className="titleInput" placeholder="Add Title" value={title} onChange={handleChange} />
        <input className="authorInput" placeholder="Add Author" value={author} onChange={handleChange2} />
        <button
          className="addBookBtn"
          type="button"
          onClick={() => {
            const newBook = {
              item_id: `${Date.now()}a`,
              title,
              author,
              category: 'fantasy',
            };
            dispatch(createBook(newBook));
          }}
        >
          ADD BOOK
        </button>
      </form>

    </section>
  );
};

export default AddBookForm;
