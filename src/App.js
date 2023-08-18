import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/navbar.css';
import Bookstore from './components/myBookstore';
import Categories from './components/categories';

function App() {
  return (
    <>
      <nav className="navbar">
        <h1 className="navbarTitle">Bookstore CMS</h1>
        <ul className="navbarList">
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/Categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Bookstore />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
