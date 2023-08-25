import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/navbar.css';
import Bookstore from './components/myBookstore';
import Categories from './components/categories';
import user from './assets/images/user.png';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="innerNavbar">
          <div className="navbarLeft">
            <h1 className="navbarTitle">Bookstore CMS</h1>
            <ul className="navbarList">
              <li>
                <Link to="/">BOOKS</Link>
              </li>
              <li>
                <Link to="/Categories">CATEGORIES</Link>
              </li>
            </ul>
          </div>
          <img src={user} alt="" className="userIcon" />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Bookstore />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
