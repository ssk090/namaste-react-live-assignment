import { useState } from "react";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <Title />
      <nav className="flex">
        <ul className="flex">
          <li className="mr-6">Home</li>
          <li className="mr-6">About</li>
          <li className="mr-6">Contact</li>
          <li className="mr-6">Cart</li>
        </ul>
      </nav>
      <div className="flex">
        {isLoggedIn ? (
          <button
            onClick={() => setIsLoggedIn(false)}
            className="bg-red-500 px-4 py-2 rounded-lg text-white"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => setIsLoggedIn(true)}
            className="bg-green-500 px-4 py-2 rounded-lg text-white"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
