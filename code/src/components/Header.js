import { useState, useContext } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img data-testid="logo" className="w-[100px]" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const isOnline = useOnline();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
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
          <Link to="/cart">
            <li data-testid="cart" className="mr-6 hover:underline">
              Cart - {cartItems.length}
            </li>
          </Link>
          <Link to="/instamart">
            <li className="mr-6 hover:underline">Instamart</li>
          </Link>
        </ul>
      </nav>
      <div className="flex">
        {/* <span className="font-bold text-white">{user.name}</span> */}
        <div
          data-testid="online-status"
          className="flex justify-center items-center mr-5"
        >
          {isOnline ? "🟢" : "🔴"}
        </div>
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
