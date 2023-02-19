import { useState, useContext } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Title = () => (
  <a href="/">
    <img className="w-[100px]" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white shadow shadow-lg">
      <Title />
      <nav className="flex">
        <ul className="flex">
          <Link to="/">
            <li className="mr-6 hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="mr-6 hover:underline">About</li>
          </Link>
          <Link to="/contact">
            <li className="mr-6 hover:underline">Contact</li>
          </Link>
          <li className="mr-6 hover:underline">Cart</li>
          <Link to="/instamart">
            <li className="mr-6 hover:underline">Instamart</li>
          </Link>
        </ul>
      </nav>
      <div className="flex">
        <span className="font-bold text-white">{user.name}</span>
        {isLoggedIn ? (
          <Link to="/">
            <button
              onClick={() => setIsLoggedIn(false)}
              className="bg-red-500 px-4 py-2 rounded-lg text-white"
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button
              onClick={() => setIsLoggedIn(true)}
              className="bg-green-500 px-4 py-2 rounded-lg text-white"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
