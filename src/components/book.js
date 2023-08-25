import PropTypes from 'prop-types';
import '../styles/book.css';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/bookSlice';
import progressImg from '../assets/images/progressImg.png';

const Book = ({ item, id }) => {
  const dispatch = useDispatch();
  return (
    <li className="bookListItem">
      <div className="bookLeft">
        <p>{item.category}</p>
        <h2>{item.title}</h2>
        <p>{item.author}</p>
        <ul className="booksBtnList">
          <li><button type="button" className="bookBtn">Comment</button></li>
          <li><button type="button" className="bookBtn" onClick={() => dispatch(deleteBook(id))}>Delete</button></li>
          <li><button type="button" className="bookBtn">Edit</button></li>
        </ul>
      </div>
      <div className="booksRigth">
        <div className="progress">
          <img src={progressImg} alt="book progress" className="bookProgressIcon" />
          <div>
            <p className="percentage">64%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div>
          <hr className="bookLine" />
        </div>
        <div className="bookProgress">
          <p className="currentChapter">CURRENT CHAPTER</p>
          <p className="chapter">Chapter 17</p>
          <div className="updateProgress">
            <p className="updateProgressP">UPDATE PROGRESS</p>
          </div>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
