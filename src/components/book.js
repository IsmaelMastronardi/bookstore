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
        <p className="category normal customBlack">{item.category}</p>
        <h2 className="title fontRoboto normal customBlack">{item.title}</h2>
        <p className="author fontRoboto normal">{item.author}</p>
        <ul className="booksBtnList">
          <li><button type="button" className="bookBtn normal">Comments</button></li>
          <div className="line" />
          <li><button type="button" className="bookBtn fontRoboto" onClick={() => dispatch(deleteBook(id))}>Delete</button></li>
          <div className="line" />
          <li><button type="button" className="bookBtn">Edit</button></li>
        </ul>
      </div>
      <div className="booksRigth">
        <div className="progress">
          <img src={progressImg} alt="book progress" className="bookProgressIcon" />
          <div>
            <p className="percentage normal customBlack">64%</p>
            <p className="completed normal customBlack">Completed</p>
          </div>
        </div>
        <div>
          <hr className="bookLine" />
        </div>
        <div className="lineB" />
        <div className="bookProgress">
          <p className="currentChapter fontRoboto normal customBlack">CURRENT CHAPTER</p>
          <p className="chapter fontRoboto normal customBlack">Chapter 17</p>
          <button className="updateProgress fontRoboto normal" type="button">
            UPDATE PROGRESS
          </button>
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
