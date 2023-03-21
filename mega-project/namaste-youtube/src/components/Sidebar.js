import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-72 bg-white">
      <ul className="pb-4">
        <li className="mb-6">
          <Link
            to="/"
            className="text-sm font-medium text-gray-900 hover:text-red-500"
          >
            Home
          </Link>
        </li>
        <li className="mb-3">
          <a
            href="#"
            className="text-sm font-medium text-gray-900 hover:text-red-500"
          >
            Shorts
          </a>
        </li>
        <li className="mb-3">
          <a
            href="#"
            className="text-sm font-medium text-gray-900 hover:text-red-500"
          >
            Video
          </a>
        </li>
        <li className="mb-3">
          <a
            href="#"
            className="text-sm font-medium text-gray-900 hover:text-red-500"
          >
            Live
          </a>
        </li>
      </ul>
      <h1 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">
        Subscriptions
      </h1>
      <ul className="mb-4">
        <li className="mb-3">
          <a
            href="#"
            className="text-sm font-medium text-gray-900 hover:text-red-500"
          >
            Music
          </a>
        </li>
        <li className="mb-3">
          <a
            href="#"
            className="text-sm font-medium text-gray-900 hover:text-red-500"
          >
            Sport
          </a>
        </li>
        <li className="mb-3">
          <a
            href="#"
            className="text-sm font-medium text-gray-900 hover:text-red-500"
          >
            Gaming
          </a>
        </li>
        <li className="mb-3">
          <a
            href="#"
            className="text-sm font-medium text-gray-900 hover:text-red-500"
          >
            Movies
          </a>
        </li>
      </ul>
      <h1 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">
        Watch Later
      </h1>
      <ul>
        <li className="mb-3">
          <a
            href="#"
            className="text-sm font-medium text-gray-900 hover:text-red-500"
          >
            Music
          </a>
        </li>
        <li className="mb-3">
          <a
            href="#"
            className="text-sm font-medium text-gray-900 hover:text-red-500"
          >
            Sport
          </a>
        </li>
        <li className="mb-3">
          <a
            href="#"
            className="text-sm font-medium text-gray-900 hover:text-red-500"
          >
            Gaming
          </a>
        </li>
        <li className="mb-3">
          <a
            href="#"
            className="text-sm font-medium text-gray-900 hover:text-red-500"
          >
            Movies
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
