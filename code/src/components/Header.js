import { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
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
        </ul>
      </nav>
      <div className="flex">
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
